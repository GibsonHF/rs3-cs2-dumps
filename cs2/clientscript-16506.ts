//
function script16506(): void {
    var int0 = 0;
    IF_SETMODELANIM(22645 as seq, comp(1253, 31));  // wheel_of_fortune:chest_model_1
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116639, int0), comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETONTIMER(callback(), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETONMOUSEOVER(callback(script9685, 82116639), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETONMOUSELEAVE(callback(script9686, 82116639), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETMODELANIM(22645 as seq, comp(1253, 21));  // wheel_of_fortune:chest_model_2
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116629, int0), comp(1253, 21));  // wheel_of_fortune:chest_model_2
    IF_SETONTIMER(callback(), comp(1253, 23));  // wheel_of_fortune:wheel_spin_button_active_layer_2
    IF_SETONMOUSEOVER(callback(script9685, 82116629), comp(1253, 23));  // wheel_of_fortune:wheel_spin_button_active_layer_2
    IF_SETONMOUSELEAVE(callback(script9686, 82116629), comp(1253, 23));  // wheel_of_fortune:wheel_spin_button_active_layer_2
    IF_SETMODELANIM(22645 as seq, comp(1253, 26));  // wheel_of_fortune:chest_model_3
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116634, int0), comp(1253, 26));  // wheel_of_fortune:chest_model_3
    IF_SETONTIMER(callback(), comp(1253, 28));  // wheel_of_fortune:wheel_spin_button_active_layer_3
    IF_SETONMOUSEOVER(callback(script9685, 82116634), comp(1253, 28));  // wheel_of_fortune:wheel_spin_button_active_layer_3
    IF_SETONMOUSELEAVE(callback(script9686, 82116634), comp(1253, 28));  // wheel_of_fortune:wheel_spin_button_active_layer_3
    IF_SETMODELANIM(22645 as seq, comp(1253, 16));  // wheel_of_fortune:chest_model_4
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116624, int0), comp(1253, 16));  // wheel_of_fortune:chest_model_4
    IF_SETONTIMER(callback(), comp(1253, 18));  // wheel_of_fortune:wheel_spin_button_active_layer_4
    IF_SETONMOUSEOVER(callback(script9685, 82116624), comp(1253, 18));  // wheel_of_fortune:wheel_spin_button_active_layer_4
    IF_SETONMOUSELEAVE(callback(script9686, 82116624), comp(1253, 18));  // wheel_of_fortune:wheel_spin_button_active_layer_4
    IF_SETMODELANIM(22645 as seq, comp(1253, 11));  // wheel_of_fortune:chest_model_5
    int0 = (22 + RANDOM(72));
    IF_SETONTIMER(callback(script9683, 82116619, int0), comp(1253, 11));  // wheel_of_fortune:chest_model_5
    IF_SETONTIMER(callback(), comp(1253, 13));  // wheel_of_fortune:wheel_spin_button_active_layer_5
    IF_SETONMOUSEOVER(callback(script9685, 82116619), comp(1253, 13));  // wheel_of_fortune:wheel_spin_button_active_layer_5
    IF_SETONMOUSELEAVE(callback(script9686, 82116619), comp(1253, 13));  // wheel_of_fortune:wheel_spin_button_active_layer_5
    return;
}