let basicSalary = prompt('Input your basic salary');
const paye1 = (basicSalary * 0.10);
const paye2 = (basicSalary * 0.24);
const paye3 = (basicSalary * 0.30);
const personalRelief = 2400;
const personalReliefYear = personalRelief * 12;
const insuranceRelief = 5000;
const insuranceReliefYear = insuranceRelief * 12;
const pensionFund = 20000;
const pensionFundYear = pensionFund * 12;
const housingRelief = 9000;
const housingReliefYear = housingRelief * 12;
const ownerOccupierInterest = 25000;
const ownerOccupierInterestYear = ownerOccupierInterest * 12;
const disabilityExemption = 150000;
const disabilityExemptionYear = disabilityExemption * 12;

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
    }
    return salary
}

let netsalary = netsal;
netsal(basicSalary)