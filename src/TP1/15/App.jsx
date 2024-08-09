import Header from "./components/header/header.jsx";
import Projects from "./components/body/body.jsx";
import Contacts from "./components/footer/footer.jsx"

const App = () =>{
    return(
        
        <div>
        <Header /> 
        <Projects />
        <Contacts/>
        </div>
    )    
}

export default App

/*Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um componente funcional chamado Portfólio que exiba um portfólio simples com as seguintes seções estáticas:

Cabeçalho:
Um título com o nome do portfólio (por exemplo, "Meu Portfólio").
Um subtítulo com uma breve descrição (por exemplo, "Desenvolvedor Front-end com experiência em React").

Projetos:
Uma seção que liste três projetos fictícios com títulos e descrições curtas.

Contatos:
Uma seção que exiba informações de contato fictícias (por exemplo, e-mail e redes sociais).
Os itens de Cabeçalho, Projetos e Contatos, devem ser criados em componentes isolados e chamados no arquivo App.js. */