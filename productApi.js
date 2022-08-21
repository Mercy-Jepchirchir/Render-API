const url = ('http://localhost:5000/products')

async function getTodos() {
    let response = await fetch(url);
    return response.json(); 
}
getTodos();

// rendering data from html
async function getItems() {
    let items = await getTodos();
    let html = "";
    items.forEach(item => {
        let body = `<li>${item.name}</li>`
        html += body;

    });
    let container = document.querySelector("#products")
    container.innerHTML = html


}
getItems()