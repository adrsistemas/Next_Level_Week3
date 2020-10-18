const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async db => { 
    
    await saveOrphanage(db,{        
            lat: "-23.6168505",
            lng: "-46.4795905", 
            name: "Lar das Meninas",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "11949874962",    
            images: [
                "https://images.unsplash.com/photo-1598322313658-512b47702270?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1598983290606-cf5876b08655?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
    
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            opening_hours: "Horário de visitas Das Crianças 18h até 8h",
            open_on_weekends: "1"
        
    }) 

    //consultar dados da tabela    
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})