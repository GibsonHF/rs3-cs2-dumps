//
function script14882(int0: number): void {
    varplayer_9287 = int0;
    script14900(int0);
    script14901(int0);
    var int1 = script14661(int0);
    IF_SETTEXT(`+${TOSTRING_LOCALISED(script14660(int0), 1)}%`, 45416485);
    if ((int1 < 0)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(int1, 1)}%`, 45416490);
    } else {
        IF_SETTEXT(`+${TOSTRING_LOCALISED(int1, 1)}%`, 45416490);
    };
    return;
}