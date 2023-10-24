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


const getEmpleado = (id, callback)=>{
    const empleado = empleados.find( e => e.id ===id)
    if(empleado){
        callback(empleado);
    }else{
        callback(`El empleado con ${id} no existe`);
    }
    }

getEmpleado(1, (err, empleado) =>{
    if( err ){
        console.log('Error!');
        return console.log(err);
    }else{
        console.log('Empleado existe')
        console.log(empleado)
    }
});