// function to collect users Feedback

function submitFeedback() {

  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;
  const experience = document.getElementById('userExperince').value;

  const submitButton=document.getElementById('submitBtn');
  alert('Thank you for your valuable feedback')

  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('job').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice1').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;
  document.getElementById('userProductChoice2').innerHTML = productType;
  document.getElementById('userExperiment').innerHTML = experience;

  document.getElementById('userInfo').style.display = 'block';

}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });



