import './app-filter.css';


const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Всі співробітники'},
    {name: 'rise', label: 'На підвищення'},
    {name: 'more1000', label: 'З/П білше 1000$'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : 'btn-outline-light';
    return (
      <button 
        className={`btn ${clazz}`}
        key={name}
        type="button"
        onClick={() => props.onFilterSelect(name)}>
          {label}
      </button>
    )
  })


  return (
  <div className="btn-group">
    {buttons}
    {/* <button 
      className="btn btn-light"
      type="button">
        Всі співробітники
    </button>
    <button 
      className="btn btn-outline-light"
      type="button">
        На підвищення
    </button>
    <button 
      className="btn btn-outline-light"
      type="button">
        З/П білше 1000$
    </button> */}
  </div>
  )
}

export default AppFilter;