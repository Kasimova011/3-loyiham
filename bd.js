let Pr = localStorage.getItem("products");
Pr = Pr ? JSON.parse(Pr) : [];

console.log(Pr);
let product = [];
if (Pr.length > 2) {
    product = Pr;
} else {
    console.log("Mahsulotlar ro'yxati kam. Yaratilmoqda...");

    product = [
        {
            id: 1,
            title: "pizza",
            price: 100,
            image: "https://avatars.mds.yandex.net/i?id=d03440d91b91ac52f156917e5bd7ebb28b7cc514-5105957-images-thumbs&n=13",
        },
        {
            id: 2,
            title: "burger",
            price: 90,
            image: "https://avatars.mds.yandex.net/i?id=122faff69a6f38bf9e2595727581585edbba3e52-12400592-images-thumbs&n=13",
        },
    ];

    localStorage.setItem("products", JSON.stringify(product));
}

console.log(product);


