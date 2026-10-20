/*
 * Personaliza los datos y enlaces de cada alojamiento en PROPERTY_DATA.
 * Los enlaces quedan desactivados hasta que agregues las URL reales.
 */
const ROCAMAR_IMAGES = [
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.58.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.58 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.58 (2).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.59.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.59 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.59 (2).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.59 (3).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.44.59 (4).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.00.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.01.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.01 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.01 (2).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.02.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.02 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.03.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.03 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.04.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.04 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.05.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.05 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.05 (2).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.06.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.07.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.07 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.07 (2).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.07 (3).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.08.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.08 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.08 (2).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.08 (3).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.09.jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.09 (1).jpeg",
  "propiedades/rocamar/WhatsApp Image 2026-10-08 at 12.45.09 (2).jpeg"
];

const CARABELA_IMAGES = [
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.17.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.18.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.19.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.20.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.20 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.20 (2).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.21.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.21 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.23.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.23 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.23 (2).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.23 (3).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.24.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.24 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.24 (2).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.25.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.25 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.25 (2).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.26.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.26 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.27.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.27 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.27 (2).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.27 (3).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.27 (4).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.28.jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.28 (1).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.28 (2).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.28 (3).jpeg",
  "propiedades/carabela/WhatsApp Image 2026-10-08 at 12.47.29.jpeg"
];

const INFINITY_IMAGES = [
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41.jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (1).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (2).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (3).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (4).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (5).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (6).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (7).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (8).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (9).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (10).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (11).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (12).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (13).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (14).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (15).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.41 (16).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42.jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (1).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (2).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (3).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (4).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (5).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (6).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (7).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (8).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (9).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (10).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (11).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (12).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (13).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (14).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (15).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (16).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (17).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (18).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (19).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (20).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (21).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (22).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (23).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (24).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (25).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (26).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (27).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (28).jpeg",
  "propiedades/infinity/WhatsApp Image 2026-10-17 at 22.27.42 (29).jpeg"
];

