let basicSalary = prompt('Input your basic monthly salary');
//variable for deducations and exemptions
const paye1 = (basicSalary * 0.90);
const paye2 = (basicSalary * 0.84);
const paye3 = (basicSalary * 0.75);
const paye4 = (basicSalary * 0.65);
const personalRelief = 2400;
const insuranceRelief = 5000;
const pensionFund = 20000;
const housingRelief = 9000;
const relief = personalRelief + insuranceRelief + housingRelief;
//net salary function
function netsal(basicSalary) {
    let salary;
    if (basicSalary < 6000) {
        salary = basicSalary - 150;

    } else if (basicSalary > 6000 && basicSalary < 8000) {
        salary = basicSalary - 300;
    } else if (basicSalary > 8000 && basicSalary < 11999) {
        salary = basicSalary - 400;
    } else if (basicSalary > 12000 && basicSalary < 14999) {
        salary = basicSalary - 500;
    } else if (basicSalary > 15000 && basicSalary < 19999) {
        salary = basicSalary - 600;
    } else if (basicSalary > 20000 && basicSalary < 29999) {
        salary = basicSalary - 850;
    } else if (basicSalary > 30000 && basicSalary < 69999) {
        salary = (paye1 + relief) - 1100;
    } else if (basicSalary > 70000 && basicSalary < 129999) {
        salary = (paye2 + relief) - 1700;
    } else if (basicSalary > 130000 && basicSalary < 199999) {
        salary = (paye3 + relief) - 2000;
    } else {
        salary = (paye4 + relief) - (pensionFund + 2300)
    }
    return salary
}

let netsalary = netsal;
netsal(basicSalary)