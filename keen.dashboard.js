var client = new Keen({
  projectId: "53cabe6cce5e433067000003",
  readKey: "01ece0f49a14f7bc688c428f0a779f7d973894a5516540670cca486b041d6aeb228c0219933a003af48a385cd71e42aac8853f9485792abe31057f0f8067b2c438bf1efa823139f6a996918dc277df8caac3813ad9d8d1cbd173bce7fdab8944ab439ac3488a9ccbc1b7d53b14ffd24a"
});

Keen.ready(function(){


  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "temp1Bugs3",
    interval: "hourly",
    groupBy: "user.device_info.browser.family",
    timeframe: “this_week”
  });
  client.draw(pageviews_timeline, document.getElementById("chart-03"), {
    chartType: "columnchart",
    title: false,
     height: 150,
     width: “auto”,
     chartOptions: {
       chartArea: {
       height: “75%”,
       left: “7%”,
       top: “5%”,
       width: “85%”
     },
     hAxis: {
     gridlines: {
     count: 12
     },
   format: “MMM d”
   },
   vAxis: {
     format: “####”,
     title: “Steps”
   },
   bar: {groupWidth: “95%”}
 }
  });
   setInterval(function () {
 req_three_month_history.refresh();
 }, 100);
