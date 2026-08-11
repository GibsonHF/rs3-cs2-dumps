//
function script2900(int0: number): void {
    if ((CLIENTCLOCK() > (int0 + 200))) {
        IF_SETONTIMER(callback(), comp(476, 58));  // sfa:aggro_warning
        IF_SETHIDE(true, comp(476, 58));  // sfa:aggro_warning
    } else if ((CLIENTCLOCK() > (int0 + 150))) {
        IF_SETTRANS(MIN((IF_GETTRANS(comp(476, 58)) + 10), 255), comp(476, 58));  // sfa:aggro_warning
    };
    return;
}