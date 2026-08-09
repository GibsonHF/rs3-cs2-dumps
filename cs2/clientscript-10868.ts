//
function script10868(int0: number): void {
    if ((IF_GETWIDTH(int0) > 90)) {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(true, int0);
    } else {
        IF_SETSIZE((IF_GETWIDTH(int0) + 1), (IF_GETHEIGHT(int0) + 1), 0, 0, int0);
    };
    return;
}