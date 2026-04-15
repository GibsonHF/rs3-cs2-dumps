//
function script5928(): void {
    script8841(59, 1);
    if ((script4186() < 2)) {
        IF_SETHIDE(true, comp(916, 319));
        IF_SETHIDE(true, comp(916, 317));
    } else {
        IF_SETHIDE(false, comp(916, 319));
        IF_SETHIDE(false, comp(916, 317));
        IF_SETOPKEY(1, 96, 0, comp(916, 317));
        IF_SETOPKEY(1, 97, 0, comp(916, 319));
    };
    IF_SETOPKEY(1, 13, 0, comp(916, 344));
    script5815();
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(true, comp(916, 206));
    } else {
        IF_SETHIDE(false, comp(916, 206));
    };
    if ((script6431() == false)) {
        IF_SETHIDE(true, comp(916, 163));
    };
    return;
}