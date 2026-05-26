//
function script19006(): void {
    var int0 = 1;
    while ((++int0 < IF_GETNEXTSUBID(comp(1870, 22)))) {
        if ((CC_FIND(comp(1870, 22), int0) == 1)) {
            CC_SETTRANS(0);
            CC_SETHIDE(false);
            if ((cc_getparam(5830) != 0)) {
                CC_SETPOSITION(cc_getparam(9109), cc_getparam(5927), cc_getparam(5928), cc_getparam(5929));
            };
            if ((cc_getparam(5930) != 0)) {
                CC_SETSIZE(cc_getparam(5931), cc_getparam(5932), 0, 0);
            };
            CC_SETONTIMER(callback());
        };
    };
    return;
}