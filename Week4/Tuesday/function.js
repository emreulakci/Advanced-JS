// Maasi belirli bir degerin üzerinde olanlari bulmak icin fonksiyon
function findOverSalaryList(pFamilyList, pSalary) {
    let overOverSalaryList = pFamilyList.filter((salaries) => salaries.salary > pSalary);
    return overOverSalaryList;
};
// Alfabetik siralama
function sortAlphabeticalList(pFirstList) {
    let alphabeticalList = pFirstList.sort();
    return alphabeticalList;
};
