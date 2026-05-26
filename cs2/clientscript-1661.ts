//
function script1661(int0: number, int1: number, int2: number): void {
    CC_DELETEALL(int2);
    if (((varbitplayer_15102 != 3) || (varplayer_1295 != 55))) {
        IF_SETONTIMER(callback(), int2);
        return;
    };
    CC_CREATE(int2, 6, 0);
    CC_SETMODEL(41760);
    CC_SETMODELANIM(10221);
    CC_SETSIZE(43, 43, 0, 0);
    script1663(int0, int1, int2);
    IF_SETONTIMER(callback(script1662, int0, int1, int2), int2);
    return;
}