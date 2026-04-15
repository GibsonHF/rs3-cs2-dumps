//
function script4000(int0: obj): int {
    var int1 = item_getparam(int0, 7863);
    var int2 = item_getparam(int0, 7864);
    if ((int2 > 0)) {
        if (((INV_TOTAL(93 as inv, 6714 as obj) > 0) || (INV_TOTAL(94 as inv, 6714 as obj) > 0))) {
            int2 = (int2 + 2);
        };
        int1 = (int1 + SCALE(int2, 100, script7081()));
    };
    switch (int0) {
        case 21386:
        case 21387:
        case 21388: {
            if ((varbitplayer_43336 == 0)) {
                return 0;
            };
            break;
        }
    };
    return int1;
}