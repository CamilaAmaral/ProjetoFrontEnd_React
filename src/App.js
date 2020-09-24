import React, {Component} from 'react';
import './App.css';
import './estilo.css';

class App extends Component{
  render(){
    return (

      <div>
        <header class="topo" id="cabecalho">
          <div class="container">
              <div class="logo">
                <a href="index.html"><img src='/imagens/logo.jpg' alt="Logotipo Climb"/></a>
              </div>

              <div class="menu">
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="pagina02.html">Quem somos</a></li>
                    <li><a href="index.html">Hospedagem</a></li>
                    <li><a href="index.html">Contatos</a></li>
                </ul>
              </div>
          </div>
        </header>


        <div class="pagina-titulo">
          <h1>Teresópolis Adventure</h1>
        </div>

        <div class="imagem-principal">
          <img src= '/imagens/principal.jpg' width="100%" alt="Imagem panorâmica Serra dos Órgãos"/>
        </div>

        <div class="pagina-descricao">
          <div class="container">
            <div class="titulo-modulo">
                <h2>Você sabia que Teresópolis é a Capital Nacional do Montanhismo?</h2>
            </div>

            <div class="pagina-descricao-texto">
                <p>Teresópolis é a cidade mais alta do estado do Rio de Janeiro, a 871 metros e ostenta as mais baixas
                    temperaturas entre os municípios fluminense.<br>
                    </br>Para os aventureiros, a principal atração é o Parque Nacional da Serra dos Órgãos, que abriga o
                    Pico Dedo de Deus – a cidade tem a melhor estrutura para quem visita o parque e não quer gastar
                    muito com camping, albergue e guias. Os adeptos de caminhadas pela mata se esbaldam na famosa
                    travessia Petrópolis-Teresópolis, que tem 30 km, é feita normalmente em 3 dias e passa por
                    cachoeiras e piscinas naturais.
                  </p>
            </div>
          </div>
        </div>

        <div class="pagina-descricao">
         <div class="container">
            <div class="titulo-modulo">
                <h2>Escolha seu passeio: </h2>
            </div>

            <div class="imgs">

                <a href="teste.html">
                    <figure>
                        <img class="img" src='/imagens/pedra-tartaruga.jpg' alt="Foto: Dedo de Deus"/>
                        <figcaption>Pedra da Tartaruga</figcaption>
                    </figure>
                </a>

                <a href="teste.html">
                    <figure>
                        <img class="img" src='/imagens/Torres.jpg' alt="Foto: Dedo de Deus"/>
                        <figcaption>Torres de Bonsucesso</figcaption>
                    </figure>
                </a>

                <a href="teste.html">
                    <figure>
                        <img class="img" src="imagens/cahoeira2.jpg" alt="Foto: Dedo de Deus"/>
                        <figcaption>Cachoeira da Macumba</figcaption>
                    </figure>
                </a>

                <a href="teste.html">
                    <figure>
                        <img class="img" src="imagens/Dedo.jpg" alt="Foto: Dedo de Deus"/>
                        <figcaption>Dedo de Deus</figcaption>
                    </figure>
                </a>

                <a href="teste.html">
                    <figure>
                        <img class="img" src="imagens/escalavrado1.jpg" alt="Foto: Dedo de Deus"/>
                        <figcaption>Escalavrado</figcaption>
                    </figure>
                </a>

                <a href="teste.html">
                    <figure>
                        <img class="img" src="imagens/sino.jpg" alt="Foto: Dedo de Deus"/>
                        <figcaption>Pedra do Sino</figcaption>
                    </figure>
                </a>

            </div>
          </div>

          <div class="container-fluid">

        <footer class="row">
            <div class="col-md-1 ">
                <img class="center-block" class="logo" src="imagens/nv_logo.png" />
            </div>
            <div class="col-md-4 col-md-offset-3">
                <div class="orgao">
                    <img class="center-block" src="imagens/uiaa1.png" alt=""/>
                    <p>&copy; 2020. Teresopolis Adventure</p>
                </div>
            </div>
           
            <div class="col-md-3 col-md-offset-1">
                <div class="redes">
                    {/* <a href="https://www.google.com.br/maps?q= Varzea nº211 Centro, Teresóplis - RJ" target=_blank><span
                            class="fa fa-map-marker"></span></a>
                    <a href="https://www.linkedin.com" target=_blank> <span class="fa fa-linkedin"></span></a>
                    <a href="https://www.instagram.com" target=_blank><span class="fa fa-instagram"></span></a>
                    <a href="https://www.facebook.com" target=_blank rel="fa fa-facebook-f"><span */}
                            {/* class="fa fa-facebook"></span></a> */}
                </div>
                <ul class="contato" id="contato">
                    <li>Telefone: (21)2643-3036</li>
                    <li>Email: tereadventure@gmail.com</li>
                    <li>Endereço: <a href="https://www.google.com.br/maps?q= Varzea nº211 Centro, Teresóplis - RJ"
                            target="_blank"> Varzea nº211 Centro, Teresópolis - RJ</a></li>
                </ul>
            </div>
        </footer>
       </div>
       </div>
      </div>
    )
  }
}

export default App;
