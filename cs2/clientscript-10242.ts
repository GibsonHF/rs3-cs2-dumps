//
function script10242(): number {
    var int0 = (INV_SIZE(93) - 1);
    var int1 = -1;
    var int2 = -1;
    while ((int0 >= 0)) {
        int1 = INV_GETOBJ(93, int0);
        if ((int1 != -1)) {
            int2 = OC_CATEGORY(int1);
            if (((((int2 == 6) && (item_getparam(int1, 238) <= item_getparam(17674, 238))) || (int2 == 13)) || (int1 == 60460))) {
                return 1;
            };
        };
        int0 = (int0 - 1);
    };
    return 0;
}