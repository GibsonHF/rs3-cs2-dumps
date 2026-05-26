//
function script6972(int0: number): void {
    var int1 = IF_GETHEIGHT(36700168);
    var int2 = (int1 / 3);
    if ((IF_GETMODELZOOM(int0) > 200)) {
        IF_SETMODELZOOM((IF_GETMODELZOOM(int0) - 10), int0);
        if ((IF_GETY(int0) > int2)) {
            IF_SETPOSITION(0, (IF_GETY(int0) - 3), 1, 0, int0);
        };
    } else if (((IF_GETMODELZOOM(int0) <= 200) && (IF_GETHIDE(36700164) == 1))) {
        IF_SETHIDE(0, 36700164);
        IF_SETHIDE(1, int0);
    };
    return;
}