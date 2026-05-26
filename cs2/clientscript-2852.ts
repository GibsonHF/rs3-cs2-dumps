//
function script2852(int0: number, int1: number): void {
    IF_SETGRAPHIC(int1, comp(1563, 0));
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script2854, 255), comp(1563, 0));
    } else {
        IF_SETONTIMER(callback(script2854, 0), comp(1563, 0));
    };
    return;
}