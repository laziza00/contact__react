
import { PureComponent } from 'react';
import './App.css';
import ContactForm from './component/ContactForm'
import ContactList from './component/ContactList'
import SortElement from './component/SortElement';

class App extends PureComponent {
    constructor(props) {
    super(props);
    this.state ={
      listObj: 
      {
        name: undefined,
        number: undefined,
        category: undefined,
      }, 

      listArr: 
      [
        {
        name: "Laziza",
        number: "999036352",
        category: "Family"
        },
        {
          name: "Xushnora",
          number: "999054615",
          category: "Friend"
          },
      ],
      newListArr: 
      [
        {
        name: "Laziza",
        number: "999036352",
        category: "Family"
        },
        {
          name: "Xushnora",
          number: "999054615",
          category: "Friend"
          },
      ],
    }
  }

typeHandler =(e)=> {
  let obj ={}

  if(e.target.type === "text") {
    obj.name = e.target.value
  }
  if(e.target.type === "number") {
    obj.number = e.target.value
  }

  this.setState({listObj: {...this.state.listObj, ...obj}}) 
}
selectOption =(e)=> {
  let obj ={
  category: e.target.value
}
this.setState({listObj: {...this.state.listObj, ...obj}})
}
addContactList= (e)=> {
  e.preventDefault();
  this.setState({listArr: [...this.state.listArr, {...this.state.listObj}]})
  e.target.reset()
}
sortFunc=(e)=> {
   console.log(e.target.id);

   if(e.target.id==='Allbtn') {
    this.setState({ listArr: [...this.state.newListArr] })
  }


  if (e.target.id === 'Family') {

  let newArr = []
  this.state.newListArr.map((obj, i) => {
    if (obj.category === 'Family') {
      newArr.push(obj)
    }
  })
  this.setState({ listArr: [...newArr] })
}
if (e.target.id === 'Collegue') {
    
  let newArr = []
  this.state.newListArr.map((obj, i) => {
    if (obj.category === 'Collegue') {
      newArr.push(obj)
    }
  })
  this.setState({ listArr: [...newArr] })
}
if (e.target.id === 'Friend') {
    
  let newArr = []
  this.state.newListArr.map((obj, i) => {
    if (obj.category === 'Friend') {
      newArr.push(obj)
    }
  })
  this.setState({ listArr: [...newArr] })
}



}

render() {


  return (
    <div className="App">
         <h3 className='title'>Heloo contact</h3>
         <div className='contact' >
            <ContactForm
                    addContactList = {this.addContactList}
                    typeHandler = {this.typeHandler}
                    selectOption = {this.selectOption}>
    
            </ContactForm>
            <div>
              <SortElement sortBtn ={this.sortFunc}/>
              {this.state.listArr.map((item, i)=> {
                return (
                  <ContactList key ={i} 
                  name={item.name} 
                  number={item.number} 
                  category={item.category}
                 />
                )
              })}
            </div>
      
         </div>
      </div>
  );

}
}

export default App;
