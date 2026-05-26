//
function script15921(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if (((int1 > 0) && (script15456(int1) == 1))) {
            return;
        };
        IF_SETSIZE(0, CC_GETHEIGHT(), 1, 0, 122355740);
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, 122355740);
        varbitplayer_22179 = int1;
    };
    IF_SETHIDE(0, 122355740);
    return;
}