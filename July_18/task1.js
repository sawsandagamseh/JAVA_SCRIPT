async function fetchd() {
    try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data1 = await response.json();
    
    console.log(data1);
let t = document.getElementById('table')
t.style.border='solid black 1px'
    for(let i=0;i<data1.length; i++){
     let tr =document.createElement('tr')
     tr.style.border='solid black 1px'
   t.appendChild(tr)
   let td1= document.createElement('td')
   tr.appendChild(td1)
   
   let categor= document.createTextNode(data1[i].category)
   td1.appendChild(categor)

   let td2= document.createElement('td')
   tr.appendChild(td2)
   let descriptio = document.createTextNode(data1[i].description)
   td2.appendChild(descriptio)


   let td3= document.createElement('td')
   tr.appendChild(td3)
   let idd = document.createTextNode(data1[i].id)
   td3.appendChild(idd)

 


   let td4= document.createElement('td')
   tr.appendChild(td4)
   let pric = document.createTextNode(data1[i].price)
   td4.appendChild(pric)

   let td5= document.createElement('td')
   tr.appendChild(td5)
   //let imag = document.createTextNode(data1[i].image)
   let img = document.createElement('img')
   img.style.width='50px'
   
   img.src=data1[i].image;
   td5.appendChild(img);

//    let td_all_style=document.getElementsByTagName('td')
//    td_all_style.style.border='solid black 2px';
//    td_all_style.style.borderCollapse='collapse'

    }




    } catch (error) {
    console.error("Error fetching data:", error);
    }

    }
    fetchd();
    
   