//
function script2852(int0: number, int1: number): void {
    stack(int1);
    stack(102432768);
    IF_SETGRAPHIC();
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script2854, 255), 102432768);
    } else {
        IF_SETONTIMER(callback(script2854, 0), 102432768);
    };
    return;
}