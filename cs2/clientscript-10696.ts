//
function script10696(): void {
    if ((varbitplayer_25550 == 0)) {
        IF_SETHIDE(false, comp(1545, 0));
        IF_SETHIDE(false, comp(1545, 2));
        IF_SETHIDE(true, comp(1545, 4));
        IF_SETHIDE(true, comp(1545, 7));
    } else {
        IF_SETHIDE(true, comp(1545, 0));
        IF_SETHIDE(true, comp(1545, 2));
        IF_SETHIDE(false, comp(1545, 4));
        IF_SETHIDE(false, comp(1545, 7));
    };
    return;
}