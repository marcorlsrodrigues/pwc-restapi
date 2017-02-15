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
	$('#todos-utentes').on('click', function(e){
		e.preventDefault();
		$('#todos-utentes').addClass('disabled');
		$('#table-todos-utentes > tbody').empty();
		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/todosutentes', {
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

		var request = new Request('https://trabalho-pwc-marcorodrigues.c9users.io/medicos', {
			method: 'POST', 
			body: JSON.stringify({nome: nomeMedico, apelido: apelidoMedico,email: emailMedico}),
			mode: 'cors', 
			redirect: 'follow',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});

		fetch(request).then(function(response) {
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

		fetch('https://trabalho-pwc-marcorodrigues.c9users.io/utentes', {
			headers: {
		   		'Accept': 'application/json',
		      	'Content-Type': 'application/json'
		    },
		    method: 'post',
		    mode: 'cors',
		    body: {	nome:"Utente",
									apelido:"Utente",
									email:"Utente"}
		}).then(function(response) {
			console.log('OK');
		}).catch(function(err) {
			console.log(err);
			$('#inserir-utente').removeClass('disabled');
		});
	});
});

$(function(){
	$('#navbar-home').on('click', function(e){
		console.log('Teste');
		$("#container-home").show();
		$("#container-insert").hide();
	});
});

$(function(){
	$('#navbar-insert').on('click', function(e){
		$("#container-home").hide();
		$("#container-insert").show();
	});
});