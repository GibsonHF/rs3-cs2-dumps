//
function script12234(int0: struct): void {
    var int1 = IF_GETWIDTH(struct_getparam(int0, 8150));
    var int2 = IF_GETWIDTH(struct_getparam(int0, 8153));
    var int3 = IF_GETWIDTH(struct_getparam(int0, 8142));
    var int4 = (int1 - ((int2 + int3) + 4));
    var int5 = script6431();
    if ((int1 < 108)) {
        IF_SETHIDE(true, struct_getparam(int0, 8141));
        IF_SETHIDE(true, struct_getparam(int0, 8142));
        IF_SETHIDE(false, struct_getparam(int0, 8153));
        IF_SETPOSITION(0, 0, 1, 1, struct_getparam(int0, 8153));
        IF_SETSIZE(0, 0, 1, 1, struct_getparam(int0, 8153));
        script11993(struct_getparam(int0, 8154), 0);
    } else if (((int1 >= 108) && (int5 == false))) {
        IF_SETHIDE(true, struct_getparam(int0, 8141));
        IF_SETHIDE(false, struct_getparam(int0, 8142));
        IF_SETHIDE(false, struct_getparam(int0, 8153));
        IF_SETPOSITION(4, 0, 2, 1, struct_getparam(int0, 8153));
        IF_SETSIZE(65, 0, 0, 1, struct_getparam(int0, 8153));
        script11993(struct_getparam(int0, 8154), 0);
    } else if ((int5 == true)) {
        IF_SETHIDE(false, struct_getparam(int0, 8141));
        IF_SETPOSITION(-14, 0, 1, 1, struct_getparam(int0, 8141));
        IF_SETSIZE(int4, 0, 0, 1, struct_getparam(int0, 8141));
        if ((varbitplayer_45116 == 1)) {
            switch (varbitplayer_16789) {
                case 0: {
                    IF_SETTEXT("Active Prayers", struct_getparam(int0, 8141));
                    break;
                }
                case 1: {
                    IF_SETTEXT("Active Curses", struct_getparam(int0, 8141));
                    break;
                }
            };
        } else {
            switch (varbitplayer_16789) {
                case 0: {
                    IF_SETTEXT("Prayers", struct_getparam(int0, 8141));
                    break;
                }
                case 1: {
                    IF_SETTEXT("Curses", struct_getparam(int0, 8141));
                    break;
                }
            };
        };
        IF_SETHIDE(false, struct_getparam(int0, 8142));
        IF_SETHIDE(false, struct_getparam(int0, 8153));
        IF_SETPOSITION(4, 0, 2, 1, struct_getparam(int0, 8153));
        IF_SETSIZE(65, 0, 0, 1, struct_getparam(int0, 8153));
        script11993(struct_getparam(int0, 8154), 0);
    } else {
        IF_SETHIDE(true, struct_getparam(int0, 8141));
        IF_SETHIDE(true, struct_getparam(int0, 8142));
        IF_SETHIDE(true, struct_getparam(int0, 8153));
    };
    return;
}