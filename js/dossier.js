let dossierIntro = document.querySelector('#dossierIntro'),
    dossierFindBtn = document.querySelector('#dossierFindBtn'),
    dossierSearch = document.querySelector('#dossierSearch'),
    dossier = document.querySelector('#dossier'),
    dossierHackBtn = document.querySelector('#dossierHackBtn'),
    dossierTerminal = document.querySelector('#dossierTerminal');

function changeWindow(toClose, toOpen) {
    toClose.style.display = 'none';
    toOpen.removeAttribute('style');
}

dossierFindBtn.onclick = () => {
    changeWindow(dossierIntro, dossierSearch);
    let dossierSearchPhoto = document.querySelector('#dossierSearchPhoto'),
        dossierSearchConclusion = document.querySelector('#dossierSearchConclusion'),
        photoIndex = 1;
    let timer = setInterval(() => {
        console.log(photoIndex++);
        dossierSearchPhoto.setAttribute('src', 'searchPh/' + photoIndex + '.jpg');
    }, 250);
    setTimeout(() => {
        clearInterval(timer);

        setTimeout(() => {
            dossierSearchConclusion.style.color = 'rgb(175, 36, 36)';
            dossierSearchConclusion.innerHTML = 'Detected!';
        }, 150);

        setTimeout(() => {
            dossierSearchConclusion.style.color = 'rgb(255, 255, 255)';
            dossierSearchConclusion.innerHTML = 'Opening dossier...';
        }, 1000);

        setTimeout(() => {
            changeWindow(dossierSearch, dossier);
        }, 1500);
        
    }, 250 * 13)
}

let dossierTermialCommands = ['\n------------\n','checking for secure', '.', '.', '.', '\n', '', '', 'connecting to target ip', '.', '.', '.', '\n', '', '', 'forcing secure password', '.', '.', '.', '\n', 'password: ', 'I', '_', 'N', 'e', 'e', 'd', 'J', '0', 'b', '\n', '', '', 'password is correct!\n', '\n', '', 'opening target OS', '.', '.', '.'],
    dossierTerminalText = document.querySelector('#dossierTerminalText');

dossierHackBtn.onclick = () => {
    changeWindow(dossier, dossierTerminal);
    let i = 0;
    let timer = setInterval(() => {
        dossierTerminalText.innerHTML += dossierTermialCommands[i++];
        if (i == dossierTermialCommands.length) {
            clearInterval(timer);
        }
    }, 300);
}