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
      renderUsers( );
  
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
  

  function renderUsers( ) {
    // יש לוודא קיום של אלמנט עם ה-id #rootName בדף
    const nameRoot = document.querySelector('#rootName');
    if (!nameRoot) {
      throw new Error('Could not find #rootName element');
    }
  
    // בדיקה אם יש לך משתנה users והוא לא ריק, ואז להשתמש בו
    const userName = users.length > 0 ? users[users.length - 1].userName : '';
      
    // בניית התבנית ה-HTML עם המשתנה userName
    const html = `
      <div dir="rtl" class="row">
        <div class="background-iamge">
          <div class="container-txt">
            <h2 class="heading">   איזה כיף שנרשמת אלינו ${userName}</h2> 
            <h3>Welcome to: Who Wants to Be a Millionaire?</h3>
            <div class="mill">
              <p>$1 Million</p>
            </div>
            <div class="win">
              <p>$500,000</p>
              <p>$250,000</p>
              <p>$100,000</p>
              <p>$50,000</p>
              <p>$25,000</p>
              <p>$15,000</p>
              <p>$12,000</p>
              <p>$10,000</p>
              <p>$7,500</p>
              <p>$5,000</p>
              <p>$3,000</p>
              <p>$2,000</p>
              <p>$1,000</p>
              <p>$500</p>
            </div>
            <button id="play">Play</button>
          </div>
        </div>
      </div>
    `;
    const newhtml = html 
  
    // החלפת התוכן של האלמנט ב-#rootName עם התבנית החדשה
    nameRoot.innerHTML = newhtml;
  }
