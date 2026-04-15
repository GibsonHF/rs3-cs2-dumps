//
function script11351(int0: component, int1: component): void {
    var int2 = 0;
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    if ((IF_GETHIDE(int0) == false)) {
        int2 = 1;
    } else {
        int2 = 0;
    };
    if ((int2 == 1)) {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(false, int0);
        IF_SETHIDE(true, int1);
    };
    return;
}