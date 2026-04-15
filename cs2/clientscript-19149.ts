//
function script19149(int0: struct): unknown_int {
    switch (int0) {
        case 32986: {
            if (((varbitplayer_51596 <= 0) && (varbitplayer_51600 > 0))) {
                return 1;
            };
            return 0;
        }
        case 50263: {
            if ((varbitplayer_56037 <= 0)) {
                return 1;
            };
            return 0;
        }
        case 2951: {
            if ((varbitplayer_57715 <= 0)) {
                return 1;
            };
            return 0;
        }
    };
    script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
    return 0;
}