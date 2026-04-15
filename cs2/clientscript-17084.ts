//
function script17084(int0: unknown_int): void {
    var int1 = varbitplayer_52406;
    switch (int0) {
        case 106561555: {
            varbitplayer_52406 = 0;
            break;
        }
        case 106561616: {
            varbitplayer_52406 = 1;
            break;
        }
        case 106561618: {
            varbitplayer_52406 = 2;
            break;
        }
        case 106561620: {
            varbitplayer_52406 = 3;
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 == varbitplayer_52406)) {
        script17088(script12799(script12795(), 1, 0, varbitplayer_1675));
        return;
    };
    switch (int1) {
        case 0:
        case 1: {
            if (((varbitplayer_52406 == 2) || (varbitplayer_52406 == 3))) {
                varbitplayer_28117 = 1;
            };
            break;
        }
        case 2:
        case 3: {
            varbitplayer_28117 = 1;
            break;
        }
    };
    script11454();
    return;
}