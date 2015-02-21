var serviceURL = "http://www.karyab.net/mobileservices/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		$('#employeeList #loader').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="details.html?sid=' + employee.sid + '">' +
					'<img src="images/logo.png"/>' +
					'<h4>' + employee.title + ' </h4>' +
					'<p>' + employee.hometext + '</p>' +
					'<span class="ui-li-count">' + employee.counter + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}