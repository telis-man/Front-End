let obj =  {
    name: "Mantas",
    toys: ['toy1', 'toy2', 'toy3', 'toy4'],
    yearsOld: 16,
    bDay: false,
    totalToys: null,
    friends:[{
        name:'John',
        doing: 'sitting'
    },
    {
        name:'Jack',
        doing: 'jackin'
    },
    {
        name:'Cena',
        doing: 'running'
    }
]
}

obj.toys.shift();
obj.toys.push('toy69');
obj.yearsOld+=1;
obj.totalToys = obj.toys.length;

for(let a of obj.friends){
 console.log(a);
}
console.log(obj)