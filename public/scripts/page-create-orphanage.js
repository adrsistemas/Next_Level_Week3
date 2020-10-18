

 const map = L.map("mapid").setView([-23.6168505,-46.4729905], 15)

 // Create and add tileLayer
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 ).addTo(map)
 
 // Create icon
 const icon = L.icon({
     iconUrl: "/images/map-marker.svg",
     iconSize: [58, 68],
     iconAnchor: [29, 68] 
 })


 //create and add marker 

 let marker;


 map.on('click', (event) => {
     const lat = event.latlng.lat;
     const lng = event.latlng.lng;

     document.querySelector('[name=lat]').value = lat;
     document.querySelector('[name=lng]').value = lng;
     //remove icon 

     marker && map.removeLayer(marker)

     //add icon tileLayer
     marker = L.marker([lat, lng], { icon })
     .addTo(map)
 })


 // photos uploads

 function addPhotoField(){
     //pegar um container de fotos #images
        const container = document.querySelector('#images')


     //pegar o container para duplicar .new-image


     const fieldsContainer = document.querySelectorAll('.new-upload')


     //realizar o clone da ultima imagem adicionada.


     const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar se o campo está vazio, se sim, não adicionar ao container imagens

    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

     // adicionar o clone ao container de #imagens

     container.appendChild(newFieldContainer)
 }


 function deleteField(event) {
     const span = event.currentTarget


     const fieldsContainer = document.querySelectorAll('.new-upload')

     if(fieldsContainer.length < 2){

        span.parentNode.children[0].value =""

         return
     }

     span.parentNode.remove();
 }

 function toggleSelect(event){

    //pegar o botao clicado duplicar

    document.querySelectorAll('.button-select button')
    .forEach( function(button){
        button.classList.remove('active');
    })


    // colocar a class .active nesse botão clicado 

    const button = event.currentTarget
    button.classList.add('active')
 



    // atualizar o meu input hidden imagem

    const input = document.querySelector('[name="open_on_weekends"]')

       // verificar se e sim ou nao 

    input.value = button.dataset.value

    function validate(event){
        //validar se lat e lng estão preenchidos

        const needsLatAndLng = true;
        if(needsLatAndLng){
        event.preventDefault()
        alert('Selecione um ponto no mapa')
        }
        
    }

    
 }