const PROPERTY_DATA = [
  {
    id: "carabela",
    name: "Carabela",
    category: "Tu próximo refugio",
    location: "Av. El Encanto 533, Reñaca",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20El%20Encanto%20533%2C%20Re%C3%B1aca",
    description: "Un espacio acogedor para descansar, compartir y disfrutar tu próxima escapada.       Excelente vista al mar bajada directa a la playa, que tiene piscina de temporada al aire libre, centro de fitness y jardín, ofrece alojamiento en Viña del Mar con wifi gratis y vistas al mar. El apartamento, que cuenta con parking privado gratis, está en una zona en la que se pueden practicar actividades como senderismo, windsurf y pesca.",
    accommodationDetails: "6 huéspedes · 2 habitaciones · 3 camas · 2 baños",
    price: "",
    images: CARABELA_IMAGES,
    coverImage: CARABELA_IMAGES[2],
    bookingUrl: "https://www.booking.com/hotel/cl/el-encanto-renca-vina-del-mar.es.html?label=mkt123sc-d3d69d73-5d13-4fb2-a4a6-001c07e47d32&sid=38c2de9a2fe8101fab09c0ac55739435&dist=0&keep_landing=1&sb_price_type=total&type=total&",
    airbnbUrl: "https://www.airbnb.cl/rooms/41408938?guests=1&adults=1&s=67&unique_share_id=7ab2cad2-fa4a-4f1f-bb9e-0da7d4a9d75e",
    videoUrl: ""
  },
  {
    id: "infinity",
    name: "Infinity",
    category: "Una estadía a tu ritmo",
    location: "Edmundo Eluchans 2105, Viña del Mar",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Edmundo%20Eluchans%202105%2C%20Vi%C3%B1a%20del%20Mar",
    description: "Un lugar pensado para hacer una pausa y sentirte a gusto durante tu viaje. Excelente vista al mar ubicado en el sector de Reñaca de Viña del mar.Departamento moderno, cómodo y seguro.",
    accommodationDetails: "6 huéspedes · 2 habitaciones · 2 camas · 2 baños",
    available: false,
    price: "",
    images: INFINITY_IMAGES,
    coverImage: INFINITY_IMAGES[6],
    bookingUrl: "",
    airbnbUrl: "",
    videoUrl: ""
  },
  {
    id: "rocamar-1",
    name: "Rocamar 1",
    category: "Un respiro junto al mar",
    location: "Av. Borgoño 19300, Concón",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20Borgo%C3%B1o%2019300%2C%20Conc%C3%B3n",
    description: "Un espacio luminoso para desconectar, recargar energías y disfrutar cada momento.Hermoso Depto, 1 Linea Roca Mar Sector Costa Brava se encuentra a solo 9 min a pie de Playa de Los Lilenes y ofrece alojamiento en Concón con jardín y terraza, además de recepción 24 horas. Este apartamento ofrece wifi gratis, una cocina totalmente equipada y un patio.Este apartamento con vistas al mar dispone de suelo de parquet, 1 dormitorio y 1 baño con ducha, bañera y secador de pelo. Se ofrece TV de pantalla plana con canales por cable.Se puede disfrutar de la piscina cubierta en el apartamento.A las parejas les encanta la ubicación — Le han puesto un 9,6 para viajes de dos personas.",
    accommodationDetails: "3 huéspedes · 1 habitación · 3 camas · 1 baño",
    price: "",
    images: ROCAMAR_IMAGES,
    bookingUrl: "https://www.booking.com/hotel/cl/hermoso-depto-1linea-roca-mar-sector-costa-brava.es.html?label=gen173nr-10CAsoL0IwaGVybW9zby1kZXB0by0xbGluZWEtcm9jYS1tYXItc2VjdG9yLWNvc3RhLWJyYXZhSDNYBGgviAEBmAEzuAEZyAEM2AED6AEB-AEBiAIBqAIBuAKU6qTWBsACAdICJDNkOTQ3YjFiLTgzOGUtNDUwMy04MTRiLTU5ZTM4YjdlNGFhONgCAeACAQ&sid=e15ade3a4eea3f065cf0fbc0c2d6ee90&dist=0&keep_landing=1&sb_price_type=total&type=total&",
    airbnbUrl: "https://www.airbnb.cl/rooms/49380035?guests=1&adults=1&s=67&unique_share_id=501da11d-fc8e-4e52-92ad-f94bb9f98f50",
    videoUrl: ""
  },
  {
    id: "rocamar-2",
    name: "Rocamar 2",
    category: "Un respiro junto al mar",
    location: "Av. Borgoño 19300, Concón",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Av.%20Borgo%C3%B1o%2019300%2C%20Conc%C3%B3n",
    description: "Un espacio luminoso para desconectar, recargar energías y disfrutar cada momento.Hermoso Depto, 1 Linea Roca Mar Sector Costa Brava se encuentra a solo 9 min a pie de Playa de Los Lilenes y ofrece alojamiento en Concón con jardín y terraza, además de recepción 24 horas. Este apartamento ofrece wifi gratis, una cocina totalmente equipada y un patio.Este apartamento con vistas al mar dispone de suelo de parquet, 1 dormitorio y 1 baño con ducha, bañera y secador de pelo. Se ofrece TV de pantalla plana con canales por cable.Se puede disfrutar de la piscina cubierta en el apartamento.A las parejas les encanta la ubicación — Le han puesto un 9,6 para viajes de dos personas.",
    accommodationDetails: "3 huéspedes · 1 habitación · 3 camas · 1 baño",
    price: "",
    images: ROCAMAR_IMAGES,
    bookingUrl: "https://www.booking.com/hotel/cl/hermoso-depto-1linea-roca-mar-sector-costa-brava.es.html?label=mkt123sc-502d6985-0800-40f6-a21f-2c20dc777f06&sid=38c2de9a2fe8101fab09c0ac55739435&dist=0&keep_landing=1&sb_price_type=total&type=total&",
    airbnbUrl: "https://www.airbnb.cl/rooms/49380035?guests=1&adults=1&s=67&unique_share_id=501da11d-fc8e-4e52-92ad-f94bb9f98f50",
    videoUrl: ""
  }
];

