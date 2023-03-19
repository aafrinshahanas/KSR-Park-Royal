
    function masterPlan() {
        const Masterh4headering = document.getElementById("master-plan-h4");
        const Masterh2headering = document.getElementById("master-plan-h2");
        const masterPara = document.getElementById("master-plan-para");

        //
        const floorh4headering = document.getElementById("floor-plan-h4");
        const floorpara = document.getElementById("floor-plan-para");
        const floorh2heading = document.getElementById("floor-plan-h2");

          masterPara.style.display= "block";
          Masterh2headering.style.color= "black";
          Masterh2headering.style.display= "block";
          Masterh4headering.style.display= "block";
          Masterh4headering.style.color= "black";

          floorpara.style.display = "none";
          floorh2heading.style.display = "none";
          floorh4headering.style.color= "#868b91"
      }

      function floorPlan(){
          //floor
          const floorh4headering = document.getElementById("floor-plan-h4");
          const floorpara = document.getElementById("floor-plan-para");
          const floorh2heading = document.getElementById("floor-plan-h2");
          //master
          const Masterh4headering = document.getElementById("master-plan-h4");
          const Masterh2headering = document.getElementById("master-plan-h2");
          const masterPara = document.getElementById("master-plan-para");

          masterPara.style.display= "none";
          Masterh2headering.style.color= "#868b91";
          Masterh2headering.style.display= "none";
          Masterh4headering.style.display= "block";
          Masterh4headering.style.color= "#868b91";


          floorpara.style.display = "block";
          floorh2heading.style.display = "block";
          floorh4headering.style.color= "black"
      }



