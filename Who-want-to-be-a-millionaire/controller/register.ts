 // Get users from local storage
  const usersString = localStorage.getItem('users');
  console.log(usersString);
  
  if (usersString) {
    // Convert string to array
    const usersArray = JSON.parse(usersString);
    console.log(usersArray);
    usersArray.forEach((user) =>
      users.push(new User(user.name , user.password))
    );
    console.log(users);
    renderUsers();
  }
  
  function handleRegisterFormSubmit(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.name.value;
      const password = ev.target.password.value;
  
      const nameRoot = document.querySelector('#rootName');
      if (!nameRoot)
        throw new Error('couldnt find rootName html element');
      checkUserExists(name , password);
      renderUsers();
  
      ev.target.reset();
  
      const usersJson = JSON.stringify(users);
  
      localStorage.setItem('users', usersJson);
    } catch (error) {
      console.error(error);
    }
  }
  
  function checkUserExists(name, password) {
    const existingUser = users.find(
      (user) => user.userName === name && user.password === password
    );
    if (existingUser) {
      alert('User already exists');
    } else {
      users.push(new User(name, password));
    }
  }
  
  function renderUsers() {
    const html = `<div dir="rtl" class="row">
    <div class="columna">
        <h1 class="heading">   איזה כיף שנרשמת אלינו ${users.length > 0 ? users[users.length - 1].userName : ''} </h1> 
           <p class="p"> מהיום מתחילים לעשות סדר בחשבון הבנק ! </p>
          <button class="button" onclick="document.location='../home-page/homepage.html'">כניסה ></button>
      </div>
          </div>`;
    const nameRoot = document.querySelector('#rootName');
    if (!nameRoot)
      throw new Error('couldnt find rootPersons html element');
    nameRoot.innerHTML = html;
  }