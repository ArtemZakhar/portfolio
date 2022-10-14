const List = ({name, rise, onToggleRise}) => {

  
  let activeItem = "accordion-block__item";
  if (rise) {
    activeItem = "accordion-block__item active-style";
  }


  return (
    <div className="accordion-block">
      <p className={`${activeItem}`}
        type="button"
        onClick={onToggleRise}
        ><span>{name}</span></p>
    </div>
  )
}

export default List;