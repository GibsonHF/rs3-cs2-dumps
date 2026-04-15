//
function script2852(int0: unknown_int, int1: unknown_int): void {
    stack(int1);
    stack(102432768);
    IF_SETGRAPHIC();
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script2854, 255), comp(1563, 0));
    } else {
        IF_SETONTIMER(callback(script2854, 0), comp(1563, 0));
    };
    return;
}