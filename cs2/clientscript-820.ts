//
function script820(): void {
    if ((varbitplayer_6049 != 101)) {
        IF_SETTEXT(`${inttostring(varbitplayer_6049, 10)}%`, comp(663, 12));
        if ((varbitplayer_6049 > 74)) {
            IF_SETCOLOUR(16711680, comp(663, 12));
        } else {
            IF_SETCOLOUR(16777215, comp(663, 12));
        };
    } else {
        IF_SETTEXT("NA", comp(663, 12));
    };
    if ((varbitplayer_6048 != 101)) {
        IF_SETTEXT(`${inttostring(varbitplayer_6048, 10)}%`, comp(663, 10));
    } else {
        IF_SETTEXT("NA", comp(663, 10));
    };
    return;
}