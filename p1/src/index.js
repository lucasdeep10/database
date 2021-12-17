import database from "./database/db.js";

database.schema.hasTable('productos').then(result=>{
    if(!result){//LA TABLA NO EXISTE, ENTONCES HAY QUE CREARLA
        database.schema.createTable('productos',table=>{
            //Aquí definimos la estructura de la tabla.
            table.increments();
            table.string('titulo').notNullable().defaultTo('sin titulo');
            table.string('talle').notNullable().defaultTo('sin talle');
            table.integer('precio').notNullable().defaultTo(0);
            table.string('thumbnail');
            table.timestamps(true,true);
        }).then(result=>console.log("Tabla creada"))
    }
})

let body={
    titulo:'Remera Gucci',
    talle:'M',
    precio: 1800,
    thumbnail:"###"
}
//Insertart producto
//database('productos').insert(body).then(result=>console.log(result));

//Trae un producto
/*database('productos').where('id',2).update(body).then(result=>{
    console.log(result);
})

//Elimina un producto
database('productos').del().where('talle','XXL').then(result=>{
    console.log(result);

})

database.select().table('productos').then(result=>{
    let processed = JSON.parse(JSON.stringify(result));
    console.log(processed);
}) */