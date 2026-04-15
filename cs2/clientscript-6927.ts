//
function script6927(int0: int): void {
    if ((int0 == 17)) {
        if ((varbitplayer_17837 == 1)) {
            CC_SETHIDE[1](false);
        } else {
            CC_SETHIDE[1](true);
        };
    } else if ((TESTBIT(varbitplayer_5000, int0) == 1)) {
        CC_SETHIDE[1](false);
    } else {
        CC_SETHIDE[1](true);
    };
    return;
}