//
function script8262(): int {
    if ((INV_TOTAL(93 as inv, 2309 as obj) > 0)) {
        return 6;
    };
    if ((INV_TOTAL(93 as inv, 2307 as obj) > 0)) {
        return 5;
    };
    var int0 = 0;
    var int1 = 0;
    if ((INV_TOTAL(93 as inv, 42300 as obj) == 0)) {
        int0 = 1;
    };
    if (((INV_TOTAL(93 as inv, 42303 as obj) == 0) && (INV_TOTAL(93 as inv, 42302 as obj) == 0))) {
        int1 = 1;
    };
    if (((int0 == 1) && (int1 == 1))) {
        return 0;
    };
    if ((int0 == 1)) {
        return 1;
    };
    if ((int1 == 1)) {
        return 2;
    };
    if ((INV_TOTAL(93 as inv, 42303 as obj) > 0)) {
        return 3;
    };
    return 4;
}