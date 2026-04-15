//
function script3598(int0: unknown_int): unknown_int {
    switch (int0) {
        case 2360: {
            if ((varbitplayer_45417 >= DATE_RUNEDAY())) {
                return 1;
            };
            break;
        }
        case 2361: {
            if ((varbitplayer_45418 >= (DATE_RUNEDAY() - MODULO(DATE_RUNEDAY(), 3)))) {
                return 1;
            };
            break;
        }
        case 2362: {
            if ((varbitplayer_45419 >= (DATE_RUNEDAY() - MODULO(DATE_RUNEDAY(), 7)))) {
                return 1;
            };
            break;
        }
    };
    return 0;
}