function checkRegister() {
  const usersFromLocalStorage = getUsers();

  if (usersFromLocalStorage.length === 0) {
    window.location.replace(
      "../Who-want-to-be-a-millionaire/view/register.html"
    );
  }
}
