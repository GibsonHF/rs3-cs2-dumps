//
function script4093(): void {
    var int0 = IF_GETTRANS(comp(1199, 0));  // fmc_torch:black
    if ((int0 < 11)) {
        IF_SETTRANS(10, comp(1199, 0));  // fmc_torch:black
        IF_SETTRANS(20, comp(1199, 13));  // fmc_torch:fade
        IF_SETONTIMER(callback(), comp(1199, 0));  // fmc_torch:black
        return;
    };
    IF_SETTRANS((int0 - 10), comp(1199, 0));  // fmc_torch:black
    IF_SETTRANS(((int0 - 10) / 2), comp(1199, 13));  // fmc_torch:fade
    return;
}