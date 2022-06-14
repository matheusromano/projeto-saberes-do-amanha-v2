let http = new XMLHttpRequest();
http.open('get', 'https://mbairo.github.io/page/financeiro.json', true);
http.send();
http.onload = function(){
  //4: Pedido finalizado e resposta pronta // 200: "OK" // 4 e 20 = reposta pronta 
	if(this.readyState == 4 && this.status == 200){
		// Função PARSE para converter as StringsJson em um array javascript.
		let jsonFinanceiro = JSON.parse(this.responseText);
		// Variavel vazia para armazenar os layouts/cards
		let constroiTable = "";
        var indice = 0;
		// Add cartão na construtora em cada loop. *E para os cartões 0 e 5 add cor vermelha de alerta
		for(let item of jsonFinanceiro){ 
            indice = indice + 1;
            if (indice == 1) {
                constroiTable += `
                <table>
                    <th>Cód. Controle</th>
                    <th>Descrição</th>
                    <th>Mês</th>
                    <th>Status Pagamento</th>                         
                </table>
                `;                  
            } else if(indice == 2)  {
			    constroiTable += `      
                <tr id="tr-hover">             
                    <td>${item.codControle}</td>             
                    <td>${item.descricao}</td>
                    <td>${item.mes}</td>
                    <td><button type="button" class="btn btn-danger btn-sm rounded-5" style="--bs-btn-font-size: 1rem" id="btn-hover"><a target="_blank" href="https://www.infopedia.pt/dicionarios/lingua-portuguesa/caloteiro" id="link-material">${item.statusPagamento}</a></button></td>                                              
                </tr>                                                                                                              				
			`; 
            } else {
			    constroiTable += `      
                <tr id="tr-hover">             
                    <td>${item.codControle}</td>             
                    <td>${item.descricao}</td>
                    <td>${item.mes}</td>
                    <td><button class="btn btn-success btn-sm rounded-5">${item.statusPagamento}</button></td>
                </tr>                                                                                                              				
			`;
            

            }
		}
		document.querySelector(".finaceiroTables").innerHTML = constroiTable;
	}
} 



