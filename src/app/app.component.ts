import {
  Component
} from '@angular/core';
import {
  Task
} from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() { 
 
  }

  // -----
  // tareas: Array<Task> = [{ text: 'prueba', id: 0, completada: true }];
  // tareas: Array<Task> = [];

  tareas: Array < Task > = JSON.parse(localStorage.getItem("tareas")) || []; //Intento cargar el array de localStorage o uno vacío

  // tareas = [];
  query: string = "";
  tareasFiltradas: Array < Task > = this.tareas;
  queryText: string = '';

  guardaLocalStorage() {
    localStorage.setItem("tareas", JSON.stringify(this.tareas)); //Intento guardarlo en localStorage
    let shows = JSON.parse(localStorage.getItem('tareas'));
    // alert(shows.length);
  }
  vaciaLocalStorage() {
   localStorage.clear();
   alert(localStorage.length +" En localStorage");
    
  }
  comparar(a, b) {
    return b.id - a.id;
  }
  anyadirTarea(text) {
    let newTask: Task = {
      text,
      id: Date.now(),
      completada: false
    };

    this.tareas.push(newTask);
    this.tareasFiltradas.sort(this.comparar);
    this.tareasFiltradas = this.tareas;
    this.guardaLocalStorage();

  }
  mostrarControlesSer(tarea) {
    let arreglo = this.tareas;
    let busqueda = tarea.id;
    let indice = arreglo.findIndex(tarea => tarea.id=== busqueda);
    var lista = document.getElementsByClassName("controls") as HTMLCollectionOf < HTMLElement > ;
    lista[indice].style.opacity = "1";
  }
  ocultarControlesSer(tarea) {
    let arreglo = this.tareas;
    let busqueda = tarea.id;
    let indice = arreglo.findIndex(tarea => tarea.id === busqueda);
    var lista = document.getElementsByClassName("controls") as HTMLCollectionOf < HTMLElement > ;
    lista[indice].style.opacity = "0";
  }

  filtrarTarea(nuevaQuery: string) {
    this.query = nuevaQuery;
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.text.match(this.query));
  }

  eliminarTarea(tarea) {
    this.tareasFiltradas = this.tareas;
    for (let i = 0; i < this.tareas.length; i++) {
      if (tarea.id == this.tareas[i].id) {
        this.tareas.splice(i, 1);
      }
    }
    this.guardaLocalStorage();
  }

  checkearTarea(tarea) {
    tarea.completada = !tarea.completada;
    this.guardaLocalStorage();
  }
 
  borrarFiltro() {
    this.query = '';
    this.tareasFiltradas = this.tareas;
  }

}
