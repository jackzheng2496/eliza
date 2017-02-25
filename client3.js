function sendreq() {
	console.log('am i here');
	var d = $("#human").val();
	console.log('HELLLO');
	console.log(d);
	$.ajax({
		url: '/eliza/DOCTOR',
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({human: d}),
		dataType: 'json',
		error: function() {
			console.log('some error');
		},
		success: function(data) {
			console.log(data);
			console.log(data.eliza);
			var res = '<p><font color="green">You: '+data.human + '</p><p><font color="blue">Eliza: '+data.eliza+'</p>';
			$(res).appendTo('#stuff');
			$("#form")[0].reset();
		}
	});
}

function sayhi() {
	console.log('hi');
}

function sayhello() {
	console.log('hello');
}

 
