//
function script19048(int0: number, int1: number): void {
    if ((CLIENTCLOCK() > int0)) {
        if ((int1 == 1)) {
            IF_SETHIDE(false, comp(1014, 48));  // trh183_overlay:firework_set_1
            IF_SETONTIMER(callback(script19049, (CLIENTCLOCK() + 36), int1), comp(1014, 46));  // trh183_overlay:firework_layer_1
        } else {
            IF_SETHIDE(false, comp(1014, 101));  // trh183_overlay:firework_set_2
            IF_SETONTIMER(callback(script19049, (CLIENTCLOCK() + 36), int1), comp(1014, 47));  // trh183_overlay:firework_layer_2
        };
    };
    return;
}