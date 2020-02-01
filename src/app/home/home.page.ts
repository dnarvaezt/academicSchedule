import { Component } from '@angular/core';
import { materias } from '../data/materia'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  materias: Materia[] = [... new Set(materias.values())]
  registro: Materia[] = []
  totalCreditosRegistro: number = 0
  creditosPermitidos: number = 18

  constructor(
    public alertController: AlertController
  ) { }

  registrarMateria(materia) {
    const estaRegistrada = this.estaRegistrada(materia)

    if (!estaRegistrada) {

      if (this.totalCreditosRegistro + materia.creditos > this.creditosPermitidos) {
        this.alertaCreditosInsuficientes()
        return
      } else if (this.seCrusa(materia)) {
        this.alertaCruceMaterias()
        return
      }

      this.registro.push(materia)
    } else {
      this.eliminarMateria(materia)
    }

    this.totalCreditosRegistro = 0
    this.registro.forEach(m => this.totalCreditosRegistro += m.creditos)
  }

  seCrusa(materia): boolean {
    for (const m of this.registro) {
      if (m.horario.filter(horario => materia.horario.find(h => h === horario)).length) {
        return true
      }
    }

    return false
  }

  estaRegistrada(materia): boolean {
    return this.registro.find(m => m.id === materia.id) !== undefined
  }

  eliminarMateria(materia) {
    const nuevoRegistro = []
    this.registro.forEach(m => {
      if (m.id !== materia.id) nuevoRegistro.push(m)
    })
    this.registro = nuevoRegistro
  }

  getColor(materia) {
    if (this.estaRegistrada(materia)) {
      return 'success'
    }
  }

  async alertaCreditosInsuficientes() {
    const alert = await this.alertController.create({
      header: 'Ups!',
      subHeader: 'No cueta con creditos suficientes.',
      message: `
        Total de creditos permitidos ${this.creditosPermitidos} \n
        Total de creditos registrados ${this.totalCreditosRegistro}
      `,
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaCruceMaterias() {
    const alert = await this.alertController.create({
      header: 'Ups!',
      subHeader: 'No se puede registrar esta materia.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
