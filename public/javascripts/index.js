if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/javascripts/sw.js');
    });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    let res = {};
    for (const a of e.target) {
        if (a.value && a.value !== 'submit') {
            res[a.name] = a.value;
        }
    }
    if (res.title) {
        await db.table('schedules').add(res);
        return res;
    } else {
        return null;
    }
};


document.querySelector('form').onsubmit = function (e) {
    handleSubmit(e)
        .then(console.log)
};