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
const relief = personalRelief + insuranceRelief + housingRelief + pensionFund;
//net salary function
function netsal(basicSalary) {
    let salary;
    let nhif;
    let tax;
    let nssf;
    if (basicSalary < 6000) {
        nssf = 200;
        nhif = 200;
        salary = (basicSalary + relief) - (nssf + nhif);

    } else if (basicSalary > 6000 && basicSalary < 8000) {
        nssf = 200;
        nhif = 300;
        salary = (basicSalary + relief) - (nssf + nhif);
    } else if (basicSalary > 8000 && basicSalary < 11999) {
        nssf = 300;
        nhif = 400;
        salary = (basicSalary + relief) - (nssf + nhif);
    } else if (basicSalary > 12000 && basicSalary < 14999) {
        nssf = 400;
        nhif = 500;
        salary = (basicSalary + relief) - (nssf + nhif);
    } else if (basicSalary > 15000 && basicSalary < 19999) {
        nssf = 400;
        nhif = 600;
        salary = basicSalary - (nssf + nhif);
    } else if (basicSalary > 20000 && basicSalary < 29999) {
        nssf = 1000;
        nhif = 900;
        salary = (basicSalary + relief) - (nssf + nhif);
    } else if (basicSalary > 30000 && basicSalary < 69999) {
        nhif = 1100;
        nssf = basicSalary * 0.04;
        tax = basicSalary - paye1;
        salary = (paye1 + relief) - (nhif + nssf);
    } else if (basicSalary > 70000 && basicSalary < 129999) {
        nhif = 1100;
        nssf = basicSalary * 0.04;
        tax = basicSalary - paye1;
        salary = (paye1 + relief) - (nhif + nssf);
    } else if (basicSalary > 130000 && basicSalary < 199999) {
        nhif = basicSalary * 0.06;
        nssf = basicSalary * 0.04;
        tax = basicSalary - paye1;
        salary = (paye1 + relief) - (nhif + nssf);
    } else {
        nhif = basicSalary * 0.08;
        nssf = basicSalary * 0.04;
        tax = basicSalary - paye1;
        salary = (paye1 + relief) - (nhif + nssf);
    }
    return [`net salary = ${salary},  gross salary = ${basicSalary}, NHIF deductions = ${nhif}, PAYE = ${tax}, NSSF deductions = ${nssf}`]
}

let netsalary = netsal;
netsal(basicSalary)