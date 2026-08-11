//
function script6856(): void {
    IF_SETTRANS(255, comp(1355, 0));  // ozan2_sunblind:whiteout
    IF_SETMODEL(76808 as model, comp(1355, 1));  // ozan2_sunblind:lens_flare
    IF_SETONTIMER(callback(script6857, CLIENTCLOCK(), 88801280, 1), comp(1355, 0));  // ozan2_sunblind:whiteout
    return;
}