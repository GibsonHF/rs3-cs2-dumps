//
function script6566(): void {
    script3915();
    if (((varbitplayer_4321 == 1) || (varbitplayer_25803 == 1))) {
        script6567();
        return;
    };
    if (((varclient_1781 <= 0) || (varclient_1781 > 5))) {
        if ((IF_GETHIDE(comp(1253, 8)) == true)) {  // wheel_of_fortune:chests_layer
            if (((script11747(33217) == 1) || (script11747(34277) == 1))) {
                return;
            };
            varbitplayer_4323 = 0;
            script6978();
        };
        return;
    };
    script1545();
    script9123();
    if ((varbitplayer_4323 <= 0)) {
        return;
    };
    script16198(0, 82116873);
    if ((varclient_4083 == 3)) {
        return;
    };
    varclient_4083 = 3;
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = -1 as struct;
    var int3 = -1 as seq;
    var int4 = 0;
    switch (varclient_1781) {
        case 1: {
            int0 = comp(1253, 31);  // wheel_of_fortune:chest_model_1
            int1 = comp(1253, 33);  // wheel_of_fortune:wheel_spin_button_active_layer_1
            break;
        }
        case 2: {
            int0 = comp(1253, 21);  // wheel_of_fortune:chest_model_2
            int1 = comp(1253, 23);  // wheel_of_fortune:wheel_spin_button_active_layer_2
            break;
        }
        case 3: {
            int0 = comp(1253, 26);  // wheel_of_fortune:chest_model_3
            int1 = comp(1253, 28);  // wheel_of_fortune:wheel_spin_button_active_layer_3
            break;
        }
        case 4: {
            int0 = comp(1253, 16);  // wheel_of_fortune:chest_model_4
            int1 = comp(1253, 18);  // wheel_of_fortune:wheel_spin_button_active_layer_4
            break;
        }
        case 5: {
            int0 = comp(1253, 11);  // wheel_of_fortune:chest_model_5
            int1 = comp(1253, 13);  // wheel_of_fortune:wheel_spin_button_active_layer_5
            break;
        }
        default: {
            int0 = comp(1253, 31);  // wheel_of_fortune:chest_model_1
            int1 = comp(1253, 33);  // wheel_of_fortune:wheel_spin_button_active_layer_1
            break;
        }
    };
    switch (varclient_4077) {
        case 1: {
            int3 = 22647 as seq;
            break;
        }
        case 2: {
            int3 = 22648 as seq;
            break;
        }
        case 3: {
            int3 = 22649 as seq;
            break;
        }
        case 4: {
            int3 = 22650 as seq;
            break;
        }
        case 5: {
            int3 = 22651 as seq;
            break;
        }
        case 6: {
            int3 = 22651 as seq;
            break;
        }
        case 7: {
            int3 = 22651 as seq;
            break;
        }
        default: {
            int3 = 22647 as seq;
            break;
        }
    };
    int4 = (300 - SEQLENGTH(int3));
    switch (varclient_1928) {
        case 6: {
            switch (varclient_1781) {
                case 1: {
                    int0 = comp(1585, 20);  // trh45_overlay:chest_model_1
                    int1 = comp(1585, 22);  // trh45_overlay:wheel_spin_button_active_layer_1
                    break;
                }
                case 2: {
                    int0 = comp(1585, 29);  // trh45_overlay:chest_model_2
                    int1 = comp(1585, 31);  // trh45_overlay:wheel_spin_button_active_layer_2
                    break;
                }
                case 3: {
                    int0 = comp(1585, 24);  // trh45_overlay:chest_model_3
                    int1 = comp(1585, 26);  // trh45_overlay:wheel_spin_button_active_layer_3
                    break;
                }
                case 4: {
                    int0 = comp(1585, 14);  // trh45_overlay:chest_model_4
                    int1 = comp(1585, 17);  // trh45_overlay:wheel_spin_button_active_layer_4
                    break;
                }
                case 5: {
                    int0 = comp(1585, 10);  // trh45_overlay:chest_model_5
                    int1 = comp(1585, 12);  // trh45_overlay:wheel_spin_button_active_layer_5
                    break;
                }
                case 6: {
                    int0 = comp(1585, 6);  // trh45_overlay:chest_model_6
                    int1 = comp(1585, 33);  // trh45_overlay:wheel_spin_button_active_layer_6
                    break;
                }
                default: {
                    int0 = comp(1585, 20);  // trh45_overlay:chest_model_1
                    int1 = comp(1585, 22);  // trh45_overlay:wheel_spin_button_active_layer_1
                    break;
                }
            };
            break;
        }
        case 34: {
            switch (varbitplayer_42991) {
                case 1: {
                    int0 = comp(35, 27);  // trh153_overlay:chest_1_model
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42981);
                    break;
                }
                case 2: {
                    int0 = comp(35, 12);  // trh153_overlay:chest_2_model
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42982);
                    break;
                }
                case 3: {
                    int0 = comp(35, 29);  // trh153_overlay:chest_3_model
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42983);
                    break;
                }
                case 4: {
                    int0 = comp(35, 10);  // trh153_overlay:chest_4_model
                    int2 = enum_getvalue(0, 73, 1932 as cs2enum, varbitplayer_42984);
                    break;
                }
                default: {
                    IF_SETONTIMER(callback(script5898, -2147483645, 300), comp(1253, 0));  // wheel_of_fortune:main_layer
                    return;
                }
            };
            int1 = int0;
            int3 = struct_getparam(int2, 7753);
            int4 = (300 - SEQLENGTH(int3));
            break;
        }
        case 36: {
            switch (varbitplayer_43348) {
                case 1: {
                    int0 = comp(19, 2);  // trh154_overlay:chest_1_model
                    int1 = comp(19, 3);  // trh154_overlay:chest_1_click
                    break;
                }
                case 2: {
                    int0 = comp(19, 7);  // trh154_overlay:chest_2_model
                    int1 = comp(19, 8);  // trh154_overlay:chest_2_click
                    break;
                }
                case 3: {
                    int0 = comp(19, 9);  // trh154_overlay:chest_3_model
                    int1 = comp(19, 10);  // trh154_overlay:chest_3_click
                    break;
                }
                default: {
                    int0 = comp(19, 7);  // trh154_overlay:chest_2_model
                    int1 = comp(19, 8);  // trh154_overlay:chest_2_click
                    break;
                }
            };
            break;
        }
        case 54: {
            if ((varbitplayer_47441 == 1)) {
                int3 = 33402 as seq;
                int0 = comp(696, 5);  // trh169_overlay:trh169_slime_model
                int4 = 60;
            } else {
                int4 = 300;
            };
            break;
        }
        case 56:
        case 60: {
            int4 = 300;
            break;
        }
    };
    IF_SETMODELANIM(22645 as seq, comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETMODELANIM(22645 as seq, comp(1253, 21));  // wheel_of_fortune:chest_model_2
    IF_SETMODELANIM(22645 as seq, comp(1253, 26));  // wheel_of_fortune:chest_model_3
    IF_SETMODELANIM(22645 as seq, comp(1253, 16));  // wheel_of_fortune:chest_model_4
    IF_SETMODELANIM(22645 as seq, comp(1253, 11));  // wheel_of_fortune:chest_model_5
    IF_SETMODELANIM(22645 as seq, comp(1585, 20));  // trh45_overlay:chest_model_1
    IF_SETMODELANIM(22645 as seq, comp(1585, 29));  // trh45_overlay:chest_model_2
    IF_SETMODELANIM(22645 as seq, comp(1585, 24));  // trh45_overlay:chest_model_3
    IF_SETMODELANIM(22645 as seq, comp(1585, 14));  // trh45_overlay:chest_model_4
    IF_SETMODELANIM(22645 as seq, comp(1585, 10));  // trh45_overlay:chest_model_5
    IF_SETMODELANIM(22645 as seq, comp(1585, 6));  // trh45_overlay:chest_model_6
    IF_SETONTIMER(callback(), comp(1253, 31));  // wheel_of_fortune:chest_model_1
    IF_SETONTIMER(callback(), comp(1253, 21));  // wheel_of_fortune:chest_model_2
    IF_SETONTIMER(callback(), comp(1253, 26));  // wheel_of_fortune:chest_model_3
    IF_SETONTIMER(callback(), comp(1253, 16));  // wheel_of_fortune:chest_model_4
    IF_SETONTIMER(callback(), comp(1253, 11));  // wheel_of_fortune:chest_model_5
    IF_SETONTIMER(callback(), comp(1585, 20));  // trh45_overlay:chest_model_1
    IF_SETONTIMER(callback(), comp(1585, 29));  // trh45_overlay:chest_model_2
    IF_SETONTIMER(callback(), comp(1585, 24));  // trh45_overlay:chest_model_3
    IF_SETONTIMER(callback(), comp(1585, 14));  // trh45_overlay:chest_model_4
    IF_SETONTIMER(callback(), comp(1585, 10));  // trh45_overlay:chest_model_5
    IF_SETONTIMER(callback(), comp(1585, 6));  // trh45_overlay:chest_model_6
    IF_SETONMOUSEOVER(callback(), int1);
    IF_SETONMOUSELEAVE(callback(), int1);
    IF_SETMODELANIM(int3, int0);
    var int5 = script16161();
    if ((int5 != -1)) {
        if ((struct_getparam(int5, 8676) == true)) {
            script16776(script16774(int5));
        } else {
            IF_SETONTIMER(callback(script5898, -2147483645, int4), comp(1253, 0));  // wheel_of_fortune:main_layer
        };
    } else {
        IF_SETONTIMER(callback(script5898, -2147483645, int4), comp(1253, 0));  // wheel_of_fortune:main_layer
    };
    return;
}