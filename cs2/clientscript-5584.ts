//
function script5584(int0: component, int1: component): void {
    if ((int0 == comp(-1, 65535))) {
        if ((int1 == comp(327, 6))) {
            script8841(12, 1);
        };
        return;
    };
    script8841(12, 1);
    if ((varbitplayer_38842 == 1)) {
        IF_SETSIZE(0, 0, 1, 1, int1);
        IF_SETPOSITION(0, 0, 1, 1, int1);
    } else {
        IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0, int1);
        IF_SETPOSITION(IF_GETX(int0), IF_GETY(int0), 0, 0, int1);
    };
    return;
}