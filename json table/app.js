
alert("My JSON Table")
const data = [
    {
        "name":"abhishek",
        "value":"good",
        "sensitive":"very much"
    },
    {
        "name":"abhishek",
        "value":"bad",
        "sensitive":"much"
    }
]
let table = document.querySelector('table')

let tr = document.createElement('tr')
let headings = ["name","value","sensitive"]
headings.forEach(name => {
    let th = document.createElement('th')
    let cellText = document.createTextNode(name)
    th.appendChild(cellText)
    tr.appendChild(th)
})
table.appendChild(tr)
data.forEach( element => {
    let tr = document.createElement('tr')
    Object.values(element).forEach((value)=>{
        let td = document.createElement('td');
        let cellText = document.createTextNode(value)
        td.appendChild(cellText);
        tr.appendChild(td)
    });
    table.appendChild(tr);
});
