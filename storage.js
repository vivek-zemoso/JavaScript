localStorage.setItem('localCount', Number(0));
sessionStorage.setItem('sessionCount', Number(0));

const incrementLocal = () => {
    let count = localStorage.getItem('localCount');
    localStorage.setItem('localCount', Number(count) + 1);
}

const incrementSession = () => {
    let count = sessionStorage.getItem('sessionCount');
    sessionStorage.setItem('sessionCount', Number(count) + 1);
}
