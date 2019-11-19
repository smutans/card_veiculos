import {AngularFireDatabase} from 'angularfire2/database'
import { Injectable } from '@angular/core';
@Injectable()
export  class NoteService{
  constructor (public db: AngularFireDatabase){
  }
    notes = [
        {
          id: 1,
          nome: "fiat",
          modelo: "2019-01-01",
          cor: 'Firebase',
          placa: 'abc-1234'
        },
        {
          id: 2,
          date: '2019-11-04',
          content: 'Para entender Ionic',
          title: "Angular"
        },
        {
          id: 3,
          date: '2019-01-04',
          content: "Sistema de controle de versão",
          title: "GIT"
        },
        {
          id: 4,
          date: '2019-01-04',
          content: "Teste Adicionando",
          title: "Yuri"
        }
      ]

      removeNote (note){
        this.db.object("/notes/"+note.$key).remove()
        .then(
        x => console.log ("Note deleted successfully")
        ).
        catch( error => {
        console.log ("Could not delete note");
        alert ("Could not delete note")
        });
        }

      


      addNote (note){
        //this.notes.push(note);
        this.db.list("/notes/").push({
        nome: note.nome,
        modelo: note.modelo,
        cor: note.cor,
        placa: note.placa
        });
      }

      fetchNotes (){
        return this.db.list ("/notes/");
        }

        editNote (note){
          this.db.object("/notes/"+note.$key).update({
            nome: note.nome,
            modelo: note.modelo,
            cor: note.cor,
            placa: note.placa
          });
          }

          
}