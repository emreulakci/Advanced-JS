/* First of all, strings are extracted from array.
Then the first element, the income, is separated from the array.
The sum of expenses is calculated.
20% of the total expenses are calculated as support.
Income minus expenses is calculated as the remaining money.
In the end, the sum of the money remaining with the support is calculated as the money remaining after the support.*/
let incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];
//Strings are extracted from array.
let noStringsList = incomeStatement.map(string);

function string(pString) {
    return pString.toString();
};
let noStringslist = noStringsList.filter(function(nmbr) {
    return nmbr.trim() && !isNaN(nmbr);
});
//Income seperated from the array.
let income = noStringslist.splice(0, 1);
let noIncomeList = noStringslist.map(i => Number(i));
//the sum of the array, which includes expenses, is calculated
let sum = noIncomeList.reduce(function(a, b) {
    return a + b;
}, 0);
console.log("Income = " + income)
console.log("Total Expenses = " +
    sum);
//support is calculated.
function percentage(a) {
    return (a / 100) * 20;
};
let support = percentage(sum)
console.log("Support = " + support);
//Remaining money is calculated.
function remaining(a, b) {
    return (a - b)
};
let remainingMoney = remaining(income, sum);
console.log("The remaining money before supporting = " +
    remainingMoney);
// After the support, the total remaining money is calculated.
function afterSupport(a, b) {
    return (a + b)
};
let remainingMoneyAfterSupport = afterSupport(remainingMoney, support);
console.log("The remaining money after supporting = " + remainingMoneyAfterSupport);
