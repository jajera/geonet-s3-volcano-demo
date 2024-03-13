
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
        <tbody>
          <tr>
              <td>KAKA</td>
              <td>Tongariro</td>
              <td>2024.070.1300.00.KAKA.01.jpg</td>
              <td>25 February 2024, 1300</td>
              <td>
								<a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/KAKA/KAKA.01/2024.070/2024.070.1300.00.KAKA.01.jpg" class="trigger">
									<img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/KAKA/KAKA.01/2024.070/2024.070.1300.00.KAKA.01.jpg" alt="">
								</a>
							</td>
          </tr>
          <tr>
              <td>KMTP</td>
              <td>Ruapehu & Ngauruhoe</td>
              <td>2024.070.1300.00.KMTP.01.jpg</td>
              <td>25 February 2024, 1300</td>
              <td>
								<a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/KMTP/KMTP.01/2024.070/2024.070.1300.00.KMTP.01.jpg" class="trigger">
									<img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/KMTP/KMTP.01/2024.070/2024.070.1300.00.KMTP.01.jpg" alt="">
								</a>
							</td>
          </tr>
          <tr>
              <td>MTSR</td>
              <td>Ruapehu South</td>
              <td>2024.070.1300.00.MTSR.01.jpg</td>
              <td>25 February 2024, 1300</td>
              <td>
								<a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/MTSR/MTSR.01/2024.070/2024.070.1300.00.MTSR.01.jpg" class="trigger">
									<img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/MTSR/MTSR.01/2024.070/2024.070.1300.00.MTSR.01.jpg" alt="">
								</a>
							</td>
          </tr>
          <tr>
              <td>RIMK</td>
              <td>Raoul Island</td>
              <td>2024.070.1300.00.RIMK.01.jpg</td>
              <td>25 February 2024, 1300</td>
              <td>
								<a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/RIMK/RIMK.01/2024.070/2024.070.1300.00.RIMK.01.jpg" class="trigger">
									<img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/RIMK/RIMK.01/2024.070/2024.070.1300.00.RIMK.01.jpg" alt="">
								</a>
							</td>
          </tr>
          <tr>
              <td>TEMO</td>
              <td>Taranaki</td>
              <td>2024.070.1310.00.TEMO.02.jpg</td>
              <td>25 February 2024, 1310</td>
              <td>
								<a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/TEMO/TEMO.02/2024.070/2024.070.1310.00.TEMO.02.jpg" class="trigger">
									<img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/TEMO/TEMO.02/2024.070/2024.070.1310.00.TEMO.02.jpg" alt="">
								</a>
							</td>
          </tr>
          <tr>
              <td>TOKR</td>
              <td>Tongariro Te Maari Crater</td>
              <td>2024.070.1310.00.TOKR.01.jpg</td>
              <td>25 February 2024, 1310</td>
              <td>
								<a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/TOKR/TOKR.01/2024.070/2024.070.1310.00.TOKR.01.jpg" class="trigger">
									<img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/TOKR/TOKR.01/2024.070/2024.070.1310.00.TOKR.01.jpg" alt="">
								</a>
							</td>
          </tr>
          <tr>
              <td>WHOH</td>
              <td>Whakatane</td>
              <td>2024.070.1310.00.WHOH.02.jpg</td>
              <td>25 February 2024, 1310</td>
              <td>
								<a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/WHOH/WHOH.02/2024.070/2024.070.1310.00.WHOH.02.jpg" class="trigger">
									<img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2024/WHOH/WHOH.02/2024.070/2024.070.1310.00.WHOH.02.jpg" alt="">
								</a>
							</td>
          </tr>
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
</html>
