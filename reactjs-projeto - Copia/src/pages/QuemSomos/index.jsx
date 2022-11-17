import React from "react";

export default function QuemSomos() {

    return (

        <><div className="container-fluid bg-primary py-5 mb-5">
            <div className="col-md-6 text-center text-md-left">
                <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">QUEM SOMOS???</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
            </div>
        </div>
            <div className="container-fluid py-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div
                                className="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
                                <i className="fa fa-5x fa-award text-primary mb-4"></i>
                                <h1 className="display-2 text-white mb-2" data-toggle="counter-up">100

                                </h1>
                                <h1 className="display-2 text-white mb-2">% </h1>
                                <h2 className="text-white m-0">Pensado no Aluno </h2>
                            </div>
                        </div>
                        <div className="col-lg-7 pt-5 pb-lg-5">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">SOBRE NÓS</h6>
                            <h1 className="mb-4 section-title">Conheça Nosso Projeto</h1>
                            <h5 className="text-muted font-weight-normal mb-3">Somos uma plataforma com soluções educacionais com
                                sistemas de ensino,
                                soluções de ensino complementar,além de uma plataforma de aprendizado digital,
                                que permite nos apresentarmos e nos oferecemos como o parceiro integral da escola.
                                Nosso compromisso em oferecer soluções de aprendizagem de alta qualidade,
                                a responsabilidade por desenvolver este conjunto de soluções educacionais pertence
                                a um time de profissionais que compartilha o compromisso de formar gerações brasileiros
                                cada vez melhor.</h5>
                            <p>
                                Nosso foco é fazer que os jovens tenham a chance de desenvolver habilidades que os farão
                                compreender melhor o mundo.
                            </p>
                        </div>
                    </div>
                </div>
            </div></>


    )
}