import{s as h,n as l}from"../chunks/scheduler.BvLojk_z.js";import{S as m,i as b,e as n,s as f,c,a as u,g as x,b as p,d,f as s}from"../chunks/index.DlSoLAPZ.js";function v(g){let a,o,e,i=`<head><meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>GeoNet Camera Demo</title> <style>*{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
      }
      body{
        font-family: Helvetica;
        -webkit-font-smoothing: antialiased;
        background: #2b2b2b;
      }
      h1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: white;
        padding: 30px 0;
      }

      /* Table Styles */

      .table-wrapper{
        margin: 10px 70px 70px;
        box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
      }

      .fl-table {
        border-radius: 5px;
        font-size: 12px;
        font-weight: normal;
        border: none;
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        background-color: white;
      }

      .fl-table td, .fl-table th {
        text-align: center;
        padding: 8px;
      }

      .fl-table td {
        border-right: 1px solid #f8f8f8;
        font-size: 12px;
      }

      .fl-table thead th {
        color: #ffffff;
        background: #151515;
      }

      .fl-table thead th:nth-child(odd) {
        color: #ffffff;
        background: #151515;
      }

      .fl-table tr:nth-child(even) {
        background: #F8F8F8;
      }

      /* footer */

      .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        color: white;
        text-align: center;
      }

      /* Responsive */

      @media (max-width: 767px) {
        .fl-table {
            display: block;
            width: 100%;
        }
        .table-wrapper:before{
            content: "Scroll horizontally >";
            display: block;
            text-align: right;
            font-size: 11px;
            color: white;
            padding: 0 0 10px;
        }
        .fl-table thead, .fl-table tbody, .fl-table thead th {
            display: block;
        }
        .fl-table thead th:last-child{
            border-bottom: none;
        }
        .fl-table thead {
            float: left;
        }
        .fl-table tbody {
            width: auto;
            position: relative;
            overflow-x: auto;
        }
        .fl-table td, .fl-table th {
            padding: 20px .625em .625em .625em;
            height: 60px;
            vertical-align: middle;
            box-sizing: border-box;
            overflow-x: hidden;
            overflow-y: auto;
            width: 120px;
            font-size: 13px;
            text-overflow: ellipsis;
        }
        .fl-table thead th {
            text-align: left;
            border-bottom: 1px solid #f7f7f9;
        }
        .fl-table tbody tr {
            display: table-cell;
        }
        .fl-table tbody tr:nth-child(odd) {
            background: none;
        }
        .fl-table tr:nth-child(even) {
            background: transparent;
        }
        .fl-table tr td:nth-child(odd) {
            background: #F8F8F8;
            border-right: 1px solid #E6E4E4;
        }
        .fl-table tr td:nth-child(even) {
            border-right: 1px solid #E6E4E4;
        }
        .fl-table tbody td {
            display: block;
            text-align: center;
        }
      }

      /* Open Enlarged Image */
      img {
        cursor: pointer;
        width: 900px;
        max-width: 10%;
        aspect-ratio: 1.5/1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 10%;
        color: white;
        border-radius: 10px;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }

        &:before {
          border-radius: 15px;
          position: relative;
          background: #ccc;
          z-index: 1;
          height: 10%;
          color: black;
          content: attr(alt);
          display: grid;
          place-items: center;
        }
      }

      .load-image {
        display: block;
        background: #ccc;
        height: 100%;
        width: 100%;
        border-radius: 15px;
        display: grid;
        align-items: center;
        text-align: center;
        text-decoration: none;
        color: black;
        opacity: 0.7;
        transition: all 0.3s ease;

        &:hover {
          opacity: 1;
        }
      }

      .overlay {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
      }

      .modal {
          display: none;
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }

      .modal img {
          max-width: 100%;
          max-height: 90vh;
      }

      .close {
          position: absolute;
          top: 10px; right: 10px;
          cursor: pointer;
      }</style></head> <body><h1>GeoNet Camera Demo</h1> <div class="table-wrapper"><table class="fl-table"><thead><tr><th>Id</th> <th>Location</th> <th>Filename</th> <th>Date Timestamp (UTC)</th> <th>Image</th></tr></thead> <tbody><tr><td>KAKA</td> <td>Tongariro</td> <td>2025.089.1310.00.KAKA.01.jpg</td> <td>30 March 2025, 1310</td> <td><a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/KAKA/KAKA.01/2025.089/2025.089.1310.00.KAKA.01.jpg" class="trigger"><img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/KAKA/KAKA.01/2025.089/2025.089.1310.00.KAKA.01.jpg" alt=""/></a></td></tr> <tr><td>KMTP</td> <td>Ruapehu &amp; Ngauruhoe</td> <td>2025.089.1310.00.KMTP.01.jpg</td> <td>30 March 2025, 1310</td> <td><a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/KMTP/KMTP.01/2025.089/2025.089.1310.00.KMTP.01.jpg" class="trigger"><img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/KMTP/KMTP.01/2025.089/2025.089.1310.00.KMTP.01.jpg" alt=""/></a></td></tr> <tr><td>MTSR</td> <td>Ruapehu South</td> <td>2025.089.1310.00.MTSR.01.jpg</td> <td>30 March 2025, 1310</td> <td><a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/MTSR/MTSR.01/2025.089/2025.089.1310.00.MTSR.01.jpg" class="trigger"><img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/MTSR/MTSR.01/2025.089/2025.089.1310.00.MTSR.01.jpg" alt=""/></a></td></tr> <tr><td>RIMK</td> <td>Raoul Island</td> <td>2025.089.1310.00.RIMK.01.jpg</td> <td>30 March 2025, 1310</td> <td><a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/RIMK/RIMK.01/2025.089/2025.089.1310.00.RIMK.01.jpg" class="trigger"><img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/RIMK/RIMK.01/2025.089/2025.089.1310.00.RIMK.01.jpg" alt=""/></a></td></tr> <tr><td>TEMO</td> <td>Taranaki</td> <td>2025.089.1300.00.TEMO.02.jpg</td> <td>30 March 2025, 1300</td> <td><a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/TEMO/TEMO.02/2025.089/2025.089.1300.00.TEMO.02.jpg" class="trigger"><img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/TEMO/TEMO.02/2025.089/2025.089.1300.00.TEMO.02.jpg" alt=""/></a></td></tr> <tr><td>TOKR</td> <td>Tongariro Te Maari Crater</td> <td>2025.089.1300.00.TOKR.01.jpg</td> <td>30 March 2025, 1300</td> <td><a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/TOKR/TOKR.01/2025.089/2025.089.1300.00.TOKR.01.jpg" class="trigger"><img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/TOKR/TOKR.01/2025.089/2025.089.1300.00.TOKR.01.jpg" alt=""/></a></td></tr> <tr><td>WHOH</td> <td>Whakatane</td> <td>2025.089.1300.00.WHOH.02.jpg</td> <td>30 March 2025, 1300</td> <td><a href="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/WHOH/WHOH.02/2025.089/2025.089.1300.00.WHOH.02.jpg" class="trigger"><img src="https://geonet-open-data.s3-ap-southeast-2.amazonaws.com/camera/volcano/images/2025/WHOH/WHOH.02/2025.089/2025.089.1300.00.WHOH.02.jpg" alt=""/></a></td></tr> </tbody><tbody></tbody></table></div> <div class="overlay"></div> <div class="modal"><span class="close">×</span> <img src="" alt=""/></div> <div class="footer"><p>Last update: 01 April 2025, 10:16 PM UTC</p></div> <script>document.querySelectorAll(".trigger").forEach(trigger => {
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
    }<\/script></body>`;return{c(){a=n("!DOCTYPE"),o=f(),e=n("html"),e.innerHTML=i,this.h()},l(t){a=c(t,"!DOCTYPE",{html:!0}),o=u(t),e=c(t,"HTML",{lang:!0,"data-svelte-h":!0}),x(e)!=="svelte-12l4mvp"&&(e.innerHTML=i),this.h()},h(){p(a,"html",""),p(e,"lang","en")},m(t,r){d(t,a,r),d(t,o,r),d(t,e,r)},p:l,i:l,o:l,d(t){t&&(s(a),s(o),s(e))}}}class M extends m{constructor(a){super(),b(this,a,null,v,h,{})}}export{M as component};
