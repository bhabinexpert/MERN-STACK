const places = [
  {
    name: "Mount Everest",
    desc: "Highest mountain in the world.",
    img:"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Fewa Lake",
    desc: "Beautiful lake in Pokhara.",
    img: "https://plus.unsplash.com/premium_photo-1750042553700-cb70111756f3?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Patan Durbar Square",
    desc: "Historic royal palace complex.",
    img: "https://images.unsplash.com/photo-1550642249-6e5605421172?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const container = document.getElementById("cardContainer")



places.forEach(({name, desc, img})=>{
    let sectionOne = document.createElement("div")
    sectionOne.classList.add("card")
    console.log(name)
    sectionOne.innerHTML=`
    <img src=${img}></img>
    
    <h1>${name}</h1>
    <p>${desc}</p>
    `
    container.appendChild(sectionOne)
})