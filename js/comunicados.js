let http = new XMLHttpRequest();
http.open('get', '../json/comunicados.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		// Função PARSE para converter as StringsJson em um array javascript.
		let jsonComunicados = JSON.parse(this.responseText);
		// Variavel vazia para armazenar os layouts/cards
		let constroiCard = "";
        let indice = -1;
		// Add cartão na construtora em cada loop. *E para os cartões 0 e 5 add cor vermelha de alerta
		for(let item of jsonComunicados){ 
            indice = indice + 1;
            if (indice == 0 || indice == 5) {
                constroiCard += `
                    <div>
                        <div  class="card" style="background-color: rgb(234, 64, 64);">
                            <img class="card-img-top" src="${item.foto}" alt="${item.cardTitle}">
                            <p class="cardTitle">${item.cardTitle}</p>
                            <p class="cardText">${item.cardText}</p>
                            <a href="${item.linkSaibaMais}" class="linkSaibaMais btn btn-primary">Saiba mais...</a>
                        </div>
                    </div>                     				
			`;   
            } else {                
			constroiCard += `
                <div>
                    <div  class="card">
                        <img class="card-img-top" src="${item.foto}" alt="${item.cardTitle}">
                        <p class="cardTitle">${item.cardTitle}</p>
                        <p class="cardText">${item.cardText}</p>
                        <a href="${item.linkSaibaMais}" class="linkSaibaMais btn btn-primary">Saiba mais...</a>
                    </div>   
                </div>                  				
			`;
            }
		}
		document.querySelector(".cardsContainer").innerHTML = constroiCard;
	}
} 
