function ListaTarefas() {
    const tarefas = ["Comprar café", "Estudar React", "Fazer exercícios"];
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ol>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ol>
        </div>
    );
}

export default ListaTarefas;

// Crie um novo projeto React utilizando Vite. Dentro do projeto, crie um componente funcional chamado ListaTarefas que contenha um array estático de tarefas e exiba cada tarefa em um elemento <li> dentro de uma lista ordenada (<ol> ). Use o método map para iterar sobre o array e renderizar cada tarefa. Utilize o seguinte array de tarefas:

// const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];
// Inclua este array diretamente no componente ListaTarefas e renderize a lista de tarefas na tela. Após criar o componente, importe-o e utilize-o no arquivo src/App.jsx . Verifique se a lista de tarefas é exibida corretamente.
