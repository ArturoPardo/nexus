import { Component } from '@angular/core';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
nombrecito:string="Arturo Pardo";
edadcito:number=45;

  


  alumnos:string[]=['Alberto','Joe','chiki'];
  addUser(newUser){
    this.alumnos.push(newUser.value);
    newUser.value='';
    newUser.focus();
    console.log(newUser.value);
    return false;
  }

  

  deleteAlumno(alumno){
  for(let i=0;i<this.alumnos.length;i++){
    if(alumno==this.alumnos[i]){
      this.alumnos.splice(i,1);
    }
  }
     console.log('j');
      }
  
  title = 'tercero';
  users = ['uno','dos','tres'];
  activado =true;
  name:string='Ryan Ran';
  age:number;
  address:{
    street: string;
    city:string;
  };
  hobbies:string[];
 

constructor(){
  this.age=28;
  this.address={
  street:'San salvador',
  city:'Alicante'
  };
  this.hobbies=['cantar','soñar'];





  
}

  // -----
  // tareas: Array<Task> = [{ text: 'prueba', id: 0, completada: true }];
  // tareas: Array<Task> = [];
  tareas: Array<Task> = JSON.parse(localStorage.getItem("tareas")) || []; //Intento cargar el array de localStorage o uno vacío
 
  
  // tareas = [];
  query:string="";
  
  tareasFiltradas: Array<Task> = this.tareas;
  queryText: string = '';
  
  
  anyadirTarea(text) {
    let newTask: Task = { text, id: Date.now(), completada: false };
    this.tareas.push(newTask);
    this.tareasFiltradas = this.tareas;
    this.guardaLocalStorage();
    
  }
  

  guardaLocalStorage() {
    localStorage.setItem("tareas", JSON.stringify(this.tareas)); //Intento guardarlo en localStorage
     
  }
  
 

  filtrarTarea(nuevaQuery: string) {
    this.query= nuevaQuery;
    
 
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.text.match(this.query));
   
   if(this.tareasFiltradas.length == 0){

    console.log('no hay resultados');
 }
 else{
    
    console.log("RESULTADOS: "+ this.tareasFiltradas.length);
 }
    
  //  
    
    
    // this.tareasFiltradas = this.tareas.filter(tarea => tarea.text.match(this.query));
    
  }

  eliminarTarea(tarea) {
    this.tareasFiltradas = this.tareas;
    for(let i=0;i<this.tareas.length;i++){
      if(tarea.id==this.tareas[i].id){
        this.tareas.splice(i,1);
        console.log("eliminar tarea" +tarea);
    }
   }
   this.guardaLocalStorage();

  }

  checkearTarea(tarea) {
    
    tarea.completada=! tarea.completada;
    console.log(tarea.completada);
   this.guardaLocalStorage();

  }

  borrarFiltro() {
    this.query = '';
    this.tareasFiltradas = this.tareas;
    console.log('borro');
    
    
  }

 
  safran:string="color por defecto";
  bloque = ['amarillo','rojos','azul']
  anyadirColor(nuevoColor) {
    console.log('llega');
    console.log('mi nuevo'+ nuevoColor);
    this.safran=nuevoColor;
    console.log('mi nuevo color '+ this.safran);
    
    this.bloque.push(nuevoColor);
    console.log('mi nuevo bloque '+ this.bloque);
  
 
  }
  // -----
  
}
