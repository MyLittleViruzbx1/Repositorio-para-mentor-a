const getHeroes = (idx, callback3)=>{

    const heroe = {
        idx,
        nombre:'gambito',
    }

       setTimeout(() => {
        callback3(heroe)
       },1500);
    }

    getHeroes(6,(heroe)=>{
        console.log(heroe.idx);
        console.log(heroe.nombre);
    });