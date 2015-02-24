$('#detailsPage').on('pageshow', function(event) {
	var sid = getUrlVars()["sid"];
	$.getJSON(serviceURL + 'getemployee.php?sid='+sid, displayEmployee);
});

function displayEmployee(data) {
	var employee = data.item;
	console.log(employee);
	$('#loader').remove();
	//$('#logo').attr('src', 'images/header.png');
	$('#title').text(employee.title );
	$('#body').html(employee.hometext + "<br>" + employee.bodytext);
	$('#time').text("تاریخ ارسال آگهی : "+ employee.time);
 	 
  
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
