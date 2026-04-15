//
function script2745(int0: int): void {
    if ((int0 > 0)) {
        IF_SETHIDE(false, comp(66, 3));
        IF_SETCOLOUR(16711680, comp(66, 3));
        IF_SETTEXT(`+${inttostring(int0, 10)}%`, comp(66, 3));
        IF_SETPOSITION(0, 27, 0, 0, comp(66, 3));
        IF_SETONTIMER(callback(script2746), comp(66, 3));
    } else if ((int0 < 0)) {
        IF_SETHIDE(false, comp(66, 3));
        IF_SETCOLOUR(65280, comp(66, 3));
        IF_SETTEXT(`${inttostring(int0, 10)}%`, comp(66, 3));
        IF_SETPOSITION(0, 27, 0, 0, comp(66, 3));
        IF_SETONTIMER(callback(script2747), comp(66, 3));
    };
    return;
}