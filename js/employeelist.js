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
					'<h4 style="direction:rtl;text-align:center;font:14px tahoma;font-weight:700;">' + employee.title + ' </h4> <p> <img src="images/logo.png"/>  بازدید  ' + employee.counter + ' </p></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}