//
function script6567(): void {
    if (((varclient_1781 <= 0) || (varclient_1781 > 5))) {
        return;
    };
    IF_SETONMOUSEOVER(callback(), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETONMOUSELEAVE(callback(), comp(1253, 33));  // wheel_of_fortune:wheel_spin_button_active_layer_1
    IF_SETONMOUSEOVER(callback(), comp(1253, 23));  // wheel_of_fortune:wheel_spin_button_active_layer_2
    IF_SETONMOUSELEAVE(callback(), comp(1253, 23));  // wheel_of_fortune:wheel_spin_button_active_layer_2
    IF_SETONMOUSEOVER(callback(), comp(1253, 28));  // wheel_of_fortune:wheel_spin_button_active_layer_3
    IF_SETONMOUSELEAVE(callback(), comp(1253, 28));  // wheel_of_fortune:wheel_spin_button_active_layer_3
    IF_SETONMOUSEOVER(callback(), comp(1253, 18));  // wheel_of_fortune:wheel_spin_button_active_layer_4
    IF_SETONMOUSELEAVE(callback(), comp(1253, 18));  // wheel_of_fortune:wheel_spin_button_active_layer_4
    IF_SETONMOUSEOVER(callback(), comp(1253, 13));  // wheel_of_fortune:wheel_spin_button_active_layer_5
    IF_SETONMOUSELEAVE(callback(), comp(1253, 13));  // wheel_of_fortune:wheel_spin_button_active_layer_5
    IF_SETMODELANIM(22652 as seq, comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETMODELANIM(22652 as seq, comp(1253, 21));  // wheel_of_fortune:chest_model_2
    IF_SETMODELANIM(22652 as seq, comp(1253, 26));  // wheel_of_fortune:chest_model_3
    IF_SETMODELANIM(22652 as seq, comp(1253, 16));  // wheel_of_fortune:chest_model_4
    IF_SETMODELANIM(22652 as seq, comp(1253, 11));  // wheel_of_fortune:chest_model_5
    IF_SETONTIMER(callback(), comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETONTIMER(callback(), comp(1253, 21));  // wheel_of_fortune:chest_model_2
    IF_SETONTIMER(callback(), comp(1253, 26));  // wheel_of_fortune:chest_model_3
    IF_SETONTIMER(callback(), comp(1253, 16));  // wheel_of_fortune:chest_model_4
    IF_SETONTIMER(callback(), comp(1253, 11));  // wheel_of_fortune:chest_model_5
    var int0 = script16161();
    if ((varbitplayer_25803 == 1)) {
        script6976();
    } else if ((varclient_4083 == 2)) {
        varclient_4083 = 3;
        if ((int0 != -1)) {
            if ((struct_getparam(int0, 8676) == true)) {
                script16776(script16774(int0));
            } else {
                switch (varclient_1928) {
                    case 34: {
                        IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));  // wheel_of_fortune:main_layer
                        break;
                    }
                    case 54: {
                        if ((varbitplayer_47441 == 1)) {
                            IF_SETMODELANIM(33402 as seq, comp(696, 5));  // trh169_overlay:trh169_slime_model
                            IF_SETONTIMER(callback(script5898, -2147483645, 60), comp(1253, 0));  // wheel_of_fortune:main_layer
                        } else {
                            IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));  // wheel_of_fortune:main_layer
                        };
                        break;
                    }
                    case 56:
                    case 60: {
                        IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));  // wheel_of_fortune:main_layer
                        break;
                    }
                    default: {
                        IF_SETONTIMER(callback(script5898, -2147483645, 0), comp(1253, 0));  // wheel_of_fortune:main_layer
                        break;
                    }
                };
            };
        } else {
            switch (varclient_1928) {
                case 34: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));  // wheel_of_fortune:main_layer
                    break;
                }
                case 54: {
                    if ((varbitplayer_47441 == 1)) {
                        IF_SETMODELANIM(33402 as seq, comp(696, 5));  // trh169_overlay:trh169_slime_model
                        IF_SETONTIMER(callback(script5898, -2147483645, 60), comp(1253, 0));  // wheel_of_fortune:main_layer
                    } else {
                        IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));  // wheel_of_fortune:main_layer
                    };
                    break;
                }
                case 56:
                case 60: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));  // wheel_of_fortune:main_layer
                    break;
                }
                default: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 0), comp(1253, 0));  // wheel_of_fortune:main_layer
                    break;
                }
            };
        };
    };
    script9123();
    script1545();
    script16198(0, 82116873);
    return;
}