//
function script13758(int0: number, int1: number): void {
    if ((int0 > IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, int0, int1);
        IF_SETSCROLLPOS(0, 0, int1);
        if ((int1 == 67436615)) {
            IF_SETSIZE(0, int0, 1, 0, 67436616);
        } else {
            IF_SETSIZE(0, int0, 1, 0, 67436609);
        };
        script31(67436620, int1, -1, -1, -1, -1, -1, -1);
        IF_SETHIDE(0, 67436620);
    } else {
        if ((int1 == 67436615)) {
            IF_SETSIZE(0, int0, 1, 0, 67436616);
        } else {
            IF_SETSIZE(0, int0, 1, 0, 67436609);
        };
        IF_SETSCROLLSIZE(0, 0, int1);
        IF_SETHIDE(1, 67436620);
    };
    return;
}