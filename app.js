const getHeroes = (idx, callb)=>{
    const heroe = {
        idx,
        nombre:'gambito',
    }

       setTimeout(() => {
        callb(heroe)
       },1500);
    }

    getHeroes(6,(h)=>{
        console.log(h.idx);
        console.log(h.nombre);
    });