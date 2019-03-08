import { Component } from '@stencil/core';

@Component({
  tag: 'form-add',
  styleUrl: 'form-add.scss'
})
export class FormAdd {

  codeFormation: string;
  debutAccreditation: string;
  diplome: string;
  doubleDiplome: string;
  finAccreditation: string;
  n0Annee: number;
  nomFormation: string;


  postFormation(e) {
    e.preventDefault();
    console.log("!");



    const codeFormation = this.codeFormation;
    const debutAccreditation = this.debutAccreditation;
    const diplome = this.diplome;
    const doubleDiplome = this.doubleDiplome;
    const finAccreditation = this.finAccreditation
    const n0Annee = this.n0Annee;
    const nomFormation = this.nomFormation;

    const payload = {
      codeFormation,
      debutAccreditation,
      diplome,
      doubleDiplome,
      finAccreditation,
      n0Annee,
      nomFormation,
    };

    fetch("https://api-dosispi.cleverapps.io/formations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    }).then(() => {
      alert("formation ajouté ");
      location.href = '/formations';
    }).catch((error) => {
      alert(' Error ! please retry !! ');
      console.error(error);
    });

  }

  render() {
    return (
      <form>
        
        <div class="card">

          <div class="card-content">
            <p class="title">
              <b>Entrer les informations d'une formation</b>
            </p>

            <div class="field">
              <br></br>
              <label class="label">Code formation</label>
              <div class="control">

                <input class="input" type="text" name="codeFormation" onInput={(e: any) => (this.codeFormation = e.target.value)}  /><br></br>
              </div></div>

            <div class="field">
              <br></br>
              <label class="label">Debut accredidation</label>
              <div class="control">

                <input class="input" type="text" name="debuAccreditation" onInput={(e: any) => (this.debutAccreditation = e.target.value)}  /><br></br>
              </div></div>
            <div class="field">
              <label class="label">diplome</label>
              <div class="control">

                <input class="input" type="text" name="diplome" onInput={(e: any) => (this.diplome = e.target.value)}  /><br></br>
              </div></div>
              <div class="field">
              <label class="label">DOUBLE diplome</label>
              <div class="control">

                <input class="input" type="text" name="doubleDiplome" onInput={(e: any) => (this.doubleDiplome = e.target.value)}  /><br></br>
              </div></div>

            <div class="field">
              <label class="label">Fin accredidation</label>
              <div class="control">

                <input class="input" type="text" name="finAccreditation" onInput={(e: any) => (this.finAccreditation = e.target.value)}  /><br></br>
              </div></div>
            <div class="field">
              <label class="label">num année </label>
              <div class="control">

                <input class="input" type="text" name="n0Annee" onInput={(e: any) => (this.n0Annee= e.target.value)}  /><br></br>
              </div></div>

            <div class="field">
              <label class="label">Nom formation</label>
              <div class="control">

                <input class="input" type="text" name="nomFormation" onInput={(e: any) => (this.nomFormation = e.target.value)}  /><br></br>
              </div></div>

            

            <br></br><br></br>
            <div class="field is-grouped">
              <div class="control">

                <button onClick={this.postFormation.bind(this)} class="button is-primary is-large is-fullwidth">Submit</button>

              </div>
              <div class="control">
                <stencil-route-link url="/formations">
                  <button class="button is-link is-large is-fullwidth">Cancel</button>
                </stencil-route-link>

              </div>
              <br></br>
            </div>
            <br></br>
            <br></br>

          </div></div>
      </form>

    );
  }
}