//
function script5617(int0: number): void {
    if ((IF_GETWIDTH(comp(1198, 1)) >= int0)) {  // fmc_wave_progress:bar_fill
        IF_SETONTIMER(callback(), comp(1198, 8));  // fmc_wave_progress:filling
    } else {
        IF_SETSIZE((IF_GETWIDTH(comp(1198, 1)) + 1), IF_GETHEIGHT(comp(1198, 1)), 0, 0, comp(1198, 1));  // fmc_wave_progress:bar_fill
    };
    return;
}