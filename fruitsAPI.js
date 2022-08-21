const Fruitsurl = ('http://localhost:5000/products/fruits')

async function getTodos() {
    let response = await fetch(Fruitsurl);
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
    let container = document.querySelector("#fruList")
    container.innerHTML = html


}
getItems()