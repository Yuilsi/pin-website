
                const myForm = document.getElementById("formU");
                myForm.addEventListener( "submit", (e) => {
                  // console.log(myForm)
                  e.preventDefault();

                  let newProduct = {
                    name: myForm.pin_name.value,
                    description: myForm.pin_description.value,
                    image: myForm.pin_description.value,
                    
                  }
                  const baseDatos= [];
                baseDatos.push(newProduct);
                })
             
                console.log(newProduct);
                