//
function script19047(): void {
    IF_TRIGGEROP(comp(1253, 556), 0, 5);  // wheel_of_fortune:fake_op
    IF_SETONTIMER(callback(script19048, (CLIENTCLOCK() + 25), 1), comp(1014, 46));  // trh183_overlay:firework_layer_1
    IF_SETONTIMER(callback(script19048, (CLIENTCLOCK() + 45), 2), comp(1014, 47));  // trh183_overlay:firework_layer_2
    return;
}