#!/bin/bash

export AWS_PAGER=""

CURRENT_YEAR=$(date +'%Y')
S3_BUCKET='geonet-open-data'
SUB_DIRS='KAKA KMTP MTSR RIMK TEMO TOKR WHOH'
SUB_DIR_NAMES=("Tongariro" "Ruapehu & Ngauruhoe" "Ruapehu South" "Raoul Island" "Taranaki" "Tongariro Te Maari Crater" "Whakatane")
AWS_REGION='ap-southeast-2'
S3_BUCKET_URL="https://${S3_BUCKET}.s3-${AWS_REGION}.amazonaws.com"

TOP_CONTENT='
<!DOCTYPE html>
<html lang="en">
	<body>
    <h1>GeoNet Camera Demo</h1>
    <div class="table-wrapper">
      <table class="fl-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Location</th>
            <th>Filename</th>
            <th>Date Timestamp</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>'

index=0
for SUB_DIR in $SUB_DIRS; do
	echo "Processing $SUB_DIR"
	LATEST_IMAGE="$(aws s3api list-objects-v2 --no-sign-request --bucket $S3_BUCKET --prefix camera/volcano/images/${CURRENT_YEAR}/${SUB_DIR} | grep '"Key"' | tail -n 1 | awk -F'"' '{print $4}')"
  LOCATION=$(echo "${SUB_DIR_NAMES[$index]}")
  DATETIMESTAMP_RAW="$(echo $LATEST_IMAGE | grep -oP '\d{4}\.\d{3}\.\d{4}')"
  YEAR=$(echo "$DATETIMESTAMP_RAW" | cut -d '.' -f1)
  DOY=$(echo "$DATETIMESTAMP_RAW" | cut -d '.' -f2)
  TIME=$(echo "$DATETIMESTAMP_RAW" | cut -d '.' -f3)
  DATE_MONTH=$(date -d "$YEAR-01-01 +$((DOY-1)) days" +"%d %B")
  DATETIMESTAMP=$(echo "$DATE_MONTH $YEAR, $TIME")
  FILENAME=$(basename "$LATEST_IMAGE")

	BODY_CONTENT+="
          <tr>
              <td>$SUB_DIR</td>
              <td>$LOCATION</td>
              <td>$FILENAME</td>
              <td>$DATETIMESTAMP</td>
              <td>
								<a href=\"${S3_BUCKET_URL}/${LATEST_IMAGE}\" class=\"trigger\">
									<img src=\"${S3_BUCKET_URL}/${LATEST_IMAGE}\" alt=\"\">
								</a>
							</td>
          </tr>"
  ((index++))
done

BOTTOM_CONTENT='
        </tbody><tbody> </tbody>
      </table>
    </div>
    
		<div class="overlay"></div>
		<div class="modal">
			<span class="close">&times;</span>
			<img src="" alt="" />
		</div>

		<script>
			document.querySelectorAll(".trigger").forEach(trigger => {
        trigger.addEventListener("click", function (event) {
          event.preventDefault();
          const imageURL = this.getAttribute("href");
          const modal = document.querySelector(".modal");
          const enlargedImage = modal.querySelector("img");
          enlargedImage.setAttribute("src", imageURL);
          document.querySelector(".overlay").style.display = "block";
          modal.style.display = "block";
        });
      });

      document.querySelector(".close").addEventListener("click", () => closeModal());
      document.querySelector(".overlay").addEventListener("click", () => closeModal());

      function closeModal() {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".modal").style.display = "none";
      }
		</script>
	</body>
</html>'

echo "$TOP_CONTENT$BODY_CONTENT$BOTTOM_CONTENT" > svelte/src/routes/+page.svelte

echo "Content written to +page.svelte file."
