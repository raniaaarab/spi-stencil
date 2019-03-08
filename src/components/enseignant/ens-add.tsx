import { Component } from '@stencil/core';



@Component({
  tag: 'ens-add',
  styleUrl: 'ens-add.scss'
})
export class EnsAdd {

  noEnseignant: number;
  adresse: string;
  codePostal: string;
  emailPerso: string;
  emailUbo: string;
  mobile: string;
  nom: string;
  pays: string;
  prenom: string;
  sexe: string;
  telephone: string;
  type: string;
  ville: string;


  postArticle(e) {
    e.preventDefault();
    console.log("!");

    const noEnseignant = this.noEnseignant;
    const codePostal = this.codePostal;
    const emailPerso = this.emailPerso;
    const emailUbo = this.emailUbo;
    const mobile = this.mobile;
    const nom = this.nom;
    const pays = this.pays;
    const prenom = this.prenom;
    const sexe = this.sexe;
    const telephone = this.telephone;
    const type = this.type;
    const ville = this.ville;

    const payload = {
      noEnseignant,
      codePostal,
      emailPerso,
      emailUbo,
      mobile,
      nom,
      pays,
      prenom,
      sexe,
      telephone,
      type,
      ville,
    };

    fetch("https://api-dosispi.cleverapps.io/enseignants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    }).then(() => {alert("Enseignant ajouté ");
    location.href='/enseignants';
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
            <b>Entrer les informations d'un enseignant</b>
 </p>

          

          <div class="field">
          <br></br>
            <label class="label">Email Ubo</label>
            <div class="control">

              <input class="input" type="text" name="emailUbo" onInput={(e: any) => (this.emailUbo = e.target.value)} placeholder="Email UBO" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Mobile</label>
            <div class="control">

              <input class="input" type="text" name="mobile" onInput={(e: any) => (this.mobile = e.target.value)} placeholder="Mobile" /><br></br>
            </div></div>

          <div class="field">
            <label class="label">Nom</label>
            <div class="control">

              <input class="input" type="text" name="nom" onInput={(e: any) => (this.nom = e.target.value)} placeholder="Nom" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Pays</label>
            <div class="control">

              <input class="input" type="text" name="pays" onInput={(e: any) => (this.pays = e.target.value)} placeholder="Pays" /><br></br>
            </div></div>

          <div class="field">
            <label class="label">Prenom</label>
            <div class="control">

              <input class="input" type="text" name="prenom" onInput={(e: any) => (this.prenom = e.target.value)} placeholder="Prenom" /><br></br>
            </div></div>
            
          <div class="field">
            <label class="label">Sexe</label>
            <div class="control">
              <input class="input" type="text" name="sexe" onInput={(e: any) => (this.sexe = e.target.value)} placeholder="Sexe" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Telephone</label>
            <div class="control">
              <input class="input" type="text" name="telephone" onInput={(e: any) => (this.telephone = e.target.value)} placeholder="Telephone" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <input class="input" type="text" name="type" onInput={(e: any) => (this.type = e.target.value)} placeholder="Type" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Ville</label>
            <div class="control">
              <input class="input" type="text" name="ville" onInput={(e: any) => (this.ville = e.target.value)} placeholder="ville" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Email Perso</label>
            <div class="control">
              <input class="input" type="text" name="emailPerso" onInput={(e: any) => (this.emailPerso = e.target.value)} placeholder="emailPerso" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Adresse</label>
            <div class="control">
              <input class="input" type="text" name="adresse" onInput={(e: any) => (this.adresse = e.target.value)} placeholder="adresse" /><br></br>
            </div></div>
          <div class="field">
            <label class="label">Code postale</label>
            <div class="control">
              <input class="input" type="text" name="codePostal" onInput={(e: any) => (this.codePostal = e.target.value)} placeholder="code postale" /><br></br>
            </div></div>

<br></br><br></br>
          <div class="field is-grouped">
            <div class="control">
              
                <button onClick={this.postArticle.bind(this)} class="button is-primary is-large is-fullwidth">Submit</button>
              
            </div>
            <div class="control">
              <stencil-route-link url="/enseignants">
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