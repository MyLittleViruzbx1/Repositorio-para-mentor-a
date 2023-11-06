const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Katherine'
    },
    {
        id: 3,
        nombre: 'Mary'
    }
];



const salarios = [
    {
        id: 1,
        salario:1000
    },
    {
        id: 2,
        salario:2100
    },
    // {
    //     id: 3,
    //     salario:900
    // }
];

const id = 3;

const getEmpleado = (id )=>{

   return new Promise( (resolve, reject)=>{

        const empleado = empleados.find( e => e.id === id)?.nombre;
         (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });

}



const getSalario = (id) =>{

    return new Promise((resolve, reject)=>{

        const salario = salarios.find(s => s.id === id)?.salario;
        
        (salario)
            ? resolve(salario)
            : (`El salario con ${id} no existe`)
        
    })
}



    // getEmpleado(id)
    // .then(empleado => console.log(empleado))
    // .catch(err => console.log(err))


    // getSalario(id)
    // .then( salario => console.log(salario))
    // .catch(err => console.log(err))
getEmpleado(id)
    .then(empleado =>{

        getSalario(id)
            .then(salario =>{
                console.log('El empleado', empleado, "tiene un salario de", salario);
            })
            .catch( err =>console.log(err))

    })
    .catch(err =>{console.log(err)})
    console.log(err)

    // solucionar el problema de err 