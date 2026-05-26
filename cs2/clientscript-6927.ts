//
function script6927(int0: number): void {
    if ((int0 == 17)) {
        if ((varbitplayer_17837 == 1)) {
            CC_SETHIDE[1](0);
        } else {
            CC_SETHIDE[1](1);
        };
    } else if ((TESTBIT(varbitplayer_5000, int0) == 1)) {
        CC_SETHIDE[1](0);
    } else {
        CC_SETHIDE[1](1);
    };
    return;
}