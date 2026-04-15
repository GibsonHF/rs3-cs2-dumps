//
function script17127(int0: component, int1: component, int2: int, int3: int): void {
    if ((int2 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int2, int0);
        if ((script13749() == false)) {
            script72(int1, int0, ((varclient_1508 + IF_GETSCROLLHEIGHT(int0)) - varclient_1509));
        } else {
            script72(int1, int0, 0);
        };
        IF_SETHIDE(false, int1);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        script72(int1, int0, 0);
        IF_SETHIDE(true, int1);
    };
    return;
}