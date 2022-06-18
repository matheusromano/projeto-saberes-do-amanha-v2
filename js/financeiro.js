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
                    <th>Valor</th>
                    <th>Status Pagamento</th>                         
                </table>
                `;                  
            } else if(indice == 2)  {
			    constroiTable += `      
                <tr id="tr-hover">             
                    <td>${item.codControle}</td>             
                    <td>${item.descricao}</td>
                    <td>${item.mes}</td>
                    <td>${item.valor}</td>
                    <td><button class="btn btn-danger btn-sm rounded-5" style="--bs-btn-font-size: 1rem" id="btnPagar"><a target="_blank" href="http://www.sicadi.com.br/mhouse/boleto/boleto3.php?numero_banco=341-7&local_pagamento=PAG%C1VEL+EM+QUALQUER+BANCO+AT%C9+O+VENCIMENTO&cedente=Escola+Saberes+do+Amanh%E3+-+Maternal+e+Fundamental&data_documento=18%2F06%2F2022&numero_documento=DF+00113&especie=&aceite=N&data_processamento=18%2F06%2F2022&uso_banco=&carteira=179&especie_moeda=Real&quantidade=1&valor=R%24+1.500%2C00&vencimento=23%2F06%2F2022&agencia=0049&codigo_cedente=10201-5&meunumero=00010435&valor_documento=1.500%2C00&instrucoes=Mensalidade+ref%EArente+ao+m%EAs+de+Maio%0D%0AAp%F3s+o+vencimento+R%24+7%2C80+ao+dia&mensagem1=&mensagem2=&mensagem3=ATEN%C7%C3O%3A+N%C3O+RECEBER+AP%D3S+15+DIAS+DO+VENCIMENTO&sacado=&Submit=Enviar" id="linkPagar">${item.statusPagamento}</a></button></td>
                </tr>                                                                                                              				
			`; 
            } else {
			    constroiTable += `      
                <tr id="tr-hover">             
                    <td>${item.codControle}</td>             
                    <td>${item.descricao}</td>
                    <td>${item.mes}</td>
                    <td>${item.valor}</td>
                    <td><button class="btn btn-success btn-sm rounded-5">${item.statusPagamento}</button></td>
                </tr>                                                                                                              				
			`;
            

            }
		}
		document.querySelector(".finaceiroTables").innerHTML = constroiTable;
	}
} 



