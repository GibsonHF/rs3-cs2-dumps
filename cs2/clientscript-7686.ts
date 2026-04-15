//
function script7686(int0: int, int1: int): void {
    var int2 = script11799(int0);
    var int3 = script7974(int2, int1);
    var int4 = script7978(int2, int1);
    var int5 = script1601(int2, int1);
    var int6 = script7979(int2, int1);
    if ((IF_FIND(int3) == 1)) {
        cc_setparam(5313, 0);
        cc_setparam(3438, -1);
        cc_setparam(5314, 0);
    };
    if ((IF_FIND(int6) == 1)) {
        CC_SETONTIMER(callback());
    };
    script11819(int6, int5, int4, -1, 2, " ", 14659 as graphic);
    return;
}