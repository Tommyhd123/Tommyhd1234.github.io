fetch("players.json")
.then(function (response) {
        return response.json();
    })
.then(function (players) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let player of players) {
            out += `
        <tr>
            <td><img src='${player.image}'></td>
            <td>${player.name}</td>
            <td>${player.team}</td>
        </tr>
        `
        }

        placeholder.innerHTML = out;
    })