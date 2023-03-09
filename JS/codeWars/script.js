function duplicateEncode(word){
return word.toLowerCase().split('').map(y => word.toLowerCase().split('').filter(x => x == y).length > 1 ? ')' : '(').join().replaceAll(',','')
}

let items=[
    {weight:2,price:6},
    {weight:2,price:3},
    {weight:6,price:5},
    {weight:5,price:4},
    {weight:4,price:6}
    ]

let weightArr = items.map((x=>{x.weight}));
