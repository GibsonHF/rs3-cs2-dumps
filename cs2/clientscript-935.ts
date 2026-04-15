//
function script935(int0: obj): unknown_int {
    switch (item_getparam(int0, 762)) {
        case 1: {
            if ((varplayer_2525 < 10)) {
                return 0;
            };
            break;
        }
        case 2: {
            if ((varbitplayer_15344 < 10)) {
                return 0;
            };
            break;
        }
        default: {
            return 1;
        }
    };
    return -1;
}