
export const buildStart = () => {

    const startBtn = document.createElement('button');
    startBtn.className = 'start_btn';

    startBtn.textContent = 'Click to Start!';

    return startBtn
};

export const buildEnd = () => {

    const endBtn = document.createElement('button');
    endBtn.className = 'end_btn';

    endBtn.textContent = 'Click to End!';

    return endBtn
}

export const buildReset = () => {
    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset_btn';

    resetBtn.textContent = 'Click to Reset!';

    return resetBtn
}
