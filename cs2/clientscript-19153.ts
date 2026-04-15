//
function script19153(int0: struct): unknown_int {
    switch (int0) {
        case 32986: {
            if ((varbitplayer_51596 <= 0)) {
                return 1;
            };
            break;
        }
        case 50263: {
            if ((varbitplayer_56037 <= 0)) {
                return 1;
            };
            break;
        }
        case 2951: {
            if ((varbitplayer_57715 <= 0)) {
                return 1;
            };
            break;
        }
        default: {
            script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
            break;
        }
    };
    return 0;
}