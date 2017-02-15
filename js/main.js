$(function(){
	$('#todos-medicos').on('click', function(e){
		e.preventDefault();
		$('#todos-medicos').addClass('disabled');
		$('#table-todos-medicos > tbody').empty();
		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/todosmedicos', {
			method: 'get'
		}).then(function(response) {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.indexOf("application/json") !== -1) {
			    return response.json().then(function(json) {
			      $.each(json, function (i, item) {
			      	var tr = $('<tr/>');
		            tr.append("<td>" + item.nome + "</td>");
		            tr.append("<td>" + item.apelido + "</td>");
		            tr.append("<td>" + item.email + "</td>");
		            $('#table-todos-medicos').append(tr);
			      })
			      $('#todos-medicos').removeClass('disabled');
			    });
			} else {
				$('#todos-medicos').removeClass('disabled');
			    console.log("Não temos JSON!");
			}
		}).catch(function(err) {
			console.log(err);
			$('#todos-medicos').removeClass('disabled');
		});
	});
});

$(function(){
	$('#ummedico').on('click', function(e){
		e.preventDefault();
		$('#ummedico').addClass('disabled');
		var idMedico = $('#findIdMedico').val();
		$('#table-ummedico > tbody').empty();
		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/ummedico?id='+idMedico, {
			method: 'get'
		}).then(function(response) {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.indexOf("application/json") !== -1) {
			    return response.json().then(function(json) {			    	
			    	var tr = $('<tr/>');
		            tr.append("<td>" + json.nome + "</td>");
		            tr.append("<td>" + json.apelido + "</td>");
		            tr.append("<td>" + json.email + "</td>");
		            $('#table-ummedico').append(tr);
			      $('#ummedico').removeClass('disabled');
			    });
			} else {
				$('#ummedico').removeClass('disabled');
			    console.log("Não temos JSON!");
			}
		}).catch(function(err) {
			console.log(err);
			$('#ummedico').removeClass('disabled');
		});
	});
});

$(function(){
	$('#umutente').on('click', function(e){
		e.preventDefault();
		$('#umutente').addClass('disabled');
		var idUtente = $('#findIdUtente').val();
		$('#table-umutente > tbody').empty();
		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/umutente?id='+idUtente, {
			method: 'get'
		}).then(function(response) {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.indexOf("application/json") !== -1) {
			    return response.json().then(function(json) {			    	
			    	var tr = $('<tr/>');
		            tr.append("<td>" + json.nome + "</td>");
		            tr.append("<td>" + json.apelido + "</td>");
		            tr.append("<td>" + json.email + "</td>");
		            $('#table-umutente').append(tr);
			      $('#umutente').removeClass('disabled');
			    });
			} else {
				$('#umutente').removeClass('disabled');
			    console.log("Não temos JSON!");
			}
		}).catch(function(err) {
			console.log(err);
			$('#umutente').removeClass('disabled');
		});
	});
});


$(function(){
	$('#umaconsulta').on('click', function(e){
		e.preventDefault();
		$('#umaconsulta').addClass('disabled');
		var idConsulta = $('#findIdConsulta').val();
		$('#table-umaconsulta > tbody').empty();
		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/umaconsulta?id='+idConsulta, {
			method: 'get'
		}).then(function(response) {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.indexOf("application/json") !== -1) {
			    return response.json().then(function(json) {			    	
			    	var tr = $('<tr/>');
		            tr.append("<td>" + json.datahora + "</td>");
		            tr.append("<td>" + json.utente_id + "</td>");
		            tr.append("<td>" + json.medico_id + "</td>");
		            tr.append("<td>" + json.diagnostico + "</td>");
		            $('#table-umaconsulta').append(tr);
			      $('#umaconsulta').removeClass('disabled');
			    });
			} else {
				$('#umaconsulta').removeClass('disabled');
			    console.log("Não temos JSON!");
			}
		}).catch(function(err) {
			console.log(err);
			$('#umaconsulta').removeClass('disabled');
		});
	});
});


$(function(){
	$('#todos-utentes').on('click', function(e){
		e.preventDefault();
		$('#todos-utentes').addClass('disabled');
		$('#table-todos-utentes > tbody').empty();
		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/todosutentes', {
			method: 'get'
		}).then(function(response) {
			console.log(response);
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.indexOf("application/json") !== -1) {
			    return response.json().then(function(json) {
			      $.each(json, function (i, item) {
			      	var tr = $('<tr/>');
		            tr.append("<td>" + item.nome + "</td>");
		            tr.append("<td>" + item.apelido + "</td>");
		            tr.append("<td>" + item.email + "</td>");
		            $('#table-todos-utentes').append(tr);
			      })
			      $('#todos-utentes').removeClass('disabled');
			    });
			} else {
				$('#todos-utentes').removeClass('disabled');
			    console.log("Não temos JSON!");
			}
		}).catch(function(err) {
			console.log(err);
			$('#todos-utentes').removeClass('disabled');
		});
	});
});

