//
function script19045(int0: number, int1: number): void {
    if (((int0 == -1) || ((CLIENTCLOCK() - int0) >= int1))) {
        IF_TRIGGEROP(comp(1253, 556), 0, 4);  // wheel_of_fortune:fake_op
        IF_SETONTIMER(callback(), comp(1014, 37));  // trh183_overlay:chest_layer
    };
    return;
}