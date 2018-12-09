const matchHeight = (arrSelector) => {
    arrSelector.forEach((elem) => {
        let elems = Array.prototype.slice.call(document.querySelectorAll(elem));
        let maxHeight = 0;

        elems.forEach((elem) => {
            elem.style.height = 'auto';
            let elemHeight = parseInt(getComputedStyle(elem).height);

            if (elemHeight > maxHeight) {
                maxHeight = elemHeight;
            }
        });

        elems.forEach((elem) => {
            elem.style.height = `${maxHeight}px`;
        });
    });
};

export default matchHeight;
