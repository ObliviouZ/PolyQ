const diseases = [
  { disease: "Huntington's disease"},

  { disease: "Dentatorubral-pallidoluysian atrophy"},

  { disease: "Spinal-bulbar muscular atrophy"},

  { disease: "Spinocerebellar ataxia type 1"},

  { disease: "Spinocerebellar ataxia type 2"},

  { disease: "Spinocerebellar ataxia type 3"},

  { disease: "Spinocerebellar ataxia type 6"},

  { disease: "Spinocerebellar ataxia type 7"},
  { disease: "Spinocerebellar ataxia type 17"}
];

const list = document.getElementById("list");

function setList(group){
  clearList();
  for (const disease of group){
      const item = document.createElement('li');
      const text = document.createTextNode(disease.disease);
      item.appendChild(text);
      list.appendChild(item);
  }
  if (group.length=== 0){
    setNoResults();
  }
}

function clearList(){
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
}

function setNoResults(){
    const item = document.createElement('li');
    const text = document.createTextNode('No results');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm){
  if (value === searchTerm){
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  } else {
    return -1;
  }
}

const searchInput = document.getElementById("search");

searchInput.addEventListener('input', (event) =>{
  let value = event.target.value;
  if (value && value.trim().length > 0) {
      value = value.trim();
      setList(diseases.filter(disease => {
        return disease.disease.includes(value);
      }).sort((diseaseA, diseaseB) => {
        return getRelevancy(diseaseB.disease, value) - getRelevancy(diseaseA.disease, value);
      }));
  } else {
    clearList();
  }
})
