//
function script15601(int0: int, int1: int): void {
    var int2 = script15603(int0);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    var int3 = -1;
    var int4 = 0;
    if ((IF_FIND(int2) == 1)) {
        int3 = cc_getparam(8262);
        if ((int3 == -1)) {
            cc_setparam(8262, int1);
            int3 = int1;
        };
    };
    if ((int3 != -1)) {
        int4 = script15599(int0, int3, int1);
    };
    if ((int4 <= 0)) {
        script15600(int0);
        return;
    };
    IF_SETHIDE(false, int2);
    if ((CC_FIND(int2, 1) == 1)) {
        CC_SETTEXT(inttostring(MIN(99, int4), 10));
    };
    return;
}