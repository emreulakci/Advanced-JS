/* Ilk once tum elemanlarin butun harfleri buyuge cevrilecek,
sonra iclerindeki numaralar replace metoduyla cikarilacak,
daha sonra her kelimenin harf dizilimi tersine cevrilecek,
sonra herbir parcanin onune "KEREMAG_" eklenecek,
son olarak da parcalarin sisteme girildigi tarih ve saat (23 Ocak 2021 saat 22.25 ) parca isminin sonuna eklenecek.
Her bir adim sonucu yeni bir dizi olusturulcak ve sonraki islem bu dizi uzerinde yapilacak.
Parca isimlerinin e son hali consola yazilacak */

//parca listesi, firma ismi ve belirlenen eklenme tarihi tanimlanir.
const partList1 = ["pis7ton", "Filter 99", "4 Fan", "Coup2ling", "Steel4", "Brake"]
const firmName = "KEREMAG_";
const d = new Date("December 23, 2021 22:25");
//harfler büyük harfe cevrilir.
let PartList2 = partList1.map(capitalize);

function capitalize(pPart) {
    return pPart.toUpperCase();
};
//Rakamlar cikarilir
let PartList3 = PartList2.map(noNumber);

function noNumber(pPart) {
    return pPart.replace(/0|1|2|3|4|5|6|7|8|9/g, "")
};
//parca isimleri tersine cevrilir.
let PartList4 = PartList3.map(rev);

function rev(pPart) {
    return pPart.split(``).reverse().join(``);
};
//Herbir parcaya firma ismi eklenir
let PartList5 = PartList4.map(addition);

function addition(pPart) {
    return firmName.concat(pPart);
};
//Herbir parcanin isminin sonuna eklendikleri tarih eklenir
let PartList6 = PartList5.map(dateTime);

function dateTime(pPart) {
    return pPart.concat(" ",
        d);
};
//En son hali consola yazdirilir.
console.log(PartList6);
