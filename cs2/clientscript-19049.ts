//
function script19049(int0: number, int1: number): void {
    if ((CLIENTCLOCK() > int0)) {
        if ((int1 == 1)) {
            IF_SETHIDE(true, comp(1014, 48));  // trh183_overlay:firework_set_1
        } else {
            IF_SETHIDE(true, comp(1014, 101));  // trh183_overlay:firework_set_2
        };
    };
    return;
}