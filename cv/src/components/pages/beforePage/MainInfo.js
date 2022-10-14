import oldAva from "./img/baby.jpg";

const MainInfo = () => {

  return (
    <>
      <div className="ava__track">
      <img className="ava__track_img" src={oldAva} alt="oldMe"/>
      </div>
      <div className="about_me__track">
        Захарчук Артем Вадимович <br/>
        чоловік, 33 роки, народився 5 травня 1989 року, одружений <br/><br/>
        +380503899090 <span className="grey">(бажаний спосіб зв'язку)</span><br/>
        artemzakharchuk@gmail.com <br/><br/>
        місце проживання: Київ <br/>
        громадянство: Україна <br/><br/>
        В різний час цікавився: футболом (грав напівпрофесійно), настільним тенісом,<br/> боксом, волейболом, рафтингом (зокрема і гірським)
      </div>
      <div className="expirience__track">Досвід</div>
      <div className="descr__track">Детальна інформація</div>
      <div className="achievements__track">Досягнення</div>
    </>
  )
}

export default MainInfo;