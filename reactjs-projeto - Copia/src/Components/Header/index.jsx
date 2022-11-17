import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/logo.png";
  export default function Header(){
    return(
    <div className="container-fluid">
        <div className="row">
    
            <div className="col-lg-12">
                <div className="row bg-secondary d-none d-lg-flex">
                    <div className="col-lg-7 text-left text-white">
                        <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-2">
                            <i className="fa fa-envelope text-primary mr-2"></i>
                            <small>sistemabraduca@braduca.net</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i className="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+011 9 9999-9999</small>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right">
                        <div className="d-inline-flex align-items-center pr-2">
                            <a className="text-primary p-2" href="https://www.facebook.com/
                            ">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-primary p-2" href="https://twitter.com">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-primary p-2" href="https://br.linkedin.com">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-primary p-2" href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-primary p-2" href="https://www.youtube.com">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-expand-lg bg-white navbar-light p-0">
                    <div className="navbar-brand d-block d-lg-none">
                        <div className="m-0 display-4 text"></div>
                    </div>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <img src={Logo} width="150" height="150"alt= " logo"/>
                    </div>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/QuemSomos" className="nav-item nav-link active">QuemSomos</Link>
                           <Link to="/Metodologia" className="nav-item nav-link">Metodologia</Link>
                            <Link to="/Contato" className="nav-item nav-link">Contato</Link>
                           
                            
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
        
    
    
    )
  }
    
        
    