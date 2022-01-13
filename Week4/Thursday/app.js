const fishFarm = [{
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1), // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12), // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
];
//Avrupa Birligi (EU) ulkeleri
const euCountries = [
    "Austria",
    "Italy",
    "Belgium",
    "Latvia",
    "Bulgaria",
    "Lithuania",
    "Croatia",
    "Luxembourg",
    "Cyprus",
    "Malta",
    "Czechia",
    "Netherlands",
    "Denmark",
    "Poland",
    "Estonia",
    "Portugal",
    "Finland",
    "Romania",
    "France",
    "Slovakia",
    "Germany",
    "Slovenia",
    "Greece",
    "Spain",
    "Hungary",
    "Sweden",
    "Ireland",

];
const swissRomandeRegion = ["FR", "GE", "JU", "NE", "VL", "VD"];

/* 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir? */
const over500kgFishList = findOverStockVolumeFishList(fishFarm, 500)
console.log("1) STOK MIKTARI 500 KG UZERINDEKI BALIKLAR")
over500kgFishList.map(fish => console.log(`${fish.fishType}`))

/* 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir? */
const specialPriceRangeFish = findSpecialPriceRangeFish(fishFarm, 9, 12)
console.log("2)9-12 FYAT ARALIGINDAKI BALIKLAR")
specialPriceRangeFish.map(fish => console.log(`${ fish.fishType }`))

/* 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir? */
const fishInBernInWinter = findInSeasonInLocationFish(fishFarm, "Winter", "BE");
const viewFishInBernInWinter = viewFishType(fishInBernInWinter);

/* 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)*/
const expiryDate = findExpiryDate(fishFarm)
const sortedExpiryDate = sortExpiryDate(expiryDate)
console.log("4) SON KULLANMA TARIHINE GORE BALIKLAR")
sortedExpiryDate.map(fish => console.log(` ${fish.name}`))


/* 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.*/

const euFish = findEuFish(fishFarm, euCountries, 10)
const sortedAlphabeticalList = sortAlphabeticalList(euFish)
console.log(`5) AB DEN GELEN VE FIYATI 10 CHF DAN DUSUK OLAN BALIKLARIN ALFABETIK SIRALAMASI 
${sortedAlphabeticalList}`)
    /* 6) Toplam balik stogu ne kadardir ? */
const totalFishStock = findTotalFishStock(fishFarm)
console.log(`6) TOPLAM BALIK STOGU: 
        ${ totalFishStock } Kg `)

/*7) En pahali olan balik hangisidir?*/
const mostExpensiveFish = findMostExpensiveFish(fishFarm)
console.log(`7) EN PAHALI BALIK: 
${ mostExpensiveFish } CHF `)

/*8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?*/

const maxDurationFishCountry = findMaxDurationFishCountry(fishFarm);
const viewMaxDurationFishCountry = [maxDurationFishCountry]
console.log("8) EN UZUN SÜRE DAYANABILEN BALIKLARIN GELDIGI ULKE(LER) ", viewMaxDurationFishCountry)

/*9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?*/
// Romande Regionda satilan tüm baliklar
const fishInRomandeRegion = findFishInRomandeRegion(swissRomandeRegion, fishFarm);
// Romande Regionda sadece sonbahar ve kis aylarinda satilan baliklar
const withSeasonFishList = findWithSeasonFishList(fishInRomandeRegion);
// Romande Regionda sonbahar ve kis aylarinda satilan baliklarin ortalama fiyati
const averageFishPrice = findAveragePrice(withSeasonFishList)
console.log(`9) ROMANDE REGIONUNDA KIS VE SONBAHAR SEZONUNDA SATILAN BALIKLARIN ORTALAMA FIYATI
        ${ averageFishPrice } CHF `)

/*10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?*/
const ticinoFishStock = findLocationFishStock(fishFarm, "TI")
console.log(`10) TICINO KANTONU TOPLAM BALIK STOGU
 ${ ticinoFishStock } kg `)

/*11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?*/
//ZHde Yazlik sezonda satilan tüm baliklar
const fishInSummerInZurih = findInSeasonInLocationFish(fishFarm, "Summer", "ZH");
//Zurih Kantonunda Yaz mevsiminde satilan baliklarin gramajlarinin ortalamasi
const avarageFishInSummerInZurih = findAverageFishGram(fishInSummerInZurih)
console.log(`11) ZH KANTONUNA AVRUPA DISINDAN GELEN VE YAZIN SATILAN BALIKLARIN AGIRLIK ORTALAMASI : ${avarageFishInSummerInZurih} gr.`);
