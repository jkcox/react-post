import './App.css';
import Response from './components/Response';
import Form from './components/Form';

function App(props) {
  const taskList = props.tasks.map(task => (
    <Response name={task.name} id={task.id} />
    )
  );
  function passData(name) {
    alert(name);
  }
  return (
    <div className="App">
      <h1>POST Request App</h1>
      <Form onSubmit={passData} />
      <div id="response-area">
        <h3>Response</h3>
        {taskList}
      </div>
    </div>
  );
}

export default App;
