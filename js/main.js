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