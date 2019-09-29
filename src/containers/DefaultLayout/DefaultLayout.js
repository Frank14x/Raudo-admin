import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';



import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import {
  AppHeader,
  AppSidebar,
  AppNavbarBrand,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

import logo from '../../assets/img/brand/logo.png';

import './Default.css';

 

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {


  

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (

      <div className="app ">


        <div className="app-body row">
               
          <AppSidebar className="" fixed display="sm">
             <AppNavbarBrand 
          full={{ src: logo, width: 100, height: 30, alt: 'Raudo-logo' }}
        />
          <div className="avatar-siderbar d-md-down-none ">
          <UncontrolledDropdown className="" nav direction="down">
            <DropdownToggle className="DropdownToggle-padding" nav>

              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar"  alt="avatar"/> Nombre Apellido
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          
          </div>
          <AppSidebarNav className="" navConfig={navigation} {...this.props} router={router}/>


       

          </AppSidebar>
        
      
  
          <main className="main">
           <AppHeader fixed className="">
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
         </Suspense>
        </AppHeader>
       
            <Container id="contenedor" fluid>
         
                <Switch>
                          

                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
            
            </Container>
          </main>
          
        </div>
       
      </div>
    );
  }
}

export default DefaultLayout;