const SITE_CONTACT = {
  email: "pedro.gutierrez.g@gmail.com",
  whatsappNumber: "56998499131",
  videoUrl: "",
  social: {
    instagram: "https://www.instagram.com/nexooptimo/",
    facebook: ""
  }
};

const propertyGrid = document.querySelector("#property-grid");
const propertySelect = document.querySelector("#property-select");
const lightbox = document.querySelector("#lightbox");
let galleryProperty = null;
let galleryIndex = 0;

function safeUrl(value) {
  if (!value) return "";
  try {
    const parsed = new URL(value, window.location.href);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
}

function actionLink(label, url, className = "") {
  const safe = safeUrl(url);
  if (!safe) {
    return `<a class="${className} is-disabled" href="#contacto" aria-disabled="true" title="Enlace pendiente de configurar">${label}</a>`;
  }
  return `<a class="${className}" href="${safe}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function renderProperties() {
  propertyGrid.innerHTML = PROPERTY_DATA.map((property, propertyIndex) => {
    const cover = property.coverImage || property.images[0];
    const priceLabel = property.price ? property.price : "Valor a consultar";
    const isUnavailable = property.available === false;
    const mapUrl = safeUrl(property.mapUrl);
    const location = mapUrl
      ? `<a class="location map-location" href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación de ${property.name} en Google Maps: ${property.location}" title="${property.location}">Ver mapa ↗</a>`
      : `<span class="location">${property.location}</span>`;
    return `
      <article class="property-card${isUnavailable ? " is-unavailable" : ""}">
        <button class="card-photo" type="button" data-property="${propertyIndex}" aria-label="Ver fotos de ${property.name}">
          <img src="${cover}" alt="${property.name}: fotografía del alojamiento" loading="lazy">
          <span class="photo-count">VER FOTOS&nbsp; ↗</span>
          ${isUnavailable ? '<span class="availability-badge">ARRENDADO · NO DISPONIBLE</span>' : ""}
        </button>
        <div class="card-body">
          <div class="card-kicker"><span>${property.category}</span>${location}</div>
          <h3>${property.name}</h3>
          <p class="card-description">${property.description}</p>
          ${property.accommodationDetails ? `<div class="card-detail"><span class="detail-dot" aria-hidden="true"></span>${property.accommodationDetails}</div>` : ""}
          <div class="card-detail"><span class="detail-dot" aria-hidden="true"></span>Galería de ${property.images.length} fotos</div>
          <div class="card-kicker card-price"><span>ESTADÍA</span><span class="location">${priceLabel}</span></div>
          <div class="card-divider"></div>
          <div class="card-actions">
            ${actionLink("Booking ↗", property.bookingUrl)}
            ${actionLink("Airbnb ↗", property.airbnbUrl)}
            ${actionLink("Video ↗", property.videoUrl, "video-action")}
          </div>
        </div>
      </article>`;
  }).join("");

  propertySelect.insertAdjacentHTML("beforeend", PROPERTY_DATA.map((property) =>
    `<option value="${property.name}">${property.name}</option>`
  ).join(""));
  const reservationPropertySelect = document.querySelector("#reservation-property-select");
  reservationPropertySelect.insertAdjacentHTML("beforeend", PROPERTY_DATA.map((property) =>
    `<option value="${property.name}"${property.available === false ? " disabled" : ""}>${property.name}${property.available === false ? " (No disponible)" : ""}</option>`
  ).join(""));
}

