//
function script6972(int0: component): void {
    var int1 = IF_GETHEIGHT(comp(560, 8));
    var int2 = (int1 / 3);
    if ((IF_GETMODELZOOM(int0) > 200)) {
        IF_SETMODELZOOM((IF_GETMODELZOOM(int0) - 10), int0);
        if ((IF_GETY(int0) > int2)) {
            IF_SETPOSITION(0, (IF_GETY(int0) - 3), 1, 0, int0);
        };
    } else if (((IF_GETMODELZOOM(int0) <= 200) && (IF_GETHIDE(comp(560, 4)) == true))) {
        IF_SETHIDE(false, comp(560, 4));
        IF_SETHIDE(true, int0);
    };
    return;
}