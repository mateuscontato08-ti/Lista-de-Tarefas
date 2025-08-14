/* Estilo básico para a Lista de Tarefas */

/* Corpo da página */
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 20px;
  text-align: center;
}

/* Título principal */
h1 {
  color: #4CAF50;
  margin-bottom: 20px;
}

/* Lista de tarefas */
ul {
  list-style-type: none;
  padding: 0;
}

/* Itens da lista */
li {
  background-color: #fff;
  margin: 10px auto;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Botão de remover tarefa */
button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
