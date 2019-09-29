import React, { Component } from 'react';
import './marcas.css';
import {

  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
 
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
class marcaForms extends Component {

  render() {
    return (
      <div className="">
        <Row>
          <Col xs="12">
              <Card>
                  <CardBody>
                    <Form className="form-horizontal">                  
                      <FormGroup>
                        <div className="controls">
                           <Label htmlFor="appendedInput">MARCA</Label>
                            <Input id="MarcaName" size="16" type="text" placeholder="Nombre de la marca" />
                        </div>
                     </FormGroup>
                    <FormGroup className="row">
                          <div className="col-6">
                            <Label htmlFor="text-input">Descripcion</Label>
                            <Input type="textarea" name="marcaDescripcion" id="textarea-input" rows="6"
                                   placeholder="Breve descripcion de la marca..." />
                          </div>
                      
                          <div className="col-2"></div>
                      
                          <div className=" container col-4">
                              <Label>Marca Activa</Label> 
                            <div className= "AppSwitch "> 
                              <AppSwitch className={'mx-1'} variant={'pill'} color={'success'} checked />                     
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup className="row">                     
                        <div className="logo container col-6" >
                          <Label for="logo">Logo</Label>
                          <div className="noimg container">
                            <img id="logo" src={'../../assets/img/no imagen.gif'} alt=""/>
                          </div>  
                          <Input type="file" name="file" id="logo" />
                        </div>
                      
                        <div className="banner container col-6">    
                            <Label for="banner">Banner </Label>  
                          <div className="noimg container">
                             <img id="banner" src={'../../assets/img/no imagen.gif'} alt="" />
                          </div>
                             <Input color="secondary" type="file" name="file" id="banner" />
                       </div>
                      </FormGroup>

                    
                      <div className=" row form-actions ">
                        <div className="col-2"></div>
                        <div className="col-4">
                          <Button  color="secondary">Cancelar</Button>   
                        </div>
                        
                      <div className="col-4">
                        <Button type="submit" color="primary">Guardar</Button>
                      </div>
                    
                    </div>
                    </Form>
                  </CardBody>
                
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}



export default marcaForms;
