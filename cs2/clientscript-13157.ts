//
function script13157(int0: number): void {
    var int1 = 0;
    if ((IF_FIND(int0) == 1)) {
        int1 = cc_getparam(5946);
        if ((int1 < 0)) {
            return;
        };
        if ((int1 > 0)) {
            stack(5946);
            int1 = (int1 - 1);
            cc_setparam(int1);
            return;
        };
        if ((varbitclient_35134 == 0)) {
            script13177();
        } else {
            script13176();
        };
    };
    return;
}