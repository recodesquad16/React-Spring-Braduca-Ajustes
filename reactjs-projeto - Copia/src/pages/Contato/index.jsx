import React from "react";

export default function Contato() {
    return (
        <><div className="container-fluid bg-primary py-5 mb-5">
            <div className="col-md-6 text-center text-md-left">
                <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">ENTRE EM CONTATO</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
            </div>
        </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-end mb-4">
                        <div className="col-lg-6">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Contato</h6>
                            <h1 className="section-title mb-3">Converse com a Braduca - Sistema de Educação</h1>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="font-weight-normal text-muted mb-3">Envie uma mensagem com sua dúvida ou sugestões e entraremos em contato</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-6 control-group">
                                            <input type="text" className="form-control p-4" id="name" placeholder="Seu Nome"
                                                required="required" data-validation-required-message="Por favor digite seu nome" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="col-sm-6 control-group">
                                            <input type="email" className="form-control p-4" id="email" placeholder="Seu e-mail"
                                                required="required"
                                                data-validation-required-message="Por favor digite seu email" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="subject" placeholder="Assunto"
                                            required="required" data-validation-required-message="Por favor digite o assunto" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control p-4" rows="6" id="message" placeholder="Escreva sua mensagem"
                                            required="required"
                                            data-validation-required-message="Por favor escreva sua mensagem"></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3 px-5" type="submit"
                                            id="sendMessageButton">Enviar Mensagem</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5" style={{minheight:" 400px;"}}>
                            <div className="position-relative h-100 rounded overflow-hidden">
                                <span style={{width: "100%; height: 100%; object-fit: cover;"}}
                                    src="./minhas-imagens/vetor/contato2.png"
                                    frameborder="0" className="border:0;" allowfullscreen="" aria-hidden="false"
                                    tabindex="0"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>



    )
}