$(function(){
	$('#todas-consultas').on('click', function(e){
		e.preventDefault();
		$('#todas-consultas').addClass('disabled');
		$('#table-todas-consultas > tbody').empty();
		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/todasconsultas', {
			method: 'get'
		}).then(function(response) {
			var contentType = response.headers.get("content-type");
			if(contentType && contentType.indexOf("application/json") !== -1) {
			    return response.json().then(function(json) {
			      $.each(json, function (i, item) {
			      	console.log(item);
			      	var tr = $('<tr/>');
		            tr.append("<td>" + item.datahora + "</td>");
		            tr.append("<td>" + item.utente_id + "</td>");
		            tr.append("<td>" + item.medico_id + "</td>");
		            tr.append("<td>" + item.diagnostico + "</td>");
		            $('#table-todas-consultas').append(tr);
			      })
			      $('#todas-consultas').removeClass('disabled');
			    });
			} else {
				$('#todas-consultas').removeClass('disabled');
			    console.log("Não temos JSON!");
			}
		}).catch(function(err) {
			console.log(err);
			$('#todas-consultas').removeClass('disabled');
		});
	});
});


$(function(){
	$('#inserir-medico').on('click', function(e){
		var nomeMedico = $('#medicoNome').val();
		var apelidoMedico = $('#medicoApelido').val();
		var emailMedico = $('#medicoEmail').val();

		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/medicos", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	nome:nomeMedico,
							apelido:apelidoMedico,
							email:emailMedico})
		  }).then(function(response) {
			console.log('OK');
		}).catch(function(err) {
			console.log(err);
			$('#inserir-medico').removeClass('disabled');
		});
	});
});


$(function(){
	$('#inserir-utente').on('click', function(e){
		var nomeUtente = $('#utenteNome').val();
		var apelidoUtente = $('#utenteApelido').val();
		var emailUtente = $('#utenteEmail').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/utentes", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	nome:nomeUtente,
							apelido:apelidoUtente,
							email:emailUtente})
		  }).then(function(response) {
			console.log('OK');
		}).catch(function(err) {
			console.log(err);
			$('#inserir-utente').removeClass('disabled');
		});
	});
});

$(function(){
	$('#inserir-consulta').on('click', function(e){
		var datahoraConsulta = $('#datahora').val();
		var utente_idConsulta = $('#utente_id').val();
		var medico_idConsulta = $('#medico_id').val();
		var diagnosticoConsulta = $('#diagnostico').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/consultas", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	datahora:datahoraConsulta,
							utente_id:utente_idConsulta,
							medico_id:medico_idConsulta,
							diagnostico:diagnosticoConsulta})
		  }).then(function(response) {
			console.log('OK');
		}).catch(function(err) {
			console.log(err);
			$('#inserir-consulta').removeClass('disabled');
		});
	});
});


$(function(){
	$('#apagar-consulta').on('click', function(e){
		var idConsulta = $('#id-consulta').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/apagaconsulta", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	id:idConsulta})
		  }).then(function(response) {
			console.log('OK');
		}).catch(function(err) {
			console.log(err);
			$('#apagar-consulta').removeClass('disabled');
		});
	});
});

$(function(){
	$('#apagar-utente').on('click', function(e){
		var idUtente = $('#id-utente').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/apagautente", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	id:idUtente})
		  }).then(function(response) {
			console.log('OK');
		}).catch(function(err) {
			console.log(err);
			$('#apagar-utente').removeClass('disabled');
		});
	});
});

$(function(){
	$('#apagar-medico').on('click', function(e){
		var idMedico = $('#id-medico').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/apagamedico", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	id:idMedico})
		  }).then(function(response) {
			console.log('OK');
		}).catch(function(err) {
			console.log(err);
			$('#apagar-medico').removeClass('disabled');
		});
	});
});

$(function(){
	$('#atualizar-medico').on('click', function(e){
		$('#atualizar-medico').addClass('disabled');
		var idMedico = $('#medicoIdUpdate').val();
		var nomeMedico = $('#medicoNomeUpdate').val();
		var apelidoMedico = $('#medicoApelidoUpdate').val();
		var emailMedico = $('#medicoEmailUpdate').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/atualizamedico", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	id:idMedico,
								    nome:nomeMedico,
									apelido: apelidoMedico,
									email:emailMedico})
		  }).then(function(response) {
			console.log('OK');
			$('#atualizar-medico').removeClass('disabled');
		}).catch(function(err) {
			console.log(err);
			$('#atualizar-medico').removeClass('disabled');
		});
	});
});

