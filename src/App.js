import React from "react";
import "./App.css";
import logo from "./LCO-logo-white.png";
// import background from "./background.png";

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
       newItem: "",
       list: [],
      
    };
  }

addItem(todoValue){
  if(todoValue !== ""){
    const newItem = {
      id: Date.now(),
      value: todoValue,
      isDone: false,
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }
}

deleteItem (id){
  const list = [...this.state.list];
  const updatedList = list.filter(item => item.id !== id);
  this.setState({list:updatedList});
}

updateInput(input){
  this.setState({newItem: input});
}

  render(){
    return(
      <div>
        <img alt="Logo" src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">Deepak's Todo List</h1>
        <div className="container">
          Add Your Todo's......
          <br/>
          <input 
             type="text" 
             className="input-text" 
             placeholder="Enter your todos here"
             required
             value={this.state.newItem}
             onChange={e => this.updateInput(e.target.value)}
          />
          <button 
          className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add Todo</button>
          <div className="list">
            <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  <input
                    type="checkbox"
                    name="idDone"
                    checked={item.isDone}
                    onchange={() => {}}
                  />
                  {item.value}
                  <button
                    className="btn"
                    onClick={() => this.deleteItem(item.id)}
                  >
                  Delete
                  </button>
                </li>
              );
            })}
              
            </ul>
          </div>
        </div>


      </div>
    )};
}

export default App;
