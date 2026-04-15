//
function script18542(int0: obj): int {
    var int1 = script18543(int0);
    if ((MAP_MEMBERS() == 1)) {
        if (((varbitplayer_4318 == 1) || (INV_GETOBJ(94 as inv, 12) == 19669 as obj))) {
            int1 = SCALE(item_getparam(int0, 4332), 100, 90);
        };
        switch (int0) {
            case 52053: {
                int1 = MAX(0, (int1 - (120 * varplayer_11612)));
                break;
            }
        };
    };
    if (((varbitplayer_58506 > 0) && (varbitplayer_58511 == 0))) {
        return 0;
    };
    return int1;
}