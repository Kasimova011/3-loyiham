


//   document.addEventListener("DOMContentLoaded", (e) => {
//     let urlString = window.location.search
//     let urlParams = new URLSearchParams(urlString)
//     let id = urlParams.get("id")
//     let product = product.find(t => t.id == id)

//     product.rasmi.forEach(rasmcha => {
//         let swiperDiv = document.createElement("div")
//         swiperDiv.classList.add("swiper-slide")
//         swiperDiv.innerHTML = `
//         <img src="${rasmcha}" />
//     `
//         console.log(swiperDiv);
//         document.querySelector(".swiper-wrapper").append(swiperDiv)
//     })
// })

document.addEventListener("DOMContentLoaded", function (e) {
    let BigProducts = localStorage.getItem("products")
    BigProducts = JSON.parse(BigProducts)
    console.log(BigProducts);
    document.querySelector("#addPr").addEventListener("click", (e) => {
        e.preventDefault()
        let title = document.querySelector("#title").value.trim()
        let image = document.querySelector("#image").value.trim()

        BigProducts.push({
            id: BigProducts.length + 1,
            title: title,
            image: image
        })
        console.log(BigProducts);
        localStorage.setItem("products", JSON.stringify(BigProducts))

    })
})

function see(){
    window.open("asosiy.html", );

}

