// This function generates a six-digit ID number
function idGenerator(): number | undefined {
  try {
    return Math.floor(Math.random() * 1000000);
  } catch (error) {
    console.error(error);
  }
}
// This function generates a random ID number
function generateUid(): string | undefined {
  try {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  } catch (error) {
    console.error(error);
  }
}
