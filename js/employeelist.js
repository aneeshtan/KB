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
					'<img style="float:right;" src="images/logo.png"/>' +
					'<h4 style="direction:rtl;text-align:right;font:14px tahoma;font-weight:700;">' + employee.title + ' </h4>' +
					'<p style="direction:rtl;text-align:right;font:11px tahoma;f">' + employee.hometext + '</p>' +
					'<span class="ui-li-count"> بازدید  ' + employee.counter + ' </span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}