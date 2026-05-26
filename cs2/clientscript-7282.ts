//
function script7282(): void {
    var int0 = (varplayer_3414 - varclient_2624);
    var int1 = (int0 / 60);
    var int2 = MODULO(int0, 60);
    var string0 = inttostring(int2, 10);
    if ((int2 < 10)) {
        string0 = strconcat("0", string0);
    };
    if (((varbitplayer_17495 < 63) || (int0 <= 0))) {
        IF_SETTEXT("Soon...", comp(916, 241));
    } else {
        IF_SETTEXT(`${inttostring(int1, 10)}:${string0}`, comp(916, 241));
    };
    return;
}