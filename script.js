$(document).ready(() => {
      let getData = () => {
        let obj = {
          type: "GET",
          url: "https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets",
          headers: {token : "kdmXpmwSCrxHVrhYcxIOJTSuVaKLHUzZ"},
          dataType: "json",
          timeout: 3000,
          error: () => {
            alert("Error loading data")
          },
          complete: () => {
            console.log("GET request complete")
          }
        }
        $.ajax(obj).done((data) => {
          let datasets = data["results"]
          for(let i=0; i<datasets.length; i++){
            $(".datasets").append("<tr><td>" +datasets[i].id+ "</td><td>" +datasets[i].name+ "</td><td>" +datasets[i].mindate+ "</td><td>" +datasets[i].maxdate+ "</td><td>" +datasets[i].datacoverage+ "</td><td>" +datasets[i].uid+ "</td></tr>")
          }
        })
      }

      getData()  
    })
