document.getElementById('shitty').addEventListener('input', () => {
    hideAlert();

    let readableContent = parseShittyContent();
    let beautifiedContent = beautify(readableContent);
    let isJson = (beautifiedContent != ""); 

    document.getElementById('readable').value = (isJson) ? beautifiedContent : readableContent;
});

document.getElementById('beautify').addEventListener('click', () => {
    let el = document.getElementById('readable');
    let beautifiedContent = beautify(el.value);

    if (beautifiedContent === "") showAlert(); 
    else el.value= beautifiedContent;
});

document.getElementById('unbeautify').addEventListener('click', () => {
    let el = document.getElementById('readable');
    let unbeautifiedContent = unbeautify(el.value);

    if (unbeautifiedContent === "") showAlert(); 
    else el.value= unbeautifiedContent;
});

function parseShittyContent() {
    let shittyTextLines = document.getElementById('shitty').value.split(/\n/g);
    let readableText = "";
   
    shittyTextLines.forEach(line => {
        let words = line.trim().split("    ");
        let text = words[words.length - 1];

        readableText += text;
    });

    return readableText;
}

function beautify(text) {
    let beautifiedText = "";

    try { beautifiedText = JSON.stringify(JSON.parse(text), null, "\t"); } catch (e) { }
    return beautifiedText;
}

function unbeautify(text) {
    let unbeautifiedText = "";

    try { unbeautifiedText = JSON.stringify(JSON.parse(text), null); } catch (e) { }
    return unbeautifiedText;
}

function hideAlert() {
    document.querySelector('.alert').style.display = 'none';
}

function showAlert() {
    document.querySelector('.alert').style.display = 'block';
}