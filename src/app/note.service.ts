export  class NoteService{
    notes = [
        {
          id: 1,
          content: "Estudar em breve",
          date: "2019-01-01",
          title: `Firebase`
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
        }
      ]

      removeNote (note){
        let i = this.notes.indexOf(note);
        if (i >= 0)
            this.notes.splice(i, 1); 
      }
      addNote (note){
          this.notes.push(note);
      }
}