//Stok miktari 500 kg uzerinde olan baliklari bulur
function findOverStockVolumeFishList(pFarmList, pFishQuantity) {
    let overStockVolumeFish = pFarmList.filter((fish) => fish.stockVolumeInKg > pFishQuantity);
    return overStockVolumeFish;
}
// 9-12 fiyat araligindaki baliklari bulur
function findSpecialPriceRangeFish(pFarmList, pLowPrice, pHighPrice) {
    let specialPriceRangeFish = pFarmList.filter(
        (fish) => fish.price >= pLowPrice && fish.price <= pHighPrice
    );
    return specialPriceRangeFish;
}
//Bern Kantonunda kisin satilan baliklari yazdirir
function viewFishType(pFarmList) {
    console.log(`3) BERN DE KIS SEZONUNDA SATILAN BALIKLAR`)
    pFarmList.map(fish => console.log(`${ fish.fishType }`))
}
//Son kullanma tarihleriyle birlikte balik listesi olusturur
function findExpiryDate(pFarmList) {
    let withExpiryDateList = [];
    pFarmList.map((fish) => {
        fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
        withExpiryDateList.push({
            date: fish.entryDate,
            name: fish.fishType
        });
    });
    return withExpiryDateList;
}
//Son kullanma tarihine göre siralanmis liste olusturur
function sortExpiryDate(pFishDateList) {
    let withExpiryDateListToSort = pFishDateList.sort(function(firstFish, secondFish) {
        return firstFish.date.getTime() - secondFish.date.getTime();

    });
    return withExpiryDateListToSort
}
//EU baliklarini bulur
function findEuFish(pFarmList, pCountryList, pPrice) {
    let euFish = [];
    pFarmList.filter(fish => {
        for (let index = 0; index < pCountryList.length; index++) {
            const country = pCountryList[index].toLowerCase();
            if (fish.originCountry.toLowerCase() === country && fish.price < pPrice) {
                euFish.push(fish.fishType)
            }
        }
    })
    return euFish;
}

//EU baliklarinin alfabetik siralamasini yapar

function sortAlphabeticalList(pFishList) {
    let alphabeticalList = pFishList.sort();
    return alphabeticalList;
}
//Toplam stogu bulur
function findTotalFishStock(pFarmList) {
    let totalStockVolumeKg = null;
    pFarmList.map(fish => totalStockVolumeKg += fish.stockVolumeInKg)
    return totalStockVolumeKg
}
//En pahali baligi bulur
function findMostExpensiveFish(pFarmList) {
    let mostExpensiveFish = [];
    let priceList = pFarmList.map((fish) => fish.price);
    let highestPrice = Math.max(...priceList);
    pFarmList.find((fish) => {
        if (fish.price === highestPrice) {
            mostExpensiveFish = fish.fishType + "-" + fish.price;
        }
    });
    return mostExpensiveFish;
}
//En uzun süre dayanan balik(lar)in ülkesini/ülkelerini bulur

function findMaxDurationFishCountry(pFarmList) {
    let maxDurationFishCountry = [];
    let maxDurationInDay = Math.max(...pFarmList.map((fish) => fish.durationInDays))
    pFarmList.filter((fish) => {
        if (maxDurationInDay === fish.durationInDays) {
            maxDurationFishCountry.push({
                COUNTRY: fish.originCountry,
                DURATION: fish.durationInDays,
                FISH: fish.fishType,
            })
        }
    })
    return maxDurationFishCountry
}
//Swiss Romande bölgesinde satilan baliklari bulur 
function findFishInRomandeRegion(pRegionList, pFarmList) {
    let fishInRomandeRegionList = [];
    for (let index = 0; index < pRegionList.length; index++) {
        const region = pRegionList[index];
        fishInRomandeRegionList = pFarmList.filter(fish => fish.saleLocations.includes(region))
    }
    return fishInRomandeRegionList
}
//Swiss Romande bölgesinde sonbahar ve kis aylarinda satilan baliklari bulur
function findWithSeasonFishList(pFishList) {
    let listInSeason = pFishList.filter((fish) => (fish.season === ("Autumn") || fish.season === ("Winter")))
    return listInSeason
}
//Swiss Romande bölgesinde sonbahar ve kis aylarinda satilan baliklarin ortalama fiyatini bulur 
function findAveragePrice(pFishList) {
    let totalPrice = null;
    pFishList.map(fish => totalPrice += fish.price)
    let averagePrice = totalPrice / pFishList.length
    return averagePrice
}
//Ticino Kantonundaki balik stogunu bulur
function findLocationFishStock(pFarmList, pLocation) {
    let locationFishStock = 0
    pFarmList.filter(fish => fish.saleLocations.includes(pLocation))
        .map(fish => locationFishStock += fish.stockVolumeInKg)
    return locationFishStock
}
//Bir mevsimde belirli bir bölgede satilacak baliklari bulur
function findInSeasonInLocationFish(pFarmList, pSeason, pLocation) {
    let listInSeasonInLocation = pFarmList.filter((fish) => fish.season === pSeason && fish.saleLocations.includes(pLocation))
    return listInSeasonInLocation
}
//Bir mevsimde belirli bir bölgede satilacak baliklarin ortalama agirligini (gr) bulur.
function findAverageFishGram(pFishList) {
    let totalGram = pFishList.reduce((firstFish, secondFish) => firstFish.itemWeightInGrams + secondFish.itemWeightInGrams);
    let averageFishGram = totalGram / pFishList.length;
    return averageFishGram
}
//Avrupa disindan gelen ve yaz mevsiminde Zurihte satilacak baliklari bulur
function findNoEu(pFarmList) {
    let noEuSummerZh = pFarmList.filter(fish =>
        (fish.season == "Summer") &
        fish.saleLocations.includes("ZH") &
        (fish.originCountry == "Norway" ||
            fish.originCountry == "Japan" ||
            fish.originCountry == "United Kingdom" ||
            fish.originCountry == "Egypt" ||
            fish.originCountry == "Vietnam")
    );
    return noEuSummerZh;
}
