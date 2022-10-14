const EducationList = ({education, rise, onToggleRiseStudy}) => {
  let activeItem = "accordion-block__item";
  if (rise) {
    activeItem = "accordion-block__item active-style";
  }

  return (
    <div className="accordion-block">
      <p className={`${activeItem}`}
        type="button"
        onClick={onToggleRiseStudy}
        ><span>{education}</span></p>
    </div>
  )

}

export default EducationList;