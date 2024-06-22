
function fetchapi(){
let cityname=document.querySelector("#inp").value
let KEY="02814ec279b44705881131328242802"
let di=document.querySelector(".city")
let win=document.querySelector(".windspeed")
let tem=document.querySelector(".temp")
let hum=document.querySelector(".humidity")
let url="http://api.weatherapi.com/v1/current.json?"
let loctime=document.querySelector(".locatime")
let URL=`${url}key=${KEY}&q=${cityname}`

fetch(URL).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
di.innerHTML=`<i class="fa-solid fa-city"></i>${cityname}`
tem.innerHTML=`<i class="fa-solid fa-temperature-low"></i>tempreture ${data.current.temp_c}`
hum.innerHTML=`<i class="fa-solid fa-droplet"></i>Humidity ${data.current.humidity}`
win.innerHTML=`<i class="fa-solid fa-wind"></i>wind ${data.current.wind_kph}`
loctime.innerHTML=`localTime  ${data.location.localtime}`
let rebtn=document.createElement("button")
rebtn.setAttribute("class","button")
loctime.append(rebtn)
rebtn.innerHTML="Refresh"
rebtn.addEventListener("click",()=>{
    tem.innerHTML=''
    di.innerHTML=' '
    hum.innerHTML=' '
    win.innerHTML=' '
    loctime.innerHTML=' '
    cityname.innerHTML=' '
})

})
}







// let obj={
//     name:"pooja kumari",
//     age:22,
//     location:"gurgoan",
//     fullname:function(){
//         console.log(this.name+" "+age)
//     }
// }
// console.log(obj.age)

// let ob={
//     "education":"computer science",
//     "result":"pass"
// }
// ob.__proto__=obj
// console.log(ob)
// let body=document.querySelector("body")

// let btn=document.createElement("button")
// btn.innerHTML="click me!"
// body.prepend(btn)
// btn.setAttribute("class","cliclk")

// let div=document.querySelector(".container")
// div.setAttribute("id","con")

// console.log(div)

// let arr=["apple","mango","litchi","grapes"]
// let marks=[45,988998,382,90]
//     let b=arr.sort()
//     console.log(b.length -1)
//     console.log(marks.length-1)

// function getdata(getid){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data"+getid)
//             resolve("success")
//             reject("your promise reject")
//         },2000)
//     })
   
// }

// getdata(20).then((resolve)=>{
//     console.log(resolve)
//     getdata(30).then((resolve)=>{
//         console.log("getting data another  "+resolve)
//         getdata(40).then((resolve)=>{
//             console.log("getting data another  "+resolve)
//             getdata(60).catch((reject)=>{
//                 console.log(reject)
//             })
//         })
//     })
// })

// async function getalldata(){
//     p1=await getdata(2)
//     p2=await getdata(45)
//     p3=await getdata(56)

// }

// let title=document.querySelector(".title")
// let body=document.querySelector("body")
// let img=document.querySelector("img")

// body.style.backgroundColor="yellow"
// fetch('https://jsonplaceholder.typicode.com/photos')
//       .then((response)=>{
//         return response.json()
//       }).then((data)=>{
//         console.log(data)
//         title.innerHTML=data[0].title
//         img.innerHTML=data[0].url

        
//       })

// let obj={
//     name:"pooja",
//     id: 1001,
//     marks:70,
// }  
// fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
// .then(response=>response.json())
// .then(data=>console.log(data))






