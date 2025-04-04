
const submitButton = document.getElementById('submit');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const submissionsList = document.querySelector('.submissions-list');


submitButton.addEventListener('click', (e) => {
  e.preventDefault(); 


  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const age = ageInput.value.trim();

  if (name && email && age) {
    const subItem = document.createElement('div');
    subItem.classList.add('submission-item');
    
    const subvalues = document.createElement('div');
    subvalues.classList.add('submission-details');
    
    const namerow = createRow('Name:', name);
    const emailrow = createRow('Email:', email);
    const agerow = createRow('Age:', age);
    
    subvalues.appendChild(namerow);
    subvalues.appendChild(emailrow);
    subvalues.appendChild(agerow);
    subItem.appendChild(subvalues);
    
    submissionsList.appendChild(subItem);
    
    nameInput.value = '';
    emailInput.value = '';
    ageInput.value = '';
  } 
});


function createRow(label, value) {
  const row = document.createElement('div');
  row.classList.add('detail-row');
  
  const detailLabel = document.createElement('p');
  detailLabel.classList.add('detail-label');
  detailLabel.textContent = label;
  
  const detailValue = document.createElement('p');
  detailValue.classList.add('detail-value');
  detailValue.textContent = value;
  
  row.appendChild(detailLabel);
  row.appendChild(detailValue);
  
  return row;
}
