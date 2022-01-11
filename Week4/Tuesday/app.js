/*1. Maasi 5000'in üzerinde olan aileler bulunur, babalarin isimleri ve soy isimleri alfabetik siraya göre listelenmeli.
2. cinsiyeti erkek olan cocuklar bulunur ve sayisi toplanir. Cocuklarin listesi olusturulur ve alfabetik siraya göre siralanmali.
3. 2. cinsiyeti kiz olan cocuklar bulunur ve sayisi toplanir. Cocuklarin listesi olusturulur ve alfabetik siraya göre siralanmali.
4. Yasi 8'den kücük olan cocuklar bulunur  Cocuklarin listesi olusturulur ve yaslarina göre büyükten kücüge göre siralanmali.
5. Yasi 8'den büyük cocuklar bulunur annelerinin isimlerinin isim sirasina göre listelenmeli.*/
const families = [{
        firstname: "Ahmet",
        lastname: "Kurnaz",
        partner: "Sevil",
        childrens: [{
                name: "Efe",
                age: 8,
                gender: "boy",
            },
            {
                name: "Ece",
                age: 6,
                gender: "girl",
            },
        ],
        salary: 4000,
    },
    {
        firstname: "Kemal",
        lastname: "Can",
        partner: "Elif",
        childrens: [{
                name: "Naz",
                age: 11,
                gender: "girl",
            },
            {
                name: "Kadir",
                age: 6,
                gender: "boy",
            },
        ],
        salary: 6000,
    },
    {
        firstname: "Zakir",
        lastname: "Cemal",
        partner: "Nida",
        childrens: [{
                name: "Hasan",
                age: 2,
                gender: "boy",
            },
            {
                name: "Hüseyin",
                age: 6,
                gender: "boy",
            },
        ],
        salary: 5500,
    },
    {
        firstname: "Murat",
        lastname: "Demirtas",
        partner: "Simay",
        childrens: [{
                name: "Oktay",
                age: 15,
                gender: "boy",
            },
            {
                name: "Gülsüm",
                age: 13,
                gender: "girl",
            },
        ],
        salary: 5300,
    },
    {
        firstname: "Umut",
        lastname: "Ilicak",
        partner: "Ayse",
        childrens: [{
            name: "Bilal",
            age: 8,
            gender: "boy",
        }, ],
        salary: 3000,
    },
    {
        firstname: "Durmus",
        lastname: "Demir",
        partner: "Nur",
        childrens: [{
            name: "Meral",
            age: 4,
            gender: "girl",
        }, ],
        salary: 7000,
    },
];
/*1. Maasi 5000 'in üzerinde olan ailelerin listesi. 
Listede aile babasinin isimleri ve soy isimleri isim sirasina göre listelenmeli.*/
let over5000salaryList = findOverSalaryList(families, 5000);
let over5000salaryList2 = over5000salaryList.map(salary => (`FirstName: ${salary.firstname} Lastname: ${salary.lastname}`));
let alphabeticOver5000salarylist2 = sortAlphabeticalList(over5000salaryList2)
console.log(alphabeticOver5000salarylist2);
//2. cinsiyeti erkek olan cocuklar bulunur ve sayisi toplanir.Cocuklarin listesi olusturulur ve alfabetik siraya göre siralanmali.
