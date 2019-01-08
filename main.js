const settings = {
    id: 'canvas',
    file: document.getElementById('file'),
    loadBtn: document.getElementById('load-btn'),
    onReady: mainFn
};

function mainFn(filters) {
    document.getElementById('afterReady').classList.remove('hidden');
    document.getElementById('afterReady').innerHTML = '';
    const filterKays = Object.keys(filters);

    for(let i = 0; i < filterKays.length; i++) {
        const button = document.createElement('button');
        button.onclick = filters[filterKays[i]];
        button.innerText = filterKays[i];
        button.classList.add('button');
        document.getElementById('afterReady').appendChild(button);
    }
}

FilterAPI(settings);