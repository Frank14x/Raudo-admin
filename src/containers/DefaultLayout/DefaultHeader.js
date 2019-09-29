import React, { Component } from 'react';
import * as router from 'react-router-dom';

import { Badge, NavLink,Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import {   AppSidebarToggler, AppBreadcrumb2 as AppBreadcrumb, } from '@coreui/react';

import './Default.css';

import routes from '../../routes';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
    
         <Nav className="d-md-down-none" navbar>
         <NavItem className="px-3">
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <AppSidebarToggler className="d-md-down-none" display="lg" />
          </NavItem>
        
          <NavItem className="px-3">
              <AppBreadcrumb appRoutes={routes} router={router}/>
          </NavItem>

        
          </Nav>

          <Nav className="ml-auto inline" navbar>
          
           <NavItem className="px-3 d-md-down-none">
                <form class="form-inline my-2 my-lg-0">
                <input class=" form-control mr-sm-2 search-header" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn" type="submit"> <i className="icon-magnifier icons font-2xl"></i></button>
                </form>
             </NavItem>
          
            <NavItem className=" px-3 d-md-down-none">
              <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">*</Badge></NavLink>
            </NavItem> 
            
            <NavItem className=" px-3 d-md-down-none">
              <NavLink to="#" className="nav-link"><i className="icon-user"></i></NavLink>
            </NavItem>

           

         
            
            </Nav>
       
     
        
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
