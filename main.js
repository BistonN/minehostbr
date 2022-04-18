document.getElementById('title').innerText = '<João V. Biston Nunes>'
document.getElementsByClassName('timeline-title')[0].innerText = '[>:]Fatos Relevantes'
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var indexTexts = 0;
const listTexts = ['</Cientista de Dados>', '</Desenvolvedor de Sistemas>', '</Professor / Orientador>', '</Investidor>']

function getNextText() {
    if (indexTexts === 4) {
        indexTexts = 0;
    }
    returnText = listTexts[indexTexts];
    indexTexts++;
    return returnText;
}

async function changeText() {
    const text = document.getElementById('texts');
    console.log(text.innerText);
    do {
        text.innerText = getNextText();
        text.classList.add('anim-typewriter');
        await sleep(4000);
        console.log('a');
        text.classList.remove('anim-typewriter');
        await sleep(100);
    } while (true);
}
changeText();