const playSound = (url) => {
    const audio = new Audio(url);
    audio.volume = 0.25;
    try {
        audio.play();
    } catch (error) {
        console.log("Algo salió mal al intentar reproducir el audio:", error)
    }
}

export {playSound};