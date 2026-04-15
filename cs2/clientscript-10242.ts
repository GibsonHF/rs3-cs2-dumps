//
function script10242(): int {
    var int0 = (INV_SIZE(93 as inv) - 1);
    var int1 = -1 as obj;
    var int2 = -1 as category;
    while ((int0 >= 0)) {
        int1 = INV_GETOBJ(93 as inv, int0);
        if ((int1 != -1 as obj)) {
            int2 = OC_CATEGORY(int1);
            if (((((int2 == 6 as category) && (item_getparam(int1, 238) <= item_getparam(17674 as obj, 238))) || (int2 == 13 as category)) || (int1 == 60460 as obj))) {
                return 1;
            };
        };
        int0 = (int0 - 1);
    };
    return 0;
}