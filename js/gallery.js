function showImg(getId) {
    const blurLevels = {
        'fhd': 0,
        'hd': 1.06,
        'lesshd': 1.5,
        'unclear': 2,
        'bw': 'grayscale(100%)'
    };

    const blurValue = blurLevels[getId] || 0;

    for (let i = 1; i <= 4; i++) {
        if (getId === 'bw') {
            document.getElementById(`img${i}`).style.filter = blurValue; // Apply grayscale
        } else {
            document.getElementById(`img${i}`).style.filter = `blur(${blurValue}px)`;
        }
    }
}
