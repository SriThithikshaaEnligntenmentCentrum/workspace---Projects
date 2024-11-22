// Login Form Redirected to Next Page 
  let form = document.getElementById('loginForm');
  // alert(form.name);

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const mail = email.value;
    const password = pwd.value;
    // alert(`${mail}, ${password}`);

    const loginCredentials = {e_mail : mail, pass : password};

    const jsonLoginCredentialsObj = JSON.stringify(loginCredentials);
    sessionStorage.setItem('loginCredentialsObj', jsonLoginCredentialsObj);

    window.location.href = 'html/LoginPage.html';   
  })

// Fri Nov 22 2024 13:41:54 GMT+0530 (India Standard Time)
  // To display the Current Date and Time
  const date = new Date();
  let timeDiv = document.getElementById('time_div');
  timeDiv.innerHTML = `${date.toUTCString()}`;