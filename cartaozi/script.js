    function sim() {
        alert("Você vai sair comigo! HEHEHE :)");
        // redireciona para um URL após clicar no SIM
        location.href = "video.mp4";
    }

    function desvia(btn) {
        // btn declarado na função
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
        console.log('opa, desviei...');
    }
    function desviado() {
        alert("Vai me amar sim!");
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }