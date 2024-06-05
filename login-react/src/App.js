import { useState } from "react";
import Logo from "./assets/images/logo.png";

import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title">
              <img src={Logo} alt="logo requinte" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="password"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a href="#" className="txt2">
                Criar conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
