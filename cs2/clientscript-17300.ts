//
function script17300(int0: obj, int1: obj): int {
    var int2 = 0;
    if ((item_getparam(int0, 2266) == true)) {
        if (((OC_MEMBERS(int1) == 1) && (MAP_MEMBERS() == 0))) {
            return 0;
        };
        int2 = script11882(int2, INV_TOTAL(93 as inv, int1));
        if ((int0 != 9594 as obj)) {
            int2 = script11882(int2, script12787(int1, 0));
        };
    } else {
        int2 = script7165(int1);
    };
    return int2;
}