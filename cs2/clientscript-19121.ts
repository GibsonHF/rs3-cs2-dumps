//
function script19121(): void {
    var int0 = (22 + RANDOM(72));
    IF_SETMODELANIM(22645 as seq, comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETONTIMER(callback(script9683, 82116639, int0), comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETONTIMER(callback(), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETONMOUSEOVER(callback(script9685, 82116639), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETONMOUSELEAVE(callback(script9686, 82116639), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETSIZE(435, 400, 0, 0, comp(1253, 30));  // wheel_of_fortune:chest_layer_1
    IF_SETPOSITION(60, 178, 0, 0, comp(1253, 30));  // wheel_of_fortune:chest_layer_1
    IF_SETPOSITION(55, 0, 0, 0, comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETSIZE(330, 200, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
    IF_SETPOSITION(80, 0, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
    return;
}