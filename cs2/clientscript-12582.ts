//
function script12582(int0: number): void {
    if ((varbitplayer_32626 >= 100)) {
        IF_SETHIDE(1, int0);
    } else if ((varbitplayer_32626 >= 25)) {
        IF_SETTEXT("Unlock GOLD at 100% enrage.", int0);
    } else {
        IF_SETTEXT("Unlock SILVER at 25% enrage.", int0);
    };
    return;
}