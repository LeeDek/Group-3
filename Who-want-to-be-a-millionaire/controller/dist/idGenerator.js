// This function generates an ID number
function idGenerator() {
    try {
        return Math.floor(Math.random() * 1000000);
    }
    catch (error) {
        console.error(error);
    }
}
