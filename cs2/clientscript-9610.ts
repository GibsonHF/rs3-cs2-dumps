//
function script9610(int0: number): void {
    if ((int0 == -1)) {
        IF_SETHIDE(1, 27459590);
    } else if ((CC_FIND(27459589, int0) == 1)) {
        IF_SETHIDE(0, 27459590);
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, 27459590);
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, 27459590);
    };
    return;
}