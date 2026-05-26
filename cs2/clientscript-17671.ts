//
function script17671(int0: number, int1: number): void {
    if ((int1 == -1)) {
        IF_SETTEXT("-", 97648715);
    } else {
        IF_SETTEXT(`${script7653(int1, 1, 0, 0, 1)}%`, 97648715);
        if ((int1 < int0)) {
            IF_SETCOLOUR(16711680, 97648715);
        } else if ((int1 >= 750)) {
            IF_SETCOLOUR(script693((255 - SCALE((int1 - 750), 250, 255)), 255, 0), 97648715);
        } else {
            IF_SETCOLOUR(script693(255, MAX(SCALE((int1 - int0), (750 - int0), 255), 0), 0), 97648715);
        };
    };
    return;
}