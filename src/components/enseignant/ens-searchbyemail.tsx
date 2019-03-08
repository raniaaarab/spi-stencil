import { Component, State } from '@stencil/core';

@Component({
    tag: 'ens-searchbyemail',
    styleUrl: 'ens-searchbyemail.scss'
})

export class EnseignantEmail {

@State() enseignants: any = "";

InputEmail: HTMLInputElement;
    
getens() {
    let url='http://api-dosispi.cleverapps.io/enseignants/emailUbo/'
        let email = this.InputEmail.value;
        return fetch(url+email)
        .then(response => response.json())
      .then(data => {
      this.enseignants = data;
        });
}

    render() {
        if(this.enseignants == ""){
        return (
        <div class="center">
        
        <label class="label">Entrer l'email de l'enseignant </label><br></br>
            <div class="field has-addons">
            <div class="control ">
              <input class="input is-large"ref={(el: HTMLInputElement) => this.InputEmail = el} type="text" placeholder="email de l'enseignant" />
            </div>
            <div class="control">
              <button class="button is-primary is-large" onClick={() => this.getens()}><span class="panel-icon">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span></button>
            </div>
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )}
    else{
        return (
        <div class="j">
        <div class="card">
                    
                    <div class="has-text-centered">
                        <p id="nom" ><b>{this.enseignants.nom} &nbsp; {this.enseignants.prenom}</b></p>
                        <span class="icon has-text-info">
                            <i class="far fa-address-card"></i>
                        </span>
                    </div>
                    <p ><br></br>
                        <div class="table is-striped  is-hoverable is-fullwidth has-text-centered is-centered">
                            <tr>
                                <th>Email perso</th>
                                <td>{this.enseignants.emailPerso}</td>
                            </tr>
                            <tr>
                                <th>Email UBO</th>
                                <td>{this.enseignants.emailUbo}</td>
                            </tr>
                            <tr>
                                <th>Mobile</th>
                                <td>{this.enseignants.mobile}</td>
                            </tr><tr>
                                <th>Telephone </th>
                                <td>{this.enseignants.telephone}</td>
                            </tr><tr>
                                <th>Type</th>
                                <td>{this.enseignants.type}</td>
                            </tr><tr>
                                <th>Pays</th>
                                <td>{this.enseignants.pays}</td>
                            </tr>
                            <tr>
                                <th>Sexe</th>
                                <td>{this.enseignants.sexe}</td>
                            </tr>
                            <tr>
                                <th>Ville</th>
                                <td>{this.enseignants.ville}</td>
                            </tr>
                            <tr>
                                <th>Code postale</th>
                                <td> &nbsp;&nbsp;{this.enseignants.codePostal}</td>
                            </tr>
                        </div>
                        
                    </p>
                
                    <footer class="card-footer">
                 
                  <div class="card-footer-item">
                    <span>
                    <a href="/enseignants/email"  >
                            <button class="button is-success is-large is-fullwidth">
                                Retourner
</button>
                        </a>
                    </span>
                    
                  </div>
                  
                </footer>


                    
                </div>

        </div>
        )}
    }
}