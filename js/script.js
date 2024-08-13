window.onload = function() {
    let main = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onclick = function() {
            main.src = this.src;
        }

    let buttons = document.querySelectorAll(".button > button");
    for (let b of buttons)
        b.onclick = function() {
            // Đổi hình điện thoại
            let label = this.getAttribute("rel");
            main.src = `images/galaxys8/${label}1.jpg`;

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${label}${i + 1}.jpg`;

            // Đổi màu nền các sản phẩm
            let products = document.querySelectorAll(".product > div");
            for (let p of products)
                p.style.background = `linear-gradient(lightblue, ${label.slice(0, -1)})`
        }

    let search = document.querySelector("input[type=search]");
    search.onchange = function() {
        // xóa border
        let tmps = document.querySelectorAll(".product > div");
        for (let t of tmps)
            t.style.border= "";

        // gắn border product tìm thấy
        let txt = this.value;

        let products = document.querySelectorAll(".product h2");
        for (let p of products)
            if (p.innerText.includes(txt) === true)
                p.parentElement.style.border = "2px solid red";
    }
    let nav = document.querySelector("ul.menu");
    window.onscroll = function() {
        if (this.scrollY >= 50) {
            nav.style.position = 'fixed';
            nav.style.top = 0;
            nav.style.left = 0;
            nav.style.right = 0;
            nav.style.zIndex = 999;
        } else {
            nav.style.position = 'initial';
        }
            
    }
}