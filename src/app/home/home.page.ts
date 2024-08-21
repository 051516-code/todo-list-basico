import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Task {
  name: String;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isVisible : boolean = false;
  newTask : string = '';
  tasks : Task[] = [];

  constructor(
    private alertCtrl : AlertController
  ) {}

  addTask() {
    if(this.newTask.trim().length > 0){
      this.isVisible = true;

      this.tasks.push({name: this.newTask, completed: false});
      
      this.newTask = '';
      this.presentAlert('registro exitoso', 'tarea guardada correctamente');
    }

  }
async onTaskStatusChange(task : Task){
  const subHeader = task.completed ? 'Tarea Completada con Exito' : 'Tarea Incompleta';
  const message = task.completed 
  ? 'La tarea se ha completada correctamente'
  : 'La tarea se ha marcado como incompleta';

  await this.presentAlert( subHeader, message)

  
}

  deleteTask(task : Task){
    this.tasks = this.tasks.filter(t => t !==task);

    this.presentAlert('Borrando', 'La Tarea se ha borrado por completo')
  }

  async presentAlert( sub : string , msg : string){
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: sub,
      message: msg,
      buttons: [' OK']
    })
    await alert.present();
  }
}
