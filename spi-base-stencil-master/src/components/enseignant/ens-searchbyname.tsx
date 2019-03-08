import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'ens-searchbyname',
    styleUrl: 'ens-searchbyname.scss'


})



export class EnsSearchbyname {

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

    @Prop() match: MatchResults;
    @State() enseignants: any;
    @Prop() back: RouterHistory;

    searchbyname(e) {
        e.preventDefault();
        console.log("!");
        fetch('https://api-dosispi.cleverapps.io/enseignants/nom/' + this.nom, {

            method: "GET",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
        })

            .then(response => response.json())
            .then(data => {
                this.enseignants = data;

                console.log(this.enseignants);
            });
    }




    render() {
        if (this.enseignants == null) {
            return (
               

                    <div class="center">
                        <br></br>
                        <label class="label">Entrer le nom de l'enseignant </label>
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input is-large" type="text" name="nom" onInput={(e: any) => (this.nom = e.target.value)} placeholder="nom de l'enseignant" /><br></br>
                            </div>

                            <div class="control">

                                <button onClick={this.searchbyname.bind(this)} class="button is-primary is-large"><span class="panel-icon">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span></button>

                            </div>
                        </div>
                        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                    </div>

            



            );
        }
        else {

            return (
               


                <div class="center">
                <div class="card">
                            
                            <div class="has-text-centered">
                                <p id="nom" ><b><span class="icon has-text-info">
                                    <i class="far fa-address-card"></i>
                                </span> &nbsp;{this.enseignants[0].nom} &nbsp; {this.enseignants[0].prenom}</b></p>
                                
                            </div>
                            <p ><br></br>
                                <div class="table is-striped  is-hoverable is-fullwidth has-text-centered is-centered">
                                    <tr>
                                        <th>Email perso</th>
                                        <td>{this.enseignants[0].emailPerso}</td>
                                    </tr>
                                    <tr>
                                        <th>Email UBO</th>
                                        <td>{this.enseignants[0].emailUbo}</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile</th>
                                        <td>{this.enseignants[0].mobile}</td>
                                    </tr><tr>
                                        <th>Telephone </th>
                                        <td>{this.enseignants[0].telephone}</td>
                                    </tr><tr>
                                        <th>Type</th>
                                        <td>{this.enseignants[0].type}</td>
                                    </tr><tr>
                                        <th>Pays</th>
                                        <td>{this.enseignants[0].pays}</td>
                                    </tr>
                                    <tr>
                                        <th>Sexe</th>
                                        <td>{this.enseignants[0].sexe}</td>
                                    </tr>
                                    <tr>
                                        <th>Ville</th>
                                        <td>{this.enseignants[0].ville}</td>
                                    </tr>
                                    <tr>
                                        <th>Code postale</th>
                                        <td> &nbsp;&nbsp;{this.enseignants[0].codePostal}</td>
                                    </tr>
                                </div>
                                
                            </p>
                        
                            <footer class="card-footer">
                         
                          <div class="card-footer-item">
                            <span>
                            <a href="/enseignants/nom"  >
                                    <button class="button is-success is-large is-fullwidth">
                                        Retourner
        </button>
                                </a>
                            </span>
                            
                          </div>
                          
                        </footer>
        
        
                            
                        </div>
                        <br></br>
        
                </div>
                )}
    }

}