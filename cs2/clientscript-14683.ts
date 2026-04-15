//
function script14683(): int {
    var int0 = 0;
    switch (varbitplayer_47022) {
        case 1: {
            int0 = 5;
            break;
        }
        case 2: {
            int0 = 10;
            break;
        }
        case 3: {
            int0 = 15;
            break;
        }
    };
    return MIN(INV_SIZE(885 as inv), (25 + int0));
}