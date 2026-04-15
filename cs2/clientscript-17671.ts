//
function script17671(int0: int, int1: int): void {
    if ((int1 == -1)) {
        IF_SETTEXT("-", comp(1490, 75));
    } else {
        IF_SETTEXT(`${script7653(int1, 1, 0, 0, 1)}%`, comp(1490, 75));
        if ((int1 < int0)) {
            IF_SETCOLOUR(16711680, comp(1490, 75));
        } else if ((int1 >= 750)) {
            IF_SETCOLOUR(script693((255 - SCALE((int1 - 750), 250, 255)), 255, 0), comp(1490, 75));
        } else {
            IF_SETCOLOUR(script693(255, MAX(SCALE((int1 - int0), (750 - int0), 255), 0), 0), comp(1490, 75));
        };
    };
    return;
}