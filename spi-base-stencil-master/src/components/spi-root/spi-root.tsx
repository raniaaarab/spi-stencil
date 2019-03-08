import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
            
              <stencil-route url="/enseignants" component="ens-list" exact={true} />
              <stencil-route url='/enseignants/detail/:noEnseignant' component='ens-details' exact={true}/>
              <stencil-route url='/enseignants/nom' component='ens-searchbyname' exact={true}/>
              <stencil-route url='/enseignants/email' component='ens-searchbyemail' exact={true}/>
              <stencil-route url='/enseignants/nom/:nom' component='ens-searchbyname' exact={true}/>
              <stencil-route url='/enseignants/add' component='ens-add' exact={true}/>

              <stencil-route url="/formations" component="form-list" exact={true} />
              <stencil-route url='/formations/detail/:codeFormation' component='form-details' exact={true} />
              <stencil-route url='/formations/add' component='form-add' exact={true}/>
              <stencil-route url='/formations/nom' component='form-searchbyname' exact={true}/>


            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
