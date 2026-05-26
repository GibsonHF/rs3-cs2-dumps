//
function script221(): void {
    if ((strcmp(varclient_2578, "") == 0)) {
        script15197();
        return;
    };
    varclient_790 = 3;
    IF_SETHIDE(true, comp(594, 1));
    IF_SETHIDE(true, comp(594, 80));
    IF_SETHIDE(true, comp(594, 88));
    IF_SETHIDE(true, comp(594, 95));
    IF_SETHIDE(true, comp(594, 28));
    IF_SETHIDE(false, comp(594, 70));
    IF_SETTEXT(`Ignore ${varclient_2578}?`, comp(594, 76));
    return;
}