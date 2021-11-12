function showCard(heroe) {
    document.getElementById("content").innerHTML += '<article class="card">' +
        '<img src="' + heroe.image + '" />' +
        '<h1>' + heroe.name + '</h1>' +
        '<p>Inteligência:<span style="width:' + heroe.intelligence + '%" class="bar"></span></p>' +
        '</article>'
}


function getHeroe(id) {
    fetch('https://www.superheroapi.com/api.php/10157235598301512/' + id)
    // .then(response => response.json() )
    .then(function(response){ 
        return response.json()
    })
    .then(function(json) {
        showCard({
            name: json.name,
            image: json.image.url,
            intelligence: json.powerstats.intelligence,
        })
    })
    .catch(function(error) {
        //alert("Não foi possível carregar os dados do heroi 701");
    });
}

for(var i=0; i<10; i++) {
    let id = Math.random() * (731 - 1) + 1;
    getHeroe(parseInt(id));
}

