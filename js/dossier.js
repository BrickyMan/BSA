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

function bruteforce() {
    let bruteforceText = ['password: a6$kCs13C', 'password: i8hJsaW2!','password: i_8bn4jcd', 'password: i_n7Acv;0', 'password: i_ne5%abL', 'password: i_nee&fXz', 'password: i_need24R', 'password: i_need(2y', 'password: i_neesdJ0?', 'password: i_needJ0b'],
        dossierTerminalBruteforce = document.querySelector('#dossierTerminalBruteforce');

    let i = 1;
    let timer = setInterval(() => {
        dossierTerminalBruteforce.innerHTML = bruteforceText[i++];
        if (i == bruteforceText.length) {
            clearInterval(timer);
        }
    }, 300);
}

dossierHackBtn.onclick = () => {
    let dossierTermialCommands = [ '', '', '\n------------\n','connecting to target ip', '.', '.', '.', '\n', '', '', 'checking for secure', '.', '.', '.', '\n', '', '', 'attempting frequent passwords', '.', '.', '.', '', '\n', 'no frequent password feets!', '\n', '\n', '', '', 'use bruteforce? (y/n)', '\n', '', '', 'y', '\n'],
    dossierTerminalText = document.querySelector('#dossierTerminalText');

    changeWindow(dossier, dossierTerminal);

    let i = 1;
    let timer = setInterval(() => {
        dossierTerminalText.innerHTML += dossierTermialCommands[i++];
        if (i == dossierTermialCommands.length) {
            clearInterval(timer);
            bruteforce();
        }
    }, 300);
}