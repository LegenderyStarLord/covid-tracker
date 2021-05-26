const url = "https://api.caw.sh/v3/covid-19/countries/ukraine?strict=true";

$.get(url, function(data){

    const cases = data.cases;
    const deaths = data.deaths;
    const recovered = data.recovered;
    const active = data.active;

$(".cases").text(cases);
$(".deaths").text(deaths);
$(".recovered").text(recovered);  
$(".active").text(active);


    
    
Chart.defaults.font.size = 15;
Chart.defaults.color = "#000000";

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Cases', 'Deaths', 'Recovered', 'Active'],
      datasets: [{
          label: 'Statistics',
          data: [cases, deaths, recovered, active],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    responsive: true,
    font: {
        size: 200
    },
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
})


$.get(url, function(data){

    const todayCases = data.todayCases;
    const todayDeaths = data.todayDeaths;
    const todayRecovered = data.todayRecovered;
    const casesPerOneMillion = data.casesPerOneMillion;
    const deathsPerOneMillion = data.deathsPerOneMillion;


    $(".todayCases").text(todayCases);
    $(".todayDeaths").text(todayDeaths);
    $(".todayRecovered").text(todayRecovered);  
    $(".deathsPerMilion").text(deathsPerOneMillion);



var ctx = document.getElementById('myChart1');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ['Today Cases', 'Today Deaths', 'Today Recovered','Deaths per Milion'],
      datasets: [{
         
          data: [todayCases, todayDeaths, todayRecovered, deathsPerOneMillion],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
          ],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
      }]
  },
});
});
