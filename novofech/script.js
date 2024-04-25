fetch ("https://66299f7c67df268010a128c0.mockapi.io/products/Produto")
.then(Response=>Response.json())
.then(data => {
let corpo = document.querySelector("#corpo")
for (let index =0; index < data.length; index++){
    let linha = document.createElement("tr")
    linha.innerHTML = `
    <th scope="row"> ${data[index].id}
    <td> ${data[index].Name}</td>
    <td>${data[index].Price}</td>
    <td>${data[index].description}</td>
    <td>${data[index].material}</td>
    <td>${data[index].departament}</td>
    <td>${data[index].id}</td>
    </th>
    `
    corpo.appendChild(linha)
}
}
)
.catch(error => console.log(error))