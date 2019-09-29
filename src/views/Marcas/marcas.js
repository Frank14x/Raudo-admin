import React, { Component } from 'react';
import {  Link  } from 'react-router-dom';
import {  Button,Badge, Card, CardBody, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

import './marcas.css';

import marcasData from './marcasData'


function MarcasRow(props) 
{

  const marca = props.marca
  const marcaLink = `/marcas/${marca.id}`

  const getBadge = (status) =>{
    return status === ' Activo ' ? 'success' :
           status === 'Inactivo' ? 'danger' :
           'primary'
  }
   return (
    <tr key={marca.id.toString()}>
      <th scope="row">{marca.id}</th>
      <td>{marca.logo}</td>
      <td>{marca.Nombre}</td>
      <td>{marca.Descripcion}</td>
      <td>{marca.Tiendas}</td>
      <td><Link to={marcaLink}><Badge color={getBadge(marca.Status)}>{marca.Status}</Badge></Link></td>          
      <td>
          <Row>
              <div id="Edit" > 
                 <Link to={marcaLink}> <i  className={marca.Edit} ></i></Link>
              </div>
              <div id="Delete">
                <i className={marca.Delete}></i>
              </div>
          </Row>
        </td>
    </tr>
  )
}

class Marcas extends Component {

  render() {
      const marcaList = marcasData.filter((marca)=>marca.id)
      const marcaFormslink='/marcas/new'
    return (
      
      <div className="animated fadeIn">
        <Card>
          <Col>
            <Card>
              <CardBody>

              <div className="">
                     <Link to={marcaFormslink} > <Button className=" Btn-marca btn float-right"type="button" color="primary">Nueva Marca  </Button></Link>
              </div>


                <Table responsive striped>
                  <thead>
                    <tr>
                     <th><i className=" fa fa-square-o-justify"></i></th>
                      
                      <th>Logo </th>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Tiendas</th>
                      <th>Estatus</th>
                      <th>Accion</th>
                    </tr>
                  </thead>

                  <tbody>
                    {marcaList.map((marca, index) =>
                      <MarcasRow key={index} marca={marca} />
                      )}
                 
                  </tbody>

                </Table>
               <Pagination>
                  <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Card>
      </div>
     );
  }
}

export default Marcas;
