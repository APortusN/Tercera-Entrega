class Productos {
    constructor(id, foto, nombre, marca, origen, abv, precio){
        this.id = id;
        this.foto = foto;
        this.nombre = nombre;
        this.marca = marca;
        this.origen = origen;
        this.abv = abv;
        this.precio = parseFloat(precio);
    }
}

const productos = [{
    id: 1,
    foto: "https://cdnx.jumpseller.com/botilleria-lilybull/image/16516975/resize/640/640?1654722759",
    nombre: "Delirium Tremens",
    marca: "Delirium",
    origen: "Bégica",
    abv: "8.5%",
    precio: 3650
},
{
    id: 2,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/16549490/resize/640/640?1653801535",
    nombre:"Gulden Draak Imperial Stout",
    marca:"Gulden Draak",
    origen: "Bégica",
    abv: "12%",
    precio: 4390
},
{
    id: 3,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/14419818/resize/640/640?1639626088",
    nombre:"Delirium Christmas",
    marca:"Delirium",
    origen: "Bégica",
    abv: "10%",
    precio: 3290
},
{
    id: 3,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/16518051/resize/640/640?1639626099",
    nombre:"Salvator",
    marca:"Paulaner",
    origen: "Alemania",
    abv: "7.9%",
    precio: 2200
},
{
    id: 4,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/23117905/resize/640/640?1655353048",
    nombre:"Sculpin IPA",
    marca:"Ballast point",
    origen: "USA",
    abv: "7%",
    precio: 3800
},
{
    id: 5,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/17281757/resize/640/640?1639626174",
    nombre:"Untitled II",
    marca:"Coronado",
    origen: "USA",
    abv: "4.3%",
    precio: 4800
},
{
    id: 6,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/18506584/resize/640/640?1637295044",
    nombre:"Big Bad Baptist",
    marca:"EPIC",
    origen: "USA",
    abv: "12%",
    precio: 12990
},
{
    id: 7,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/18402151/resize/640/640?1633390893",
    nombre:"Cosmonauta",
    marca:"Jester",
    origen: "Chile",
    abv: "10%",
    precio: 3990
},
{
    id: 8,
    foto:"https://cdnx.jumpseller.com/botilleria-lilybull/image/16533494/resize/640/640?1647844286",
    nombre:"Cuello Negro Stout",
    marca:"Cuello Negro",
    origen: "Chile",
    abv: "8%",
    precio: 2600
}
];