$(function(){
	$('#atualizar-utente').on('click', function(e){
		$('#atualizar-utente').addClass('disabled');
		var idUtente = $('#utenteIdUpdate').val();
		var nomeUtente = $('#utenteNomeUpdate').val();
		var apelidoUtente = $('#utenteApelidoUpdate').val();
		var emailUtente = $('#utenteEmailUpdate').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/atualizautente", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	id:idUtente,
								    nome:nomeUtente,
									apelido: apelidoUtente,
									email:emailUtente})
		  }).then(function(response) {
			console.log('OK');
			$('#atualizar-utente').removeClass('disabled');
		}).catch(function(err) {
			console.log(err);
			$('#atualizar-utente').removeClass('disabled');
		});
	});
});

$(function(){
	$('#atualizar-consulta').on('click', function(e){
		$('#atualizar-consulta').addClass('disabled');
		var idConsulta = $('#consultaIdUpdate').val();
		var datahora = $('#datahoraUpdate').val();
		var utenteId = $('#utente_idUpdate').val();
		var medicoId = $('#medico_idUpdate').val();
		var diagnostico = $('#diagnosticoUpdate').val();
		
		fetch("https://trabalho-pwc-marcorodrigues.c9users.io/atualizaconsulta", {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({	id:idConsulta,
								    datahora:datahora,
									utente_id: utenteId,
									medico_id:medicoId,
									diagnostico:diagnostico})
		  }).then(function(response) {
			console.log('OK');
			$('#atualizar-consulta').removeClass('disabled');
		}).catch(function(err) {
			console.log(err);
			$('#atualizar-consulta').removeClass('disabled');
		});
	});
});

$(function(){
	$('#navbar-listUtentes').on('click', function(e){
		hideDivs();
		$(".listUtentes").show();
	});
});

$(function(){
	$('#navbar-listMedicos').on('click', function(e){
		hideDivs();
		$(".listMedicos").show();
	});
});

$(function(){
	$('#navbar-listConsultas').on('click', function(e){
		hideDivs();
		$(".listConsultas").show();
	});
});

$(function(){
	$('#navbar-insertMedicos').on('click', function(e){
		hideDivs();
		$(".insertMedico").show();
	});
});

$(function(){
	$('#navbar-insertUtentes').on('click', function(e){
		hideDivs();
		$(".insertUtente").show();
	});
});

$(function(){
	$('#navbar-insertConsultas').on('click', function(e){
		hideDivs();
		$(".insertConsulta").show();
	});
});

$(function(){
	$('#navbar-deleteMedicos').on('click', function(e){
		hideDivs();
		$(".deleteMedico").show();
	});
});

$(function(){
	$('#navbar-deleteUtentes').on('click', function(e){
		hideDivs();
		$(".deleteUtente").show();
	});
});

$(function(){
	$('#navbar-deleteConsultas').on('click', function(e){
		hideDivs();
		$(".deleteConsulta").show();
	});
});

$(function(){
	$('#navbar-updateConsultas').on('click', function(e){
		hideDivs();
		$(".updateConsulta").show();
	});
});

$(function(){
	$('#navbar-updateMedicos').on('click', function(e){
		hideDivs();
		$(".updateMedico").show();
	});
});

$(function(){
	$('#navbar-updateUtentes').on('click', function(e){
		hideDivs();
		$(".updateUtente").show();
	});
});


$(function(){
	$('#navbar-findOneMedicos').on('click', function(e){
		hideDivs();
		$(".findOneMedico").show();
	});
});

$(function(){
	$('#navbar-findOneConsultas').on('click', function(e){
		hideDivs();
		$(".findOneConsulta").show();
	});
});

$(function(){
	$('#navbar-findOneUtentes').on('click', function(e){
		hideDivs();
		$(".findOneUtente").show();
	});
});

$(function(){
	hideDivs();
});

function hideDivs(){
	$(".listUtentes").hide();
	$(".listMedicos").hide();
	$(".listConsultas").hide();
	$(".insertMedico").hide();
	$(".insertUtente").hide();
	$(".insertConsulta").hide();
	$(".deleteMedico").hide();
	$(".deleteUtente").hide();
	$(".deleteConsulta").hide();
	$(".updateUtente").hide();
	$(".updateConsulta").hide();
	$(".updateMedico").hide();
	$(".findOneMedico").hide();
	$(".findOneConsulta").hide();
	$(".findOneUtente").hide();
}