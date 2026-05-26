//
function script9120(int0: number, int1: number): void {
    IF_SETONTIMER(callback(), int0);
    script10742(int1);
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](101842966, 1) == 1))) {
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        if ((varplayer_4903 != int1)) {
            CC_SETHIDE[1](0);
        } else {
            CC_SETHIDE[1](1);
        };
    };
    return;
}