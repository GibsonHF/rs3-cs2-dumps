//
function script17127(int0: number, int1: number, int2: number, int3: number): void {
    if ((int2 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int2, int0);
        if ((script13749() == 0)) {
            script72(int1, int0, ((varclient_1508 + IF_GETSCROLLHEIGHT(int0)) - varclient_1509));
        } else {
            script72(int1, int0, 0);
        };
        IF_SETHIDE(0, int1);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        script72(int1, int0, 0);
        IF_SETHIDE(1, int1);
    };
    return;
}