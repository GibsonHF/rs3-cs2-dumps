//
function script15856(int0: int): void {
    if (((int0 < 0) || (int0 > 1))) {
        return;
    };
    if ((varclient_6910 == int0)) {
        return;
    };
    varclient_6910 = int0;
    var int1 = -1 as dbrow;
    if ((IF_FIND(comp(857, 20)) == 1)) {
        int1 = cc_getparam(424);
    };
    if ((int1 == -1 as dbrow)) {
        IF_SETHIDE(true, comp(857, 20));
        return;
    };
    script15857(int1);
    script15858(int1);
    return;
}