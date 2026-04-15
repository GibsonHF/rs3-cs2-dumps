//
function script9120(int0: component, int1: int): void {
    IF_SETONTIMER(callback(), int0);
    script10742(int1);
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](comp(1554, 22), 1) == 1))) {
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        if ((varplayer_4903 != int1)) {
            CC_SETHIDE[1](false);
        } else {
            CC_SETHIDE[1](true);
        };
    };
    return;
}