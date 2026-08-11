//
function script6900(int0: number, int1: number): void {
    if ((CLIENTCLOCK() < int1)) {
        return;
    };
    IF_SETHIDE(false, comp(1365, 14));  // duel3_gameover:rematch
    IF_SETONTIMER(callback(), int0);
    return;
}