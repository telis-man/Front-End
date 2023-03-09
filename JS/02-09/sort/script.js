const planets = [
    { 
      name: "Jupiter", 
      size: 69911,
    },
    {
      name: "Venus",
      size: 6051.8,
    },
    {
      name: "Mars",
      size: 3389.5,
    },
    {
      name: "Uranus",
      size: 25362,
    },
    {
      name: "Earth",
      size: 6371,
    },
    {
      name: "Saturn",
      size: 58232,
    },
    {
      name: "Pluto",
      size: 1188.3,
    },
  ];
  
  
  
  // 1. Naudodami array metoda, atraskite ar visu
  // (t.y. KIEKVIENOS) planetos dydis yra didesnis nei 7000?
  // every

 sizeArr = planets.map(a => a.size);
 console.log(sizeArr.every(a => a>7000) ? true : false);

  
  // 2. Naudodami array metoda, atraskite ar BENT VIENOS
  // planetos dydis yra mazesnis nei 7000?
  // some

  console.log(sizeArr.some(a => a<7000) ? true : false)
  
  // 3. Jei bent viena buvo mazesne nei 7000, atfiltruoti,
  // ir sukurti masyva planetu, kurios mazesnes nei 7000

  if(sizeArr.some(a => a<7000) ? true : false){
    let sizeFiltered = sizeArr.filter(a => a,7000);
    console.log(sizeFiltered);
  }
  
  // 4. Naudojant array metoda, sukurti nauja masyva, kuriame yra tik 
  // planetu pavadinimai.

 console.log(namesArr = planets.map(a => a.name));
  
  // 5. Naudojant array sort metoda, isrikiuokite planetu pavadinimu masyva,
  // pagal planetos pavadinimo ilgius, nuo trumpiausio iki ilgiausio

  console.log(namesArr.sort((a,b) =>{
    return a.length-b.length;
  }))
  
  // 6. Naudojant array sort metoda, padarykite ta pati, ka 5 uzduoty, 
  // tik planets masyvui

  console.log(planets.sort((a,b) =>{
    return a.name.length-b.name.length;
  }))
  
  // 7. Naudojant array sort metoda, isrikiuokite nuo didziausios 
  // planetos iki maziausios
  console.log('task7')
  console.log(planets.sort((a,b) =>{
    return b.size-a.size;
  }))