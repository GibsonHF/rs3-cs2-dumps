//
function script8977(): void {
    IF_SETHIDE(true, comp(1496, 115));
    IF_SETHIDE(true, comp(1496, 116));
    IF_SETHIDE(true, comp(1496, 121));
    IF_SETHIDE(true, comp(1496, 137));
    IF_SETHIDE(true, comp(1496, 146));
    IF_SETHIDE(true, comp(1496, 150));
    IF_SETHIDE(true, comp(1496, 157));
    IF_SETHIDE(true, comp(1496, 187));
    IF_SETHIDE(true, comp(1496, 195));
    IF_SETHIDE(true, comp(1496, 205));
    IF_SETHIDE(true, comp(1496, 210));
    IF_SETHIDE(true, comp(1496, 213));
    IF_SETHIDE(true, comp(1496, 218));
    var int0 = comp(-1, 65535);
    switch (varbitplayer_18639) {
        case 0: {
            IF_SETHIDE(false, comp(1496, 213));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1496, 218));
            break;
        }
        case 2: {
            int0 = script8978((varbitplayer_18640 - 1));
            if ((int0 != comp(-1, 65535))) {
                IF_SETHIDE(false, int0);
            };
            break;
        }
        case 3: {
            int0 = script8979(varbitplayer_18640);
            if ((int0 != comp(-1, 65535))) {
                IF_SETHIDE(false, int0);
            };
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1496, 115));
            break;
        }
    };
    return;
}