
const standingsTable = document.querySelector("#standings tbody");

fetch("https://v3.football.api-sports.io/standings?season=2023&league=135", {
  headers: {
    "x-apisports-key": "382aa87bf026d698bc470fee7d653e1b"
  }
})
.then(res => res.json())
.then(data => {
  const standings = data.response[0].league.standings[0];
  standingsTable.innerHTML = standings.map(team => {
    return `<tr>
      <td>${team.rank}</td>
      <td>${team.team.name}</td>
      <td>${team.points}</td>
    </tr>`;
  }).join("");
})
.catch(err => {
  standingsTable.innerHTML = "<tr><td colspan='3'>Errore nel caricamento</td></tr>";
  console.error(err);
});
