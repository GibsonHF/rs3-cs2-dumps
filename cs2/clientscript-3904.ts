//
function script3904(): void {
    if (((IF_GETHIDE(comp(1253, 447) /*wheel_of_fortune:trh_promo_info*/) == false) || (IF_GETHIDE(comp(1253, 459) /*wheel_of_fortune:splash_screen*/) == false))) {
        IF_SETHIDE(true, comp(1253, 35));  // wheel_of_fortune:banner_layer
        return;
    };
    IF_SETHIDE(false, comp(1253, 35));  // wheel_of_fortune:banner_layer
    CC_DELETEALL(comp(1253, 3));  // wheel_of_fortune:background_holder
    if ((script15513() == 38726)) {
        IF_SETHIDE(false, comp(1253, 516));  // wheel_of_fortune:full_overlay_layer
        IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
    };
    if ((script18808() == 0)) {
        IF_SETHIDE(true, comp(1253, 516));  // wheel_of_fortune:full_overlay_layer
    };
    var int0 = script16161();
    if ((struct_getparam(int0, 8207) == 0)) {
        if ((script18373() == 1)) {
            IF_SETHIDE(true, comp(1253, 38));  // wheel_of_fortune:frame
            IF_SETHIDE(false, comp(1253, 39));  // wheel_of_fortune:frame_xmas
        };
        IF_SETSIZE(40, 248, 1, 1, comp(1253, 515));  // wheel_of_fortune:overlay_layer
        IF_SETSIZE(758, 356, 0, 0, comp(1253, 35));  // wheel_of_fortune:banner_layer
        IF_SETPOSITION(0, 100, 1, 0, comp(1253, 35));  // wheel_of_fortune:banner_layer
    } else {
        IF_SETGRAPHIC(12567 as graphic, comp(1253, 38));  // wheel_of_fortune:frame
        IF_SETSIZE(40, 223, 1, 1, comp(1253, 515));  // wheel_of_fortune:overlay_layer
        IF_SETSIZE(758, 375, 0, 0, comp(1253, 35));  // wheel_of_fortune:banner_layer
        IF_SETPOSITION(0, 105, 1, 0, comp(1253, 35));  // wheel_of_fortune:banner_layer
    };
    script4751();
    script7780();
    if ((int0 != -1)) {
        IF_SETGRAPHIC(struct_getparam(int0, 8206), comp(1253, 5));  // wheel_of_fortune:background
        if ((struct_getparam(int0, 8712) == true)) {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
        };
    };
    switch (varclient_1928) {
        case 43: {
            IF_SETGRAPHIC(15372 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 37: {
            IF_SETGRAPHIC(11658 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            if ((script830() == 0)) {
                if ((IF_GETHIDE(comp(1253, 91)) == true)) {  // wheel_of_fortune:play_again_layer
                    IF_SETHIDE(false, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
                };
            } else {
                IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            };
            break;
        }
        case 7:
        case 9: {
            IF_SETGRAPHIC(380 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETMODELANIM(22645 as seq, comp(1620, 15));  // trh54_guaranteed_quality:chest_1_model
            IF_SETMODELANIM(22645 as seq, comp(1620, 40));  // trh54_guaranteed_quality:chest_2_model
            IF_SETMODELANIM(22645 as seq, comp(1620, 42));  // trh54_guaranteed_quality:chest_3_model
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 8: {
            script11671();
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETGRAPHIC(7404 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 11: {
            if ((IF_GETHIDE(comp(1253, 447)) == false)) {  // wheel_of_fortune:trh_promo_info
                IF_SETGRAPHIC(21204 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            } else {
                IF_SETGRAPHIC(33403 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            };
            IF_SETMODEL(69044 as model, comp(1253, 31));  // wheel_of_fortune:chest_model_1
            IF_SETMODEL(69044 as model, comp(1253, 21));  // wheel_of_fortune:chest_model_2
            IF_SETMODEL(69044 as model, comp(1253, 26));  // wheel_of_fortune:chest_model_3
            IF_SETMODEL(69044 as model, comp(1253, 16));  // wheel_of_fortune:chest_model_4
            IF_SETMODEL(69044 as model, comp(1253, 11));  // wheel_of_fortune:chest_model_5
            break;
        }
        case 39: {
            IF_SETGRAPHIC(143 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 13: {
            IF_SETGRAPHIC(3825 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 14: {
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 15: {
            if ((varbitplayer_4323 > 0)) {
                IF_SETHIDE(true, comp(1253, 35));  // wheel_of_fortune:banner_layer
            } else {
                IF_SETHIDE(false, comp(1253, 35));  // wheel_of_fortune:banner_layer
            };
            if ((script11747(42706) == 1)) {
                if ((IF_GETHIDE(comp(1253, 447)) == false)) {  // wheel_of_fortune:trh_promo_info
                    IF_SETGRAPHIC(21204 as graphic, comp(1253, 5));  // wheel_of_fortune:background
                } else {
                    IF_SETGRAPHIC(33403 as graphic, comp(1253, 5));  // wheel_of_fortune:background
                };
                IF_SETMODEL(69044 as model, comp(1253, 31));  // wheel_of_fortune:chest_model_1
                IF_SETMODEL(69044 as model, comp(1253, 21));  // wheel_of_fortune:chest_model_2
                IF_SETMODEL(69044 as model, comp(1253, 26));  // wheel_of_fortune:chest_model_3
                IF_SETMODEL(69044 as model, comp(1253, 16));  // wheel_of_fortune:chest_model_4
                IF_SETMODEL(69044 as model, comp(1253, 11));  // wheel_of_fortune:chest_model_5
            };
            break;
        }
        case 18: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script3595();
            break;
        }
        case 19: {
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 20:
        case 29:
        case 41:
        case 57:
        case 84: {
            script19019(int0);
            break;
        }
        case 23: {
            IF_SETHIDE(false, comp(1253, 35));  // wheel_of_fortune:banner_layer
            break;
        }
        case 24: {
            IF_SETGRAPHIC(7663 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 22: {
            break;
        }
        case 35: {
            IF_SETGRAPHIC(12554 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 28: {
            IF_SETHIDE(false, comp(1253, 35));  // wheel_of_fortune:banner_layer
            IF_SETGRAPHIC(142 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 32: {
            IF_SETGRAPHIC(11000 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 30: {
            IF_SETGRAPHIC(31685 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 33: {
            IF_SETGRAPHIC(33384 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 34: {
            script2497();
            IF_SETMODELANIM(32517 as seq, comp(35, 27));  // trh153_overlay:chest_1_model
            IF_SETMODELANIM(32517 as seq, comp(35, 12));  // trh153_overlay:chest_2_model
            IF_SETMODELANIM(32517 as seq, comp(35, 29));  // trh153_overlay:chest_3_model
            IF_SETMODELANIM(32517 as seq, comp(35, 10));  // trh153_overlay:chest_4_model
            break;
        }
        case 36: {
            IF_SETMODELANIM(22645 as seq, comp(19, 2));  // trh154_overlay:chest_1_model
            IF_SETMODELANIM(22645 as seq, comp(19, 7));  // trh154_overlay:chest_2_model
            IF_SETMODELANIM(22645 as seq, comp(19, 9));  // trh154_overlay:chest_3_model
            IF_SETGRAPHIC(11665 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 38: {
            IF_SETHIDE(false, comp(1253, 35));  // wheel_of_fortune:banner_layer
            script11536();
            break;
        }
        case 40: {
            IF_SETGRAPHIC(152 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 42: {
            IF_SETGRAPHIC(456 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 44: {
            IF_SETGRAPHIC(1136 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 45: {
            IF_SETGRAPHIC(1204 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 46: {
            script4427();
            break;
        }
        case 48: {
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(true, comp(1253, 30));  // wheel_of_fortune:chest_layer_1
            IF_SETGRAPHIC(10941 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETPOSITION(-5, 5, 0, 0, comp(1253, 9));  // wheel_of_fortune:midground_layer
            break;
        }
        case 47: {
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETPOSITION(0, -18, 0, 0, comp(1253, 9));  // wheel_of_fortune:midground_layer
            script4579(varbitplayer_28986);
            break;
        }
        case 49: {
            IF_SETPOSITION(-5, 5, 0, 0, comp(1253, 9));  // wheel_of_fortune:midground_layer
            break;
        }
        case 51: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETGRAPHIC(9296 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 52: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETGRAPHIC(9729 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 53: {
            script19063(script734(script19061()));
            break;
        }
        case 54: {
            varbitplayer_47441 = 0;
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETGRAPHIC(1507 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 55: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETGRAPHIC(11008 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 56: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETGRAPHIC(10347 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 59: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 60: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETGRAPHIC(18212 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            break;
        }
        case 61: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script11757();
            break;
        }
        case 62: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script16355();
            break;
        }
        case 63: {
            IF_SETGRAPHIC(33532 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 64: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script16485();
            script16495();
            break;
        }
        case 65: {
            IF_SETONVARTRANSMIT(callback(script16624, 10445, 1), comp(1253, 3));  // wheel_of_fortune:background_holder
            script16614();
            break;
        }
        case 66: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script16521();
            break;
        }
        case 67: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 68: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script19172(32986);
            break;
        }
        case 69: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script16712();
            break;
        }
        case 71: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETPOSITION(121, 40, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
            IF_SETSIZE(165, 145, 0, 0, comp(1253, 32));  // wheel_of_fortune:wheel_spin_button_layer_1
            script16667();
            break;
        }
        case 72: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 73: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 75: {
            script19026();
            break;
        }
        case 76: {
            script17715();
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 78: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 79: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script13003();
            script17412();
            break;
        }
        case 82: {
            IF_SETGRAPHIC(32447 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 83: {
            script18829();
            break;
        }
        case 87: {
            IF_SETSIZE(760, 356, 0, 0, comp(1253, 35));  // wheel_of_fortune:banner_layer
            script19267();
            break;
        }
        case 88: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script19172(50263);
            break;
        }
        case 89: {
            script19730();
            IF_SETHIDE(true, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
        case 90: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script19800();
            break;
        }
        case 91: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script19172(2951);
            break;
        }
        case 92: {
            IF_SETGRAPHIC(26441 as graphic, comp(1253, 5));  // wheel_of_fortune:background
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            break;
        }
        case 93: {
            IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
            script20041();
            break;
        }
        default: {
            IF_SETHIDE(false, comp(1253, 89));  // wheel_of_fortune:foreground_layer
            break;
        }
    };
    return;
}