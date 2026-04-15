//
function script13157(int0: component): void {
    var int1 = 0;
    if ((IF_FIND(int0) == 1)) {
        int1 = cc_getparam(5946);
        if ((int1 < 0)) {
            return;
        };
        if ((int1 > 0)) {
            cc_setparam(5946, --int1);
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