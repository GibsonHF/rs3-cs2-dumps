//
function script10597(int0: number): void {
    var int1 = (CLIENTCLOCK() - int0);
    if ((int1 <= 50)) {
        IF_SETPOSITION((SCALE(int1, 2, 5) - 150), 0, 1, 1, 100597775);
        IF_SETPOSITION((150 - SCALE(int1, 2, 5)), 0, 1, 1, 100597776);
        IF_SETTRANS((255 - (int1 * 5)), 100597775);
        IF_SETTRANS((255 - (int1 * 5)), 100597776);
    } else if ((int1 <= 100)) {
        IF_SETPOSITION(((int1 - 50) - 25), 0, 1, 1, 100597775);
        IF_SETPOSITION((25 - (int1 - 50)), 0, 1, 1, 100597776);
        IF_SETTRANS(0, 100597775);
        IF_SETTRANS(0, 100597776);
    } else if ((int1 <= 150)) {
        IF_SETPOSITION((SCALE(int1, 2, 5) - 225), 0, 1, 1, 100597775);
        IF_SETPOSITION((225 - SCALE(int1, 2, 5)), 0, 1, 1, 100597776);
        IF_SETTRANS((5 + ((int1 - 100) * 5)), 100597775);
        IF_SETTRANS((5 + ((int1 - 100) * 5)), 100597776);
    } else {
        IF_SETHIDE(1, 100597774);
        IF_SETONTIMER(callback(), 100597774);
    };
    return;
}