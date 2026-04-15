//
function script16239(int0: component, int1: struct): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int2 = 0;
    var int3 = script8450(int1);
    CC_DELETEALL(int0);
    if ((int3 > 1)) {
        IF_SETSIZE(210, 0, 0, 1, int0);
        IF_SETPOSITION(0, 0, 0, 0, int0);
        int2 = script16227(int0, int2, struct_getparam(int1, 4845), 0, (varbitplayer_27175 - 1), 0);
        int2 = script16227(int0, int2, struct_getparam(int1, 4846), 1, (varbitplayer_27175 - 1), 0);
        if ((int3 > 2)) {
            int2 = script16227(int0, int2, struct_getparam(int1, 4847), 2, (varbitplayer_27175 - 1), 0);
        };
        if ((int3 > 3)) {
            int2 = script16227(int0, int2, struct_getparam(int1, 4848), 3, (varbitplayer_27175 - 1), 0);
        };
        if ((int3 > 4)) {
            int2 = script16227(int0, int2, struct_getparam(int1, 7401), 4, (varbitplayer_27175 - 1), 0);
        };
    } else {
        IF_SETSIZE(0, 0, 0, 0, int0);
        IF_SETPOSITION(0, 0, 0, 0, int0);
        IF_SETHIDE(true, int0);
    };
    IF_SETONVARTRANSMIT(callback(script16238, int0, int1, 5147, 1), int0);
    return;
}