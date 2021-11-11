
class alumnos{
    constructor(nombre,curso){

        this.nombre = nombre;
        this.curso = curso;

    }
}
let listaDeAlumnos = []

for(let i = 0 ; i < 5 ; i++){

    let nombreAlumno = prompt("Ingrese el nombre del alumno");

    let cursoALumno = prompt("Ingrese el curso, A, B o C");

    listaDeAlumnos.push (new alumnos(nombreAlumno, cursoALumno));
    
}

for(let alumno of listaDeAlumnos){

    if(alumno.nombre == "Juan" && alumno.curso == "A"){
        console.log("El alumno: " + alumno.nombre + ". Del curso: " + alumno.curso + " está aprobado");
    }
    else if(alumno.nombre == "Pedro" && alumno.curso == "B"){
        console.log("El alumno: " + alumno.nombre + ". Del curso: " + alumno.curso + ", está aprobado");
    }
    else if(alumno.nombre == "Lucia" && alumno.curso == "C"){
        console.log("El alumno: " + alumno.nombre + ". Del curso: " + alumno.curso + " está desaprobado");
    }
    else if(alumno.nombre == "Carlos" && alumno.curso == "A"){
        console.log("El alumno: " + alumno.nombre + ". Del curso: " + alumno.curso + " está aprobado");
    }
    else if(alumno.nombre == "Julian" && alumno.curso == "B"){
        console.log("El alumno: " + alumno.nombre + ". Del curso: " + alumno.curso + " está desaprobado");
    }
    else{
        console.log("Alumno o curso incorrecto");
        
    }


}