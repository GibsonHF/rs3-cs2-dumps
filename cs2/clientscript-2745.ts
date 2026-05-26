//
function script2745(int0: number): void {
    if ((int0 > 0)) {
        IF_SETHIDE(0, 4325379);
        IF_SETCOLOUR(16711680, 4325379);
        IF_SETTEXT(`+${inttostring(int0, 10)}%`, 4325379);
        IF_SETPOSITION(0, 27, 0, 0, 4325379);
        IF_SETONTIMER(callback(script2746), 4325379);
    } else if ((int0 < 0)) {
        IF_SETHIDE(0, 4325379);
        IF_SETCOLOUR(65280, 4325379);
        IF_SETTEXT(`${inttostring(int0, 10)}%`, 4325379);
        IF_SETPOSITION(0, 27, 0, 0, 4325379);
        IF_SETONTIMER(callback(script2747), 4325379);
    };
    return;
}