// Datos de ejemplo para RP
const productosRP = [
  {
    id: 1,
    nombre: "650 RP",
    cantidadRP: 650,
    precio: 5.00,
    imagenUrl: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt7d4d3e3e3b6be1f5/650rp_card.png"
  },
  {
    id: 2,
    nombre: "1380 RP",
    cantidadRP: 1380,
    precio: 10.00,
    imagenUrl: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8f3d4f5f6d7c8e9a/1380rp_card.png"
  },
  {
    id: 3,
    nombre: "2800 RP",
    cantidadRP: 2800,
    precio: 20.00,
    imagenUrl: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt9g4e5g6g7e8d9f0b/2800rp_card.png"
  },
  {
    id: 4,
    nombre: "5000 RP",
    cantidadRP: 5000,
    precio: 35.00,
    imagenUrl: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blta5f6a7a8f9e0a1b2/5000rp_card.png"
  },
  {
    id: 5,
    nombre: "8250 RP",
    cantidadRP: 8250,
    precio: 50.00,
    imagenUrl: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltb6g7b8b9g0f1g2h3/8250rp_card.png"
  },
  {
    id: 6,
    nombre: "15000 RP",
    cantidadRP: 15000,
    precio: 100.00,
    imagenUrl: "https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltc7h8c9c0h1g2h3i4/15000rp_card.png"
  }
];

// Datos de ejemplo para Skins
const productosSkins = [
  {
    id: 1,
    nombre: "Jinx Odyssey",
    campeon: "Jinx",
    rareza: "Legendary",
    precioRP: 1820,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_5.jpg"
  },
  {
    id: 2,
    nombre: "Yasuo True Damage",
    campeon: "Yasuo",
    rareza: "Epic",
    precioRP: 1350,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_18.jpg"
  },
  {
    id: 3,
    nombre: "Ahri K/DA ALL OUT",
    campeon: "Ahri",
    rareza: "Epic",
    precioRP: 1350,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg"
  },
  {
    id: 4,
    nombre: "Lux Elementalist",
    campeon: "Lux",
    rareza: "Mythic",
    precioRP: 3250,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg"
  },
  {
    id: 5,
    nombre: "Ezreal Pulsefire",
    campeon: "Ezreal",
    rareza: "Legendary",
    precioRP: 1820,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_4.jpg"
  },
  {
    id: 6,
    nombre: "Thresh Dark Star",
    campeon: "Thresh",
    rareza: "Epic",
    precioRP: 1350,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_6.jpg"
  },
  {
    id: 7,
    nombre: "Katarina Battle Academia",
    campeon: "Katarina",
    rareza: "Epic",
    precioRP: 1350,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_10.jpg"
  },
  {
    id: 8,
    nombre: "Zed Galaxy Slayer",
    campeon: "Zed",
    rareza: "Epic",
    precioRP: 1350,
    imagenUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_8.jpg"
  }
];

// Funciones de navegación
function showHome() {
  hideAllPages();
  document.getElementById('home-page').style.display = 'block';
  updateHero('Tienda League of Legends', 'Selecciona una tienda para explorar los productos');
}

function showRPStore() {
  hideAllPages();
  document.getElementById('rp-page').style.display = 'block';
  updateHero('Tienda de RP', 'Consigue Riot Points para desbloquear contenido premium');
  loadRPProducts();
}

function showSkinsStore() {
  hideAllPages();
  document.getElementById('skins-page').style.display = 'block';
  updateHero('Tienda de Skins', 'Personaliza tus campeones con increíbles aspectos');
  loadSkinsProducts();
}

function hideAllPages() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('rp-page').style.display = 'none';
  document.getElementById('skins-page').style.display = 'none';
}

function updateHero(title, subtitle) {
  document.getElementById('hero-title').textContent = title;
  document.getElementById('hero-subtitle').textContent = subtitle;
}

// Función para cargar productos RP
function loadRPProducts() {
  const container = document.getElementById('productos-rp');
  const loading = document.getElementById('rp-loading');
  
  if (container.innerHTML !== '') return; // Ya cargado
  
  loading.classList.add('show');
  
  setTimeout(() => {
    container.innerHTML = '';
    
    productosRP.forEach((producto, index) => {
      const productoDiv = document.createElement('div');
      productoDiv.className = 'producto';
      productoDiv.style.animationDelay = `${index * 0.1}s`;
      productoDiv.innerHTML = `
        <img src="https://via.placeholder.com/250x200/1e3c72/ffffff?text=${producto.cantidadRP}+RP" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>Cantidad de RP: <strong>${producto.cantidadRP.toLocaleString()}</strong></p>
        <div class="precio">$${producto.precio.toFixed(2)}</div>
        <button class="btn btn-primary mt-3" onclick="comprarRP(${producto.id})">Comprar</button>
      `;
      container.appendChild(productoDiv);
    });
    
    loading.classList.remove('show');
  }, 1000);
}

// Función para cargar skins
function loadSkinsProducts() {
  const container = document.getElementById('productos-skins');
  const loading = document.getElementById('skins-loading');
  
  if (container.innerHTML !== '') return; // Ya cargado
  
  loading.classList.add('show');
  
  setTimeout(() => {
    container.innerHTML = '';
    
    productosSkins.forEach((skin, index) => {
      const skinDiv = document.createElement('div');
      skinDiv.className = 'producto';
      skinDiv.style.animationDelay = `${index * 0.1}s`;
      skinDiv.innerHTML = `
        <div class="rareza-badge rareza-${skin.rareza.toLowerCase()}">${skin.rareza}</div>
        <img src="${skin.imagenUrl}" alt="${skin.nombre}" />
        <h3>${skin.nombre}</h3>
        <p>Campeón: <strong>${skin.campeon}</strong></p>
        <p>Rareza: <strong>${skin.rareza}</strong></p>
        <div class="precio">${skin.precioRP} RP</div>
        <button class="btn btn-secondary mt-3" onclick="comprarSkin(${skin.id})">Comprar</button>
      `;
      container.appendChild(skinDiv);
    });
    
    loading.classList.remove('show');
  }, 1000);
}

// Funciones de compra
function comprarRP(id) {
  const producto = productosRP.find(p => p.id === id);
  showNotification(`¡Has comprado ${producto.nombre} por $${producto.precio.toFixed(2)}!`, 'success');
}

function comprarSkin(id) {
  const skin = productosSkins.find(s => s.id === id);
  showNotification(`¡Has comprado la skin ${skin.nombre} de ${skin.campeon}!`, 'success');
}

// Función para mostrar notificaciones
function showNotification(message, type) {
  const notification = document.getElementById('notificacion');
  notification.textContent = message;
  notification.className = type;
  notification.style.display = 'block';
  
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}