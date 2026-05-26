//
function script9113(int0: number): void {
    if ((CC_FIND(16252972, int0) == 1)) {
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, 16252973);
        IF_SETPOSITION((IF_GETX(16252972) + CC_GETX()), (IF_GETY(16252972) + CC_GETY()), 0, 0, 16252973);
        IF_SETHIDE(0, 16252973);
    } else {
        IF_SETHIDE(1, 16252973);
    };
    return;
}