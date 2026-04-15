//
function script10004(int0: boolean, int1: component, int2: int, int3: int): void {
    var int4 = int2;
    var int5 = script12611(int1);
    while ((int4 < int3)) {
        if ((CC_FIND(int1, int4) == 1)) {
            if (((int0 == false) && (cc_getparam(3540) != 0))) {
                script8258(int5, varplayer_7624);
            };
            CC_SETHIDE(int0);
        };
        int4 = (int4 + 1);
    };
    return;
}