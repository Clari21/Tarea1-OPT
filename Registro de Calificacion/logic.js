 //Declaracion de las clases
 
class Registro {
    
    constructor( alumno , materia){
        this.alumno = alumno;
        this.materia = materia;
    }

 }

 class Calificacion extends Registro {

    constructor (alumno, materia, nota) {
        super(alumno, materia);
        this.nota = nota;
    }
 }


//Declaracion de funciones

function validarNumero(valor) {
    return /^\d+$/.test(valor);
  }

function registrarCalificacion (){
    const cant = prompt('Introduzca la cantidad de calificaciones que desea registrar');
    for (let i = 0; i < cant ; i++){
        let alumno = prompt('Ingrese el nombre del alumno: ');
        let materia = prompt('Ingrese el nombre de la materia:');
        let nota = prompt('Ingrese la nota: ');
        if(validarNumero(nota)){
            let calificacion = new Calificacion (alumno, materia, nota);
            calificaciones.push(calificacion);
             } else 
        alert('La nota debe ser un numero');
        }
}

function mostrarCalificaciones (){
    return calificaciones.length === 0 ? alert('No existen calificaciones asignadas') : calificaciones.forEach(function (c){alert('Alumno: ' + c.alumno + '\nMateria:' + c.materia + '\nNota:' + c.nota);});
  }

function calcularPromAlumno (){
    let sum=0;
    let cant =0;
    const alumno = prompt('Introduzca el nombre del estudiante');
    calificaciones.forEach(function(a){
        if(alumno === a.alumno){
        sum += a.nota;
        cant++;
        }
    });
    return cant === 0 ?  alert(`El alumno ${alumno} no ha sido encontrado`) :alert(`El promedio de la estudiante ${alumno} es ${sum/cant}`);
}
 
//Menu

function menu (){
    let on = true;
    while (on) {
        let option = prompt('Seleccione una de las siguientes opciones:\n 1. Registrar Calificaciones\n 2. Mostrar todas las Calificaciones\n 3. Calcular promedio de un alumno\n 4. Salir');
        if(option != null){
        switch (option) {
            case '1':
                registrarCalificacion();
                break;
            case '2':
                mostrarCalificaciones();
                break;
            case '3':
                calcularPromAlumno();
                break;
            case '4':
                alert('Hasta Luego.');
                on = false;
                break;
            default:
                alert('Opcion no valida');
                break;
    
    }
   } else 
   on = false;   
 }
}

//Llamado a la funcion pricipal 

let calificaciones = [];
menu ();

  


 
  