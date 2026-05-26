//
function script820(): void {
    if ((varbitplayer_6049 != 101)) {
        IF_SETTEXT(`${inttostring(varbitplayer_6049, 10)}%`, 43450380);
        if ((varbitplayer_6049 > 74)) {
            IF_SETCOLOUR(16711680, 43450380);
        } else {
            IF_SETCOLOUR(16777215, 43450380);
        };
    } else {
        IF_SETTEXT("NA", 43450380);
    };
    if ((varbitplayer_6048 != 101)) {
        IF_SETTEXT(`${inttostring(varbitplayer_6048, 10)}%`, 43450378);
    } else {
        IF_SETTEXT("NA", 43450378);
    };
    return;
}