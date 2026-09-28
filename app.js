(() => {
  const $ = (s) => document.querySelector(s);
  const rp = (n) => "Rp " + n.toLocaleString("id-ID");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const grid = $("#grid"), modal = $("#modal"), detail = $("#detail");
  let cat = "Semua";

  const cats = ["Semua", ...new Set(PRODUCTS.map((p) => p.category))];
  $("#cats").innerHTML = cats.map((c) => `<button data-c="${esc(c)}">${esc(c)}</button>`).join("");
  $("#cats").onclick = (e) => {
    if (!e.target.dataset.c) return;
    cat = e.target.dataset.c;
    render();
  };
  $("#q").oninput = render;

  function render() {
    const q = $("#q").value.trim().toLowerCase();
    document.querySelectorAll("#cats button").forEach((b) => b.classList.toggle("on", b.dataset.c === cat));
    const list = PRODUCTS.filter((p) =>
      (cat === "Semua" || p.category === cat) &&
      (p.name + " " + p.description).toLowerCase().includes(q));
    grid.innerHTML = list.map((p) => `
      <button class="card ${p.status === "terjual" ? "sold" : ""}" data-id="${esc(p.id)}">
        <img src="${esc(p.photos[0])}" alt="${esc(p.name)}" loading="lazy">
        <div class="b">
          <h3>${esc(p.name)}</h3>
          <div class="price">${rp(p.prices[0].value)}${p.prices.length > 1 ? ` <small class="mute">${esc(p.prices[0].label)} · +${p.prices.length - 1} opsi</small>` : ""}</div>
          <div class="mute"><span class="tag ${esc(p.status)}">${esc(p.status)}</span>${esc(p.location)}</div>
        </div>
      </button>`).join("");
    $("#empty").hidden = list.length > 0;
  }

  grid.onclick = (e) => {
    const card = e.target.closest(".card");
    if (card) open(card.dataset.id);
  };

  function open(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const msg = `Halo, saya tertarik dengan "${p.name}" di Pre-Loved. Apakah masih tersedia?`;
    detail.innerHTML = `
      <img class="main" src="${esc(p.photos[0])}" alt="${esc(p.name)}">
      ${p.photos.length > 1 ? `<div class="thumbs">${p.photos.map((u, i) =>
        `<img src="${esc(u)}" alt="" class="${i ? "" : "on"}">`).join("")}</div>` : ""}
      <div class="info">
        <span class="tag ${esc(p.status)}">${esc(p.status)}</span><span class="tag">${esc(p.category)}</span>
        <h2>${esc(p.name)}</h2>
        <div class="mute">📍 ${esc(p.location)} · Kondisi: ${esc(p.condition)}</div>
        <div class="prices">${p.prices.map((x) => `
          <div><span>${esc(x.label)}${x.note ? `<br><small class="mute">${esc(x.note)}</small>` : ""}</span>
          <b class="price">${rp(x.value)}</b></div>`).join("")}</div>
        <p>${esc(p.description)}</p>
        <table>${Object.entries(p.specs || {}).map(([k, v]) =>
          `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join("")}</table>
        ${p.status === "terjual" ? "" :
          `<a class="wa" target="_blank" rel="noopener" href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}">Tanya via WhatsApp</a>`}
      </div>`;
    const thumbs = detail.querySelector(".thumbs");
    if (thumbs) thumbs.onclick = (e) => {
      if (e.target.tagName !== "IMG") return;
      detail.querySelector(".main").src = e.target.src;
      thumbs.querySelectorAll("img").forEach((t) => t.classList.toggle("on", t === e.target));
    };
    history.replaceState(null, "", "#" + id);
    modal.showModal();
    modal.scrollTop = 0;
  }

  modal.querySelector(".close").onclick = () => modal.close();
  modal.onclick = (e) => { if (e.target === modal) modal.close(); };
  modal.onclose = () => history.replaceState(null, "", location.pathname + location.search);

  $("#yr").textContent = new Date().getFullYear();
  render();
  if (location.hash) open(decodeURIComponent(location.hash.slice(1)));
})();
