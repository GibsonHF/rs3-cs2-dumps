//
function script4092(int0: number): void {
    var int1 = IF_GETTRANS(comp(1202, 0));  // fmc_darkness:black
    if ((int1 < (30 + (int0 - 1)))) {
        IF_SETTRANS(30, comp(1202, 0));  // fmc_darkness:black
        IF_SETTRANS(20, comp(1202, 2));  // fmc_darkness:fade
        IF_SETONTIMER(callback(), comp(1202, 0));  // fmc_darkness:black
        return;
    };
    IF_SETTRANS((int1 - int0), comp(1202, 0));  // fmc_darkness:black
    IF_SETTRANS(((int1 - int0) / 2), comp(1202, 2));  // fmc_darkness:fade
    return;
}