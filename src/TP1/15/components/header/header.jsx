import "./headerC.css";
import logo from "../../imgs/logo.jpeg";

function header() {
    return (
        <section className="header_pr">
            <div className="top_header">
                <img src={logo} alt="minha logo" />
                <h1>Guilherme Reis</h1>
                <div className="subTitle_header">
                    <h2>Desenvolvedor Full-Stack</h2>
                </div>
            </div>
        </section>
    )
}


export default header