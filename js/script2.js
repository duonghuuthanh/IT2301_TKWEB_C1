window.addEventListener('load', function() {
    let productsDiv = document.querySelector(".products");
    let closeButtons = document.getElementsByClassName("delete");
    for (let c of closeButtons)
        c.onclick = function() {
            if (confirm("Bạn chắc chắn xóa không?") === true) {
                productsDiv.removeChild(this.parentElement.parentElement);
            }
        }

    let add = document.getElementById("addProduct");
    let form = document.getElementById("addProductForm");
    add.onclick = function() {
        form.classList.toggle("form-display");
    }
    
    let process = document.getElementById("addProcess");
    process.onclick = function() {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let image = document.getElementById("image").value;

        let h = `
            <div class="product">
                <div>
                    <img src="${image}" alt="product" />
                    <h2>${name}</h2>
                    <div class="price">${price}<sup>đ</sup></div>
                    <a href="#" class="delete">&times;</a>
                </div>
            </div>
        `

        //productsDiv.innerHTML = h + productsDiv.innerHTML;
        let first = document.querySelector(".product:first-child");
        first.insertAdjacentHTML("beforebegin", h);
    }
});
