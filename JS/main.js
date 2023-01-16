let search=document.getElementById("data")
let btn= document.getElementById("btn")
let box= document.querySelector(".box")

// fetch("http://jsonplaceholder.typicode.com/users").then(reponse=>{if(reponse.ok)
// return reponse.json()}).then(data=>{
//     tab=data
// })
let tab=[]
async function getAPIData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
        
    } catch(error) {
        return error;
    }
}
tab=getAPIData("http://jsonplaceholder.typicode.com/users")
console.log(tab)

btn.addEventListener("click",function(){
    box.innerHTML=""
    let tab1 = tab
    .then(value=>{ return value
    .filter(e=>e.name==search.value)})
    console.log(tab1);
    // console.log(tab1.then(value=>{return value.length}));
    tab1.then(value=>{
        if(value.length == 0){
            box.innerHTML="This person doesn't exist"
        }
        else{
            for( let i=0 ; i<value.length ; i++){
                let person = document.createElement("div")
                let name = document.createElement("h3")
                let companyName = document.createElement("h3")
                let city = document.createElement("h3")
                let email= document.createElement("h3")
                name.innerHTML ="<span>Name : </span>"+value[i].name
                companyName.innerHTML = "<span>Company : </span>"+ value[i].company.name
                city.innerHTML ="<span>Address : </span>"+value[i].address.street+", "+value[i].address.suite+", "+value[i].address.city
                email.innerHTML="<span>email : </span>"+value[i].email
                person.append(name)
                person.append(city)
                person.append(companyName)
                person.append(email)
                box.append(person)
            }
        }
    })

})