import { useState } from "react";

const DataForStudy = () => {

  const initialState = [
      {id: 'university',
      name: 'Національний транспортний університет',
      graduated: '2011', 
      place: 'Київ', 
      education: "Вища",  
      descr: 'факультет Менеджменту і права, Логістика',
      achievements: ["-Не спалив ВНЗ;", "-Червоний диплом"],
      rise: false},
  
      {id: 'courses',
      name: 'Англійський клуб "СЕМ"',
      graduated: '2015', 
      place: 'Київ', 
      education: "Курси",
      descr: 'Курси англійської мови',
      achievements: ["-Зрозумів 'Passive Voice'"],
      rise: false},
  
      {id: 'school',
      name: 'ЗСШ №306',
      graduated: '2006', 
      place: 'Київ', 
      education: "Середня",
      descr: 'Загальноосвітня середня школа',
      achievements: ["-Класний керівник витягнув на срібну медаль", "-Був одним з трьох найпопулярніших хлопців школи за версією всешкільного голосування серед старшокласників>"],
      rise: false},
  ];

  const [studyInfo, setStudyInfo] = useState(initialState);
  

  const onToggleRiseStudy = (id) => {
    setStudyInfo(studyInfo => studyInfo.map(item => {
      
      item.rise = false;
      if (item.id === id) {
        item.rise = true;
      }
      
      return item;
      
    }))
  }
  
  return {studyInfo, onToggleRiseStudy}
} 


export default DataForStudy;