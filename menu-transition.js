function func_2fast(event) {
    id = event.keyCode - 48;
    if (event.shiftKey) {
        url = '';
        switch (id) {
            case 1:
                url = 'index.html';
                break;
            case 2:
                url = 'NoseNews.html';
                break;
            case 3:
                url = 'profkom.html';
                break;
            case 4:
                url = 'Nastile.html';
                break;
            case 5:
                url = 'MissAndMr.html';
                break;
            case 6:
                url = 'KVN.html';
                break;
            case 7:
                url = 'MyDance.html';
                break;
            case 8:
                url = 'entrant.html';
                break;
        }
        if (url) window.location.href = url;
    }
}
