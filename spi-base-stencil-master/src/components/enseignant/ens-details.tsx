import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'ens-details',
    styleUrl: 'ens-details.scss',
    shadow: true
})
export class EnsDetails {

    @Prop() match: MatchResults;
    @State() enseignants: any;
    @Prop() back: RouterHistory;

    goBack() {
        this.back.goBack();
    }

    deleteEnseignant(ens) {



        fetch('https://api-dosispi.cleverapps.io/enseignants/', {
            method: "DELETE",
            body: JSON.stringify(ens),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(() => {
            alert("Deleted !!");
            location.href = '/enseignants';
        }).catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);


        })

            .then(function (data) {
                console.log(JSON.stringify(data));
            });
    }






    componentWillLoad() {

        //let i = this.match.params.noEnseignant;
        return fetch('https://api-dosispi.cleverapps.io/enseignants/' + this.match.params.noEnseignant)
            .then(response => response.json())
            .then(data => {
                this.enseignants = data;

                console.log(this.enseignants);
            });

    }


    render() {

        return (


            <div class="h">
                <br></br>
                <div class="container">
                <div class="r">
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
                            <span class="panel-icon">
                                <i class="fas fa-plus-square" aria-hidden="true"></i>
                            </span>
                        </p>
                    
                        <footer class="card-footer">
                      <div class="card-footer-item">
                        <span>
                        <stencil-route-link url="/enseignants" onClick={() => this.deleteEnseignant(this.enseignants)} >
                                <button class="button is-danger is-large is-fullwidth">
                                    Supprimer
</button>

                            </stencil-route-link>
                        
                        </span>
                        
                      </div>
                      <div class="card-footer-item">
                        <span>
                        <stencil-route-link url="/enseignants"  >
                                <button class="button is-success is-large is-fullwidth">
                                    Retourner
</button>
                            </stencil-route-link>
                        </span>
                        
                      </div>
                      
                    </footer>


                        
                    </div>

                    <br></br>


                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>

        ); }</div>

         ) }






}