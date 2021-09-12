const user = {
    id: 17
    name: "Nushrat"
    dept: "CSE"
}
//convert inti JSON
const userJSON = JSON.stringify(user)

//back to object form
const userFromJson = JSON.parse(userJSON)

console.log(user)
console.log(userJSON)
console.log(userFromJson)

/*      function displayData(posts){
        console.log(posts)
        const userName = posts.map (post2 => post2.body)
        console.log(description)
        const ul = document.getElementById('user-list')

        for(let i=0; i<description.length; i++){
            const post2 = description[i]
            const li = document.createElement('li')
            li.innerText = post2
            ul.appendChild(li)
}*/