let employees = [
    {id: 35601, firstName: 'Mark', lastName: 'Rufello',email:'john@example.com',gender:'Male',ip_address: '192.168.0.1'},
    {id: 35602, firstName: 'Scarlette', lastName: 'Johanson',email:'Scarlet@example.com',gender:'Female',ip_address: '192.168.0.2'},
    {id: 35603, firstName: 'Robert', lastName: 'Downy',gender:'Male',email:'robert@example.com',ip_address: '192.168.0.3'},
    {id: 35604, firstName: 'Chris', lastName: 'Pine',gender:'Male',email:'chris@example.com',ip_address: '192.168.0.4'},
    {id: 35605, firstName: 'Tom', lastName: 'Hanks',gender:'Male',email:'tom@example.com',ip_address: '192.168.0.5'},
    {id: 35606, firstName: 'Jeremy', lastName: 'Renner',gender:'Male',email:'jeremy@example.com',ip_address: '192.168.0.6'},
    {id: 35607, firstName: 'Christian', lastName: 'Messy',gender:'Male',email:'christian@example.com',ip_address: '192.168.0.7'},
    {id: 35608, firstName: 'Gal', lastName: 'Gadot',gender:'Female',email:'gal@example.com',ip_address: '192.168.0.8'},
    {id: 35609, firstName: 'Elizabeth', lastName: 'Oslen',gender:'Female',email:'ellie@example.com',ip_address: '192.168.0.9'},
    {id: 35610, firstName: 'Ben', lastName: 'Afflek',gender:'Male',email:'ben@example.com',ip_address: '192.168.1.0'},
];

let allEmployees = document.querySelector('#all-emp-btn');

allEmployees.addEventListener('click', () => {
        displayData(employees);
    });



let maleEmployees = document.querySelector('#male-emp-btn');
maleEmployees.addEventListener('click', () => {
    let maleEmployee = employees.filter(function (employee) {
            return employee.gender === 'Male';
        });
         displayData(maleEmployee);
    });

let femaleEmployees = document.querySelector('#female-emp-btn');
femaleEmployees.addEventListener('click', () => {
    let femaleEmployee = employees.filter(function (employee) {
            return employee.gender === 'Female';
        });
         displayData(femaleEmployee);
    });

let searchBox = document.getElementById('search-box');
searchBox.addEventListener('keyup', function () {
    let textEntered = searchBox.value;
        let ReqEmployee = employees.filter(function (employee) {
        return employee.firstName.toLowerCase().includes(textEntered.toLowerCase())
           ||  employee.lastName.toLowerCase().includes(textEntered.toLowerCase())
           ||  employee.email.toLowerCase().includes(textEntered.toLowerCase());
            });
            displayData(ReqEmployee);
        
        });
    






function displayData(employees) {
    let tableBody = document.querySelector('#table-body');
    let tableRow = "";
    for (let employee of employees) {
        tableRow += `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.gender}</td>
            <td>${employee.email}</td>
            <td>${employee.ip_address}</td>
            

        </tr>`;
        tableBody.innerHTML = tableRow;
    }
}