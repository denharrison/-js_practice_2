const salaries = {
  Alice: 500,
  Bob: 700,
  Charlie: 300,
};
 
const getTotalSalary = (obj) => {

    let result = 0;

    for (const key in obj) {
        
       result += obj[key]
    }

alert(`Сумма всех зарплат составляет: ${result}$`)

}

getTotalSalary(salaries)