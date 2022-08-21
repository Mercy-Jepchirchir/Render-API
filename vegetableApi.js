const Vegurl = ('http://localhost:5000/products/vegetables')

async function getTodos() {
    let response = await fetch(Vegurl);
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
    let container = document.querySelector("#vegList")
    container.innerHTML = html


}
getItems()