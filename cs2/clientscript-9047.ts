//
function script9047(int0: number, int1: number): void {
    IF_SETMODELANIM(32989 as seq, int0);
    var int2 = (RANDOM(72) + 22);
    IF_SETONTIMER(callback(script9072, int0, int2, int1), int0);
    IF_SETONTIMER(callback(), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETONMOUSEOVER(callback(script9073, int0, int1), int0);
    IF_SETONMOUSELEAVE(callback(script9216, int0, int1), int0);
    return;
}