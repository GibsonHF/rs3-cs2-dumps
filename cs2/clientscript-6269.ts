//
function script6269(int0: component, int1: int): void {
    IF_SETONTIMER(callback(), int0);
    script6979(int1);
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](comp(1555, 10), 1) == 1))) {
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        if ((varplayer_4902 != int1)) {
            CC_SETHIDE[1](false);
        } else {
            CC_SETHIDE[1](true);
        };
    };
    return;
}