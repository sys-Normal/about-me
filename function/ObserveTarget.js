let options = {
    root: null,
    threshold: 1,
    rootMargin: "0px"
};

let observerInitialize = (entries, observer) => {
    entries.forEach((entry) => {
        Log(entry)
    })
}

let observer = new IntersectionObserver(observerInitialize, options);

let target = doc.querySelectorAll(".flexibleBox");
target.forEach((item) => {
    observer.observe(item);
})