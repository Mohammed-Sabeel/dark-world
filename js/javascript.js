var form = document.getElementById("pubg-tournament");
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("pubg-tournament")),
    })

        .then(response => response, window.open("buy.html")
        )

        .catch(error => error.alert("check your internet"))
});




