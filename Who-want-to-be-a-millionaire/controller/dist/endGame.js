function endGame() {
    try {
        window.location.replace("./game-over.html");
    }
    catch (error) {
        console.error(error);
    }
}
