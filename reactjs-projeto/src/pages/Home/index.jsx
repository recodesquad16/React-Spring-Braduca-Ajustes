import React from "react";


import Carousel1 from "../../assets/img/carousel1.png";
import Carousel2 from "../../assets/img/carousel2.png";
import Carousel3 from "../../assets/img/carousel3.png";
import Metodo12 from "../../assets/img/metodo12.png";
import Metodo13 from "../../assets/img/metodo13.png";
import Metodo10 from "../../assets/img/metodo10.png";
import Metodo9 from "../../assets/img/metodo9.png";
import Metodo7 from "../../assets/img/metodo7.png";
import Metodo8 from "../../assets/img/metodo8.png";
import FotoBete from "../../assets/img/fotobete.jpeg";
import FotoLeila from "../../assets/img/fotoleila.jpg";
import FotoThiago from "../../assets/img/fotothiago.jpg";
import FotoLu from "../../assets/img/fotolu.jpg";

export default function Home(){

    
    return(
        <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div className ="carousel-inner">
            <div className="carousel-item active">
                <img className="img-fluid" src={Carousel1} alt="estudantes" />
                <div className="carousel-caption d-flex align-items-center justify-content-center">
                    <div className="p-5" style={{width:" 100%;", max: "900px;"}}>
                        <h5 className="text-primary text-uppercase mb-md-3">Sistema de Educação Continuada</h5>
                        <h1 className="display-3 text-white mb-md-4">Uma Imersão no Conhecimento Eficaz</h1>
                    </div>
                </div>
            </div>

            <div className="carousel-item">
                <img className="img-fluid" src={Carousel2} alt="livros" />
                <div className="carousel-caption d-flex align-items-center justify-content-center">
                    <div className="p-5" style={{width: "100%;", max:" 900px;"}}>
                        <h5 className="text-primary text-uppercase mb-md-3">Sistema de Educação Continuada</h5>
                        <h1 className="display-3 text-white mb-md-4">Uma Imersão no Conhecimento Eficaz</h1>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="img-fluid" src={Carousel3} alt="pessoa" />
                <div className="carousel-caption d-flex align-items-center justify-content-center">
                    <div className="p-5" style={{width:" 100%;", max:" 900px;"}}>
                        <h5 className="text-primary text-uppercase mb-md-3">Sistema de Educação Continuada</h5>
                        <h1 className="display-3 text-white mb-md-4">Uma Imersão no Conhecimento Eficaz</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>


            <div className="container-fluid bg-primary py-5 mb-5">
                <div className="col-md-6 text-center text-md-left">
                    <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">MERGULHE NESSA EXPERIÊNCIA</h1>
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
                                <h1 className="display-2 text-white mb-2" data-toggle="counter-up">100</h1>
                                <h1 className="display-2 text-white mb-2">% </h1>
                                <h2 className="text-white m-0">Pensado no Aluno </h2>
                            </div>
                        </div>
                        <div className="col-lg-7 pt-5 pb-lg-5">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">SOBRE NÓS</h6>
                            <h1 className="mb-4 section-title">Conheça Nosso Projeto</h1>
                            <h5 className="text-muted font-weight-normal mb-3">Somos uma plataforma que visa solucionar o grande
                                número de evasão escolar dos jovens de São Paulo,
                                em parceria com a institução de ensino que o aluno está matriculado.
                                Nosso compromisso é oferecer soluções de aprendizagem de alta qualidade e de maneira
                                alternativa.
                                A responsabilidade por desenvolver este conjunto de ideias e soluções educacionais pertence
                                a um time de profissionais apaixonados pela tecnologia e que compartilha o compromisso de formar
                                gerações de brasileiros
                                cada vez melhor.</h5>
                            <p>
                                Nosso foco é fazer que os jovens tenham a chance de desenvolver habilidades que os farão
                                compreender melhor o mundo.
                            </p>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-portfolio py-5">
                <div className="container py-5">
                    <div className="row m-0 portfolio-container">
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <div className="portfolio-img">
                                    <img className="img-fluid w-100" src={Metodo12} alt="" />
                                </div>
                                <div className="portfolio-text bg-primary">
                                    <h4 className="font-weight-bold mb-4">Foco no Jovem Como Futuro Cidadão</h4>
                                    <div className="d-flex align-items-center justify-content-center">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <div className="portfolio-img">
                                    <img className="img-fluid w-100" src={Metodo13} alt="" />
                                </div>
                                <div className="portfolio-text bg-primary">
                                    <h4 className="font-weight-bold mb-4">Profissionais Apaixonados Por Ensinar</h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <div className="portfolio-img">
                                    <img className="img-fluid w-100" src={Metodo10} alt="" />
                                </div>
                                <div className="portfolio-text bg-primary">
                                    <h4 className="font-weight-bold mb-4">Maior Interatividade e Conectividade</h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <div className="portfolio-img">
                                    <img className="img-fluid w-100" src={Metodo9} alt="" />
                                </div>
                                <div className="portfolio-text bg-primary">
                                    <h4 className="font-weight-bold mb-4">Ensino a Distância Pertinho de Você</h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <div className="portfolio-img">
                                    <img className="img-fluid w-100" src={Metodo7} alt="" />
                                </div>
                                <div className="portfolio-text bg-primary">
                                    <h4 className="font-weight-bold mb-4">Autonomia de Tempo, Lugar e Métodologia Diferenciada</h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
                            <div className="position-relative overflow-hidden">
                                <div className="portfolio-img">
                                    <img className="img-fluid w-100" src={Metodo8} alt="" />
                                </div>
                                <div className="portfolio-text bg-primary">
                                    <h4 className="font-weight-bold mb-4">Acompanhamento Pedagógico </h4>
                                    <div className="d-flex align-items-center justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div><div className="container-fluid pb-5 contact-info">
                <div className="row">
                    <div className="col-lg-4 p-0">
                        <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
                        </div>
                    </div>
                    <div className="col-lg-4p-0">
                        <div className="contact-info-item d-flex align-items-center justify-content-center bg-secondary text-white py-4 py-lg-0">
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid bg-testimonial py-3">
                    <div className="container bg-py-5">
                        <div className="row">
                            <div className="col-lg-7 pt-lg-5 pb-5">
                                <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Equipe</h6>
                                <h1 className="section-title text-white mb-5">Conheça Nossos Colaboradores</h1>
                                <div className="owl-carousel testimonial-carousel position-relative">
                                    <div className="d-flex flex-column text-white">
                                        <div className="d-flex align-items-center mb-3">
                                            <img className="img-fluid" src={FotoBete} alt="" />
                                            <div className="ml-3">
                                                <h5 className="text-primary">Elisabete</h5>
                                                <i>Desenvolvedora Full stack</i>
                                            </div>
                                        </div>
                                        <p>Conheci a programação através de uma reportagem na TV, gostei e fui procurar sobre a área
                                            pois me interessou bastante. Na época eu estava a procura de emprego. Sempre quis
                                            escolher uma profissão mas não sabia qual e a partir daquele momento eu disse: "É essa
                                            área que eu quero pra mim". Muito em breve serei Desenvolvedora Full Stack .</p>
                                    </div>

                                    <div className="d-flex flex-column text-white">
                                        <div className="d-flex align-items-center mb-3">
                                            <img className="img-fluid" src={FotoLeila} alt="" />
                                            <div className="ml-3">
                                                <h5 className="text-primary">Leila</h5>
                                                <i>Programadora Full stack</i>
                                            </div>
                                        </div>
                                        <p>Meu nome é Leila, tenho 37 anos e a programação entrou na minha vida como uma surpresa
                                            boa e desafiadora.
                                            Sou fisioterapeuta há 10 anos e casada com uma pessoa com défict de locomoção e o mundo
                                            virtual é a unica maneira dessas pessoas interagirem com o meio externo.
                                            Percebi que a programação está em muitos lugares e pode alcançar inumeros outros, afim
                                            de facilitar e auxiliar a vida das pessoas, tornando nossa jornada mais leve.
                                            Meu desejo é poder contrubuir e somar na vida das pessoas, aprendendo a cada
                                            experiência.
                                        </p>
                                    </div>

                                    <div className="d-flex flex-column text-white">
                                        <div className="d-flex align-items-center mb-3">
                                            <img className="img-fluid" src={FotoThiago} alt="" />
                                            <div className="ml-3">
                                                <h5 className="text-primary">Thiago</h5>
                                                <i>Programador Fullstack</i>
                                            </div>
                                        </div>
                                        <p>Olá, me chamo Thiago. Conheci a programação através do filme “A rede social”. A ideia de
                                            criar algo a partir do nada com apenas algumas linhas de código e poder impactar vidas,
                                            me fascina! Vivo em busca de inovação, impacto positivo e uma vida saudável.</p>
                                    </div>
                                    <div className="d-flex flex-column text-white">
                                        <div className="d-flex align-items-center mb-3">
                                            <img className="img-fluid" src={FotoLu} alt="" />
                                            <div className="ml-3">
                                                <h5 className="text-primary">Luciene</h5>
                                                <i>Engenheira Eletrica</i>
                                            </div>
                                        </div>
                                        <p>Meu nome é Luciene, tenho 39 anos estava em busca de uma transição de carreira sou formada em engenharia elétrica e  sou apaixonado por educação continuada, tecnologia e programação.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    )
}

    
       
                
                
            

