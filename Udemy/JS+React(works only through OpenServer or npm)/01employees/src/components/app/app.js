import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name:"John C.", salary: 800, increase: false, rise: true, id: 1},
        {name:"Alex M.", salary: 3000, increase: true, rise: false, id: 2},
        {name:"Marta S.", salary: 15000, increase: false, rise: false, id: 3}
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
    /*   const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after]; */
      return {
        data: data.filter(item => item.id !== id)
      }

    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    });
  }

//   onToggleIncrease = (id) => {
// /*     this.setState(({data}) => {
//       const index = data.findIndex(elem => elem.id === id);

//       const old = data[index];
//       const newItem = {...old, increase: !old.increase};
//       const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
//       return {
//         data: newArr
//       }

//     }) */

//     this.setState(({data}) => ({
//       data: data.map(item => {
//         if (item.id === id) {
//           return {...item, increase: !item.increase}
//         }
//         return item;
//       })
//     }))
//   }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term: term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise': 
        return items.filter(item => item.rise);
      case 'more1000': 
        return items.filter(item => item.salary > 1000);
      default: 
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  changeSalary = (newSalary, name) => {
    this.setState(({data}) => ({
      data: data.map(person => {
        if (person.name === name) {
          return {...person, salary: newSalary.replace(/\D/g, '')}
        }
        return person
      })
    }))
  }

  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
        employees={employees}
        increased={increased}/>
  
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
  
        <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          changeSalary={this.changeSalary}/>
  
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}

export default App;