import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
    tag: 'form-searchbyname',
    styleUrl: 'form-searchbyname.scss'


})



export class FormSearchbyname {

    codeFormation: string;
  debutAccreditation: string;
  diplome: string;
  doubleDiplome: string;
  finAccreditation: string;
  n0Annee: number;
  nomFormation: string;


    @Prop() match: MatchResults;
    @State() formations: any;
    @Prop() back: RouterHistory;

    searchbyname(e) {
        e.preventDefault();
        console.log("!");
        fetch('https://api-dosispi.cleverapps.io/formations/nom/' + this.nomFormation, {

            method: "GET",
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json"
            },
        })

            .then(response => response.json())
            .then(data => {
                this.formations= data;

                console.log(this.formations);
            });
    }




    render() {
        if (this.formations == null) {
            return (
               

                    <div class="center">
                        <br></br>
                        <label class="label">Entrer le nom de la formation</label>
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input is-large" type="text" name="nom" onInput={(e: any) => (this.nomFormation = e.target.value)} placeholder="nom de formation" /><br></br>
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
                                <p id="nom" ><b>{this.formations[0].nomFormation} &nbsp; {this.formations[0].codeFormation}</b></p>
                                
                            </div>
                            <p ><br></br>
                                <div class="table is-striped  is-hoverable is-fullwidth has-text-centered is-centered">
                                    <tr>
                                        <th>Debut accreditation</th>
                                        <td>{this.formations[0].debutAccreditation}</td>
                                    </tr>
                                    <tr>
                                        <th>Diplome</th>
                                        <td>{this.formations[0].diplome}</td>
                                    </tr>
                                    <tr>
                                        <th>Double diplome</th>
                                        <td>{this.formations[0].doubleDiplome}</td>
                                    </tr><tr>
                                        <th>Fin accreditation </th>
                                        <td>{this.formations[0].finAccreditation}</td>
                                    </tr><tr>
                                        <th>Num annee</th>
                                        <td>{this.formations[0].n0Annee}</td>
                                    </tr>
                                        
                                </div>
                                
                            </p>
                        
                            <footer class="card-footer">
                         
                          <div class="card-footer-item">
                            <span>
                            <a href="/formations/nom"  >
                                    <button class="button is-success is-large is-fullwidth">
                                        Retourner
        </button>
                                </a>
                            </span>
                            
                          </div>
                          
                        </footer>
        
        
                            
                        </div>
                        <br></br> <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
        
        
                </div>
                )}
    }

}