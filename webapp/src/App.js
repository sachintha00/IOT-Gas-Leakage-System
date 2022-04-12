import './App.css';

function App() {
  return (
    <div className="App">
   <footer className="ui-footer ui-grid-col-2">
      <a href="#" className="ui-btn" id="minus">-10%</a>
      <a href="#" className="ui-btn" id="plus">+10%</a>
   </footer>
   <progress className="ui-circle-progress" id="circleprogress" max="100" value="50"></progress>
    </div>
  );
}

export default App;
