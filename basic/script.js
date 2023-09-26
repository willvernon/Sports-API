window.onload = function () {
  fetch("https://sportspage-feeds.p.rapidapi.com/teams?league=NFL", {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "sportspage-feeds.p.rapidapi.com",
      "X-RapidAPI-Key": "e0c3baba8emsh8b92ded722bfb1dp1d6d28jsn6da46d8dafe8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("info").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch((err) => console.error(err));
};
