import React from "react";

export default function Footer(){
    return(
        
        <><div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
            <div className="row pt-5">
                <div className="col-lg-3 col-md-6 mb-5">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="m-0 mt-n3 display-4 text-primary">Braduca+</h1>
                    </a>
                    <p>Para que todos sejam expostos às mesmas oportunidades diminuindo assim a desigualdade social.</p>
                    <h5 className="font-weight-semi-bold text-white mb-2">Horário De Funcionamento:</h5>
                    <p className="mb-1">Seg – Sex, 8:00 – 18:00</p>
                    <p className="mb-0">Final de semana e feriado - Fechado</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Entrar Em Contato</h4>
                    <p><i className="fa fa-map-marker-alt text-primary mr-2"></i>Avenida Paulista, 5002, São Paulo, BR
                    </p>
                    <p><i className="fa fa-phone-alt text-primary mr-2"></i>+55 11 9 9999-9999</p>
                    <p><i className="fa fa-envelope text-primary mr-2"></i>sistemabraduca@braduca.net</p>
                    <div className="d-flex justify-content-start mt-4">
                        <a className="btn btn-light btn-social mr-2" href="https://www.twitter.com"><i
                            className="fab fa-twitter"></i></a>
                        <a className="btn btn-light btn-social mr-2" href="https://www.facebook.com"><i
                            className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-light btn-social mr-2" href="https://linkedin.com"><i
                            className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-light btn-social" href="https://www.instagram.com"><i
                            className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Links Rápidos</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <div className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>Home</div>
                        <div className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>Sobre Nós</div>
                        <div className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>Metodologia</div>
                        <div className="text-white mb-2" ><i className="fa fa-angle-right mr-2"></i>Equipe</div>
                        <div className="text-white" ><i className="fa fa-angle-right mr-2"></i>Contato</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-semi-bold text-primary mb-4">Newsletter</h4>
                    <p>Inscreva-se na nossa Newsletter para ficar sabendo de tudo que estamos trazendo de novidade para
                        nossa plataforma ;</p>
                    <div className="w-100">
                        <div className="input-group">
                            <input type="text" className="form-control border-0" style={{padding: "25px;"}} placeholder="Seu Email" />
                            <div className="input-group-append">
                                <button className="btn btn-primary px-4">Quero Me Increver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
            style={{border :" #3E3E4E "}}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <div className="m-0 text-white">&copy; <p >Braduca+</p>. Todos os direitos reservados.
                        </div>
                    </div>
                   
                </div>
            </div></>
    )
}