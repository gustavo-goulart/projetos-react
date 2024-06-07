import "./style.css";
import Lixeira from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "2145usghsgfa",
      name: "Gustavo",
      age: 42,
      email: "gustavo@gmail.com",
    },

    {
      id: "2145usgrtay",
      name: "Denise",
      age: 35,
      email: "denise@gmail.com",
    },

    {
      id: "2145usg",
      name: "Theo",
      age: 9,
      email: "theo@gmail.com",
    },
  ];
  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="email" placeholder="Email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>{" "}
            </p>
            <p>
              Idade: <span>{user.age}</span>{" "}
            </p>
            <p>
              Email: <span>{user.email}</span>{" "}
            </p>
          </div>
          <button src={Lixeira}></button>
        </div>
      ))}
    </div>
  );
}

export default Home;
