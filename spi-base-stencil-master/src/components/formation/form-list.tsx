import { Component, State, Prop } from '@stencil/core';


import { RouterHistory, MatchResults } from '@stencil/router';
import { Formation } from '../../global/formation';


@Component({
  tag: 'form-list',
  styleUrl: 'form-list.scss'
})
export class FormList {


  @State() formations: Formation[];
  @Prop() back: RouterHistory;
  @Prop() match: MatchResults;


  componentWillLoad() {
    return fetch('https://api-dosispi.cleverapps.io/formations')
      .then(response => response.json())
      .then(data => {
        this.formations = data;
        console.log(this.formations);
      });
  }

  render() {
    return (
      <div class="container is-fluid">
        <div class="columns is-multiline">
          {this.formations.map(
            (frm) =>
              <div class="column is-one-quarter">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                    <br></br>
                      <img  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=841&q=80" alt="Placeholder image" />
                    </figure>
                    </div>
                    <div class="media-content is-centered">
                    <br></br>
                      <p  id="nom" ><b>{frm.nomFormation} </b></p>
                      <p  id="email"> &nbsp;{frm.codeFormation}
                      <br></br>
                      </p>
                    
<br></br>
                    <footer class="card-footer">
                      <div class="card-footer-item">
                        <span>
                          <a href={`/formations/detail/${frm.codeFormation}`}><b>Détails</b></a>
                        </span>
                        
                      </div>
                      
                    </footer>
                  </div>
                </div>

              </div>
          )}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br></br><br></br><br></br><br></br><br></br>

      </div>



    );

  }
}












