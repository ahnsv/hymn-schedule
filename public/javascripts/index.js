if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/javascripts/sw.js');
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
        let res = {};
        for (const a of e.target) {
            if (a.value && a.value !== 'submit') {
                res[a.name] = a.value;
            }
        }
        if (res.title) {
            resolve(res)
        }
        else {
            reject('non found')
        }
    })
};


document.querySelector('form').onsubmit = function (e) {
    handleSubmit(e)
        .then(console.log)
};