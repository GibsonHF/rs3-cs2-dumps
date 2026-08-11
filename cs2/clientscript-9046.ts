//
function script9046(): void {
    varclient_6746 = 0;
    IF_TRIGGEROP(comp(1253, 556), -1, 4);  // wheel_of_fortune:fake_op
    IF_SETHIDE(true, comp(644, 1));  // trh167_overlay:skip_animation_layer
    IF_SETONTIMER(callback(), comp(1253, 0));  // wheel_of_fortune:main_layer
    IF_SETHIDE(true, comp(644, 2));  // trh167_overlay:crystal_layer
    IF_SETHIDE(false, comp(644, 10));  // trh167_overlay:prize_layer
    return;
}