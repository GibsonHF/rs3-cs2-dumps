//
function script6484(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    if ((varbitplayer_5126 < 500)) {
        IF_SETTEXT(script6485(varbitplayer_5126), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
    };
    return;
}