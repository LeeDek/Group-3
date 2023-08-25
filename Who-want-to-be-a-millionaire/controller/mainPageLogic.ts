function checkRegister() {
  try {
    const usersFromLocalStorage = getUsers();

    if (usersFromLocalStorage.length === 0) {
      window.location.replace(
        "../Who-want-to-be-a-millionaire/view/register.html"
      );
    }
    
  } catch (error) {
    console.error(error)

  }
}
