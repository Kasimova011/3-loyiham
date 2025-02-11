document.addEventListener("DOMContentLoaded", (e) => {
  product.forEach(p => {
    let col3 = document.createElement("div");
    col3.classList.add("col-lg-6", "mt-2"); // Kattaroq ekranda 6 ustun egallaydi
    col3.innerHTML = `
      <div class="d-flex align-items-center rounded  bg-white">
        <img class="flex-shrink-0 img-fluid rounded" src="${p.image}" alt="" style="width: 80px; height: 80px; object-fit: cover;">
        <div class="w-100 d-flex flex-column text-start ps-3">
          <h5 class="d-flex justify-content-between border-bottom pb-2">
            <span>${p.title}</span>
            <span class="text-primary fw-bold">$${"90"}</span>
          </h5>
        </div>
      </div>
    `;
    document.querySelector(".tab-content").append(col3);
  });
});
