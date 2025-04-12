
const apiKey = "382aa87bf026d698bc470fee7d653e1b";
const liveContainer = document.getElementById("live-matches");

fetch("https://v3.football.api-sports.io/fixtures?live=all&league=135", {
  headers: {
    "x-apisports-key": apiKey
  }
})
.then(res => res.json())
.then(data => {
  if (data.response.length === 0) {
    liveContainer.innerHTML = "<p>Nessuna partita in diretta al momento.</p>";
    return;
  }
  liveContainer.innerHTML = data.response.map(match => {
    const home = match.teams.home.name;
    const away = match.teams.away.name;
    const score = `${match.goals.home} - ${match.goals.away}`;
    const time = match.fixture.status.elapsed;
    return `<p><strong>${home}</strong> ${score} <strong>${away}</strong> (${time}') </p>`;
  }).join("");
})
.catch(err => {
  liveContainer.innerHTML = "<p>Errore nel caricamento dei dati live.</p>";
  console.error(err);
});
