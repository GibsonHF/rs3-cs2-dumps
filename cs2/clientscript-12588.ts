//
function script12588(int0: number): number {
    var int1 = 0;
    if ((item_getparam(INV_GETOBJ(94 as inv, 3), 4663) == 1)) {
        var int0 = (int0 - 5);
    } else if ((INV_TOTAL(93 as inv, 9625 as obj) > 0)) {
        int0 = (int0 - 3);
    };
    if (((INV_TOTALCAT(94 as inv, 2844) > 0) || (INV_TOTALCAT(93 as inv, 2844) > 0))) {
        int0 = (int0 - 1);
    };
    return int0;
}