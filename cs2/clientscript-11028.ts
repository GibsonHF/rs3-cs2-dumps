//
function script11028(int0: int, int1: component): void {
    var int2 = 0;
    if ((varbitplayer_52330 == 0)) {
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int0, int1, 250), int1);
        IF_SETMODEL(126627, int1);
        return;
    };
    IF_SETMODEL(134024 as model, int1);
    switch (int0) {
        case 1: {
            if ((varbitplayer_55835 == 1)) {
                int2 = 1;
            } else {
                int2 = 0;
            };
            break;
        }
        case 2: {
            if ((varbitplayer_55836 == 1)) {
                int2 = 1;
            } else {
                int2 = 0;
            };
            break;
        }
        case 3: {
            if ((varbitplayer_55837 == 1)) {
                int2 = 1;
            } else {
                int2 = 0;
            };
            break;
        }
        default: {
            script12478("Unknown chest index when setting up chests for trh183.");
            break;
        }
    };
    if ((int2 == 1)) {
        IF_SETMODELANIM(22645 as seq, int1);
        IF_SETONTIMER(callback(), int1);
    } else {
        IF_SETMODELANIM(34955 as seq, int1);
        IF_SETONTIMER(callback(script16715, CLIENTCLOCK(), int0, int1, 250), int1);
    };
    return;
}