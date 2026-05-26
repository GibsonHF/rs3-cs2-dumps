//
function script5274(): void {
    var int0 = 0;
    if ((IF_FIND(comp(1137, 15)) == 1)) {
        int0 = (cc_getparam(1103) - 1);
        CC_SETPARAM_INT(1103, int0);
    };
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1137, 15));
    };
    return;
}