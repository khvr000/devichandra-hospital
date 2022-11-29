export const debounce = (func, time = 100) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, time, ...args)
    };
};

export default debounce;
