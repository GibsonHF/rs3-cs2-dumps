//
function script10671(int0: number): void {
    IF_SETONTIMER(callback(), comp(1542, 26));  // hw14_overlay:hw14_fear_flash
    if ((int0 == 1)) {
        IF_SETCOLOUR(16711680, comp(1542, 26));  // hw14_overlay:hw14_fear_flash
    } else {
        IF_SETCOLOUR(65280, comp(1542, 26));  // hw14_overlay:hw14_fear_flash
    };
    IF_SETTRANS(0, comp(1542, 26));  // hw14_overlay:hw14_fear_flash
    IF_SETONTIMER(callback(script10670, 101056538), comp(1542, 26));  // hw14_overlay:hw14_fear_flash
    return;
}