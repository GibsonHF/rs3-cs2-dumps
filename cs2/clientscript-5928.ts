//
function script5928(): void {
    script8841(59, 1);
    if ((script4186() < 2)) {
        IF_SETHIDE(1, 60031295);
        IF_SETHIDE(1, 60031293);
    } else {
        IF_SETHIDE(0, 60031295);
        IF_SETHIDE(0, 60031293);
        IF_SETOPKEY(1, 96, 0, 60031293);
        IF_SETOPKEY(1, 97, 0, 60031295);
    };
    IF_SETOPKEY(1, 13, 0, 60031320);
    script5815();
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(1, 60031182);
    } else {
        IF_SETHIDE(0, 60031182);
    };
    if ((script6431() == 0)) {
        IF_SETHIDE(1, 60031139);
    };
    return;
}