function showGallery(index, imageIndex = 0) {
  galleryProperty = PROPERTY_DATA[index];
  galleryIndex = imageIndex;
  updateGallery();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close").focus();
}

function updateGallery() {
  if (!galleryProperty) return;
  const image = galleryProperty.images[galleryIndex];
  lightbox.querySelector(".lightbox-image").src = image;
  lightbox.querySelector(".lightbox-image").alt = `${galleryProperty.name}, imagen ${galleryIndex + 1}`;
  lightbox.querySelector(".lightbox-caption").textContent = `${galleryProperty.name} · ${galleryIndex + 1} / ${galleryProperty.images.length}`;
  lightbox.querySelector(".lightbox-prev").hidden = galleryProperty.images.length < 2;
  lightbox.querySelector(".lightbox-next").hidden = galleryProperty.images.length < 2;
}

function closeGallery() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  galleryProperty = null;
}

function configureSiteLinks() {
  const videoLink = document.querySelector("#video-link");
  const videoUrl = safeUrl(SITE_CONTACT.videoUrl);
  if (videoUrl) {
    videoLink.href = videoUrl;
    videoLink.target = "_blank";
    videoLink.rel = "noopener noreferrer";
  } else {
    videoLink.classList.add("is-disabled");
    videoLink.setAttribute("aria-disabled", "true");
    videoLink.title = "Agrega el enlace del video en script.js";
  }

  const emailLink = document.querySelector("#contact-email");
  if (SITE_CONTACT.email) {
    const email = SITE_CONTACT.email.trim();
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = "Escríbenos un mensaje ↗";
  }

  const whatsappLink = document.querySelector("#whatsapp-link");
  const number = SITE_CONTACT.whatsappNumber.replace(/\D/g, "");
  if (number) {
    whatsappLink.href = `https://wa.me/${number}?text=${encodeURIComponent("Hola, quisiera consultar por sus alojamientos.")}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  } else {
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#form-status").textContent = "WhatsApp estará disponible pronto. Déjanos tu consulta en el formulario.";
      document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
    });
  }

  const socialIcons = {
    instagram: (gradientId) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><linearGradient id="${gradientId}" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#feda75"/><stop offset="50%" stop-color="#d62976"/><stop offset="100%" stop-color="#4f5bd5"/></linearGradient></defs><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="url(#${gradientId})" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="url(#${gradientId})" stroke-width="2"/><circle cx="17.6" cy="6.7" r="1.15" fill="#d62976"/></svg>`,
    facebook: () => '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#0866ff" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.022 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.025 1.792-4.699 4.533-4.699 1.312 0 2.686.235 2.686.235v2.969h-1.513c-1.491 0-1.956.93-1.956 1.886v2.253h3.328l-.532 3.469h-2.796v8.385C19.612 23.095 24 18.092 24 12.073Z"/></svg>'
  };
  const configureSocialIcons = (container, includeWhatsapp = false) => {
    container.innerHTML = Object.entries(SITE_CONTACT.social)
      .map(([name, url]) => {
        const icon = socialIcons[name](`${container.id}-${name}-gradient`);
        const safe = safeUrl(url);
        return safe
          ? `<a href="${safe}" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en ${name}">${icon}</a>`
          : `<a class="is-disabled" href="#contacto" aria-disabled="true" title="Agrega el perfil oficial de ${name} en script.js" aria-label="Perfil de ${name} pendiente de configurar">${icon}</a>`;
      })
      .join("");

    if (includeWhatsapp && number) {
      container.insertAdjacentHTML("beforeend", `<a class="contact-whatsapp-link" href="${safeUrl(whatsappLink.href)}" target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">${whatsappLink.querySelector("svg").outerHTML}</a>`);
    }

    container.addEventListener("click", (event) => {
      if (event.target.closest(".is-disabled")) {
        event.preventDefault();
        document.querySelector("#form-status").textContent = "Los perfiles oficiales de redes sociales aún no están configurados.";
      }
    });
  };

  configureSocialIcons(document.querySelector("#social-links"));
  configureSocialIcons(document.querySelector("#contact-social-links"), true);
}

propertyGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".card-photo");
  if (button) showGallery(Number(button.dataset.property));
});

lightbox.querySelector(".lightbox-close").addEventListener("click", closeGallery);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => {
  galleryIndex = (galleryIndex - 1 + galleryProperty.images.length) % galleryProperty.images.length;
  updateGallery();
});
lightbox.querySelector(".lightbox-next").addEventListener("click", () => {
  galleryIndex = (galleryIndex + 1) % galleryProperty.images.length;
  updateGallery();
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeGallery();
});
document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeGallery();
  if (event.key === "ArrowLeft") lightbox.querySelector(".lightbox-prev").click();
  if (event.key === "ArrowRight") lightbox.querySelector(".lightbox-next").click();
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("#form-status");
  if (!SITE_CONTACT.email.trim()) {
    status.textContent = "El formulario está listo; falta configurar el correo de contacto de la empresa.";
    return;
  }
  const formData = new FormData(event.currentTarget);
  const subject = `Consulta de alojamiento: ${formData.get("property")}`;
  const body = [
    `Nombre: ${formData.get("name")}`,
    `Correo: ${formData.get("email")}`,
    `Alojamiento: ${formData.get("property")}`,
    "",
    formData.get("message")
  ].join("\n");
  window.location.href = `mailto:${SITE_CONTACT.email.trim()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Se abrirá tu aplicación de correo para enviar la consulta.";
});

const reservationForm = document.querySelector("#reservation-form");
if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#reservation-status");
    const formData = new FormData(event.currentTarget);
    const guestName = formData.get("reservationName").toString().trim();
    const guestPhone = formData.get("reservationPhone").toString().trim();
    const guestEmail = formData.get("reservationEmail").toString().trim();
    const property = formData.get("reservationProperty").toString().trim();
    const selectedProperty = PROPERTY_DATA.find((item) => item.name === property);
    if (selectedProperty && selectedProperty.available === false) {
      status.textContent = `${property} está arrendado y no está disponible para reservar.`;
      return;
    }
    const checkin = formData.get("checkin").toString();
    const checkout = formData.get("checkout").toString();
    const adults = formData.get("adults").toString();
    const children = formData.get("children").toString();
    const pets = formData.get("pets").toString();
    const message = formData.get("reservationMessage").toString().trim();

    const emailSubject = `Nueva reserva: ${property}`;
    const emailBody = [
      `Nombre: ${guestName}`,
      `Teléfono: ${guestPhone}`,
      `Correo: ${guestEmail}`,
      `Alojamiento: ${property}`,
      `Check-in: ${checkin}`,
      `Check-out: ${checkout}`,
      `Adultos: ${adults}`,
      `Niños: ${children}`,
      `Viaja con mascotas: ${pets}`,
      "",
      `Mensaje: ${message || "Sin comentarios adicionales"}`
    ].join("\n");

    const whatsappMessage = `Hola, tengo una nueva reserva:\nNombre: ${guestName}\nTeléfono: ${guestPhone}\nCorreo: ${guestEmail}\nAlojamiento: ${property}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nAdultos: ${adults}\nNiños: ${children}\nViaja con mascotas: ${pets}\nMensaje: ${message || "Sin comentarios adicionales"}`;

    if (SITE_CONTACT.email.trim()) {
      window.location.href = `mailto:${SITE_CONTACT.email.trim()}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    }

    const number = SITE_CONTACT.whatsappNumber.replace(/\D/g, "");
    if (number) {
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
    }

    status.textContent = "Se abrió tu correo y WhatsApp con la información de la reserva.";
    reservationForm.reset();
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderProperties();
configureSiteLinks();
