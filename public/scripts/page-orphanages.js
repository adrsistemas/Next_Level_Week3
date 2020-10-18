/**



const map = L.map('mapid').setView([-23.6158601,-46.4741427], 15)

//create and add titlelayer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//creat icon

const icon = L.icon({
    iconURL: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create popup overlay

const popup = L.popup({ 
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meneninas <a href="/orphanages?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')

//create and add marker

L
.marker([-23.6158601,-46.4741427], {icon})
.addTo(map)
.bindPopup(popup) 
 */

// Create map
const map = L.map("mapid").setView([-23.6168505, -46.4729905], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {

  // Create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  })
  .setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"></a>`)

  // Create and add marker
  L
  .marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})
