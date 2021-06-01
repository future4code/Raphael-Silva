import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://papodepobre.files.wordpress.com/2010/03/silviosantos11.jpg" 
          nome="Raphael Nicolini" 
          descricao="Oi, meu nome é Raphael Nicolini. Sou estudante full stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

        <div className="page-section-container">
          <h2>Informações de Contato</h2>
          <CardPequeno
            imagem="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png"
            descricao="Email: raphaelnicolini@labenu.com.br"
          />
          
        
          <CardPequeno
            imagem="https://image.flaticon.com/icons/png/512/25/25694.png"
            nome="Endereço"
            descricao="Endereço: Rua Labenu, 2222"
          />
        </div>

        <div className="page-section-container">
          <h2>Experiências profissionais</h2>
          <CardGrande 
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
            nome="Labenu" 
            descricao="Formando desenvolvedores para o mercado de trabalho!" 
          />
          
          <CardGrande 
            imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
            nome="NASA" 
            descricao="Apontando defeitos." 
          />
        </div>

          <div className="page-section-container">
            <h2>Minhas redes sociais</h2>
            <ImagemButton 
              imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
              texto="Facebook" 
            />        

            <ImagemButton 
              imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
              texto="Twitter" 
             />        
          </div>
    </div>
  );
}

export default App;
