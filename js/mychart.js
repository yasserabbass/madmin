
new Chart(document.getElementById("bar-chart"), {
  "type": "line",
  "data": {
    "labels": ["January", "February", "March", "April", "May", "June", "July"],
    "datasets": [{
      "label": "Views per month",
      "data": [90, 59, 80, 81, 56, 55, 40],
      "fill": false,
      "borderColor": "rgb(75, 192, 192)",
      "lineTension": 0.1
    }]
  },
  "options": {

  }
});