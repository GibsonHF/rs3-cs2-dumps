//
function script6483(int0: component, int1: int): void {
    if ((varbitplayer_5126 < 500)) {
        IF_SETTEXT(script6485(varbitplayer_5126), int0);
        IF_SETONTIMER(callback(script6484, int0, (CLIENTCLOCK() + int1)), int0);
    };
    return;
}