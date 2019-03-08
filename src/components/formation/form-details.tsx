import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'form-details',
    styleUrl: 'form-details.scss',
    shadow: true
})
export class FormDetails {

    @Prop() match: MatchResults;
    @State() formations: any;
    @Prop() back: RouterHistory;

   

    deleteFormation(ens) {



        fetch('https://api-dosispi.cleverapps.io/formations/', {
            method: "DELETE",
            body: JSON.stringify(ens),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(() => {
            alert("Deleted !!");
            location.href = '/formations';
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
        return fetch('https://api-dosispi.cleverapps.io/formations/' + this.match.params.codeFormation)
            .then(response => response.json())
            .then(data => {
                this.formations = data;

                console.log(this.formations);
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
                            <p id="nom" ><b>{this.formations.nomFormation} &nbsp; {this.formations.codeFormation}</b></p>
                            <span class="icon has-text-info">
                                <i class="far fa-address-card"></i>
                            </span>
                        </div>
                        <p ><br></br>
                            <div class="table is-striped  is-hoverable is-fullwidth has-text-centered is-centered">
                                <tr>
                                    <th>Debut Accreditation</th>
                                    <td>{this.formations.debutAccreditation}</td>
                                </tr>
                                <tr>
                                    <th>Diplome</th>
                                    <td>{this.formations.diplome}</td>
                                </tr>
                                <tr>
                                    <th>Double diplome</th>
                                    <td>{this.formations.doubleDiplome}</td>
                                </tr><tr>
                                    <th>Fin accreditation</th>
                                    <td>{this.formations.finAccreditation}</td>
                                </tr><tr>
                                    <th>Type</th>
                                    <td>{this.formations.noAnnee}</td>
                                
                                </tr>
                            </div>
                            <span class="panel-icon">
                                <i class="fas fa-plus-square" aria-hidden="true"></i>
                            </span>
                        </p>
                    
                        <footer class="card-footer">
                      <div class="card-footer-item">
                        <span>
                        <stencil-route-link url="/formations" onClick={() => this.deleteFormation(this.formations)} >
                                <button class="button is-danger is-large is-fullwidth">
                                    Supprimer
</button>

                            </stencil-route-link>
                        
                        </span>
                        
                      </div>
                      <div class="card-footer-item">
                        <span>
                        <stencil-route-link url="/formations"  >
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