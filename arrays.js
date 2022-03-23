const object = [
    {
         name: "corgi",
         price:5500,
         kind:"gothic",
         description:"es un pin xxx",
         material: "metalico",
   },
    {
        name: "gato",
        price:5500,
        kind:"anime character",
        description:"es un pin xxx",
        material: "metalico",
    },
    {
        name: "conejo",
        price:7500,
        kind:"dog",
        description:"es un pin xxx",
        material: "metalico",
    },
    {
        name: "anime",
        price: 5500,
        kind:"cat",
        description:"es un pin xxx",
        material: "metalico",
    }, 
   ];

  const listPines = object.filter(function(expensivePin) { 
      if(expensivePin.price > 6000){
          return true
      }

  })

  console.log(listPines)
   
  function expensivePin() {
    console.log(listPines)
  }