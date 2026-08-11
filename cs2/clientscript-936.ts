//
function script936(int0: number): void {
    if ((MODULO(CLIENTCLOCK(), 161) == 0)) {
        IF_SETPOSITION((IF_GETX(comp(18, 12)) + 1), IF_GETY(comp(18, 12)), 0, 0, comp(18, 12));  // tuska_island_overlay:position_pulse
    };
    return;
}