//
function script12787(int0: obj, int1: unknown_int): int {
    if ((MAP_MEMBERS() == 0)) {
        return 0;
    };
    var int2 = 0;
    var int3 = 0;
    if (((OC_CATEGORY(INV_GETOBJ(94 as inv, 13)) == 3983 as category) && (script2144(INV_GETOBJ(94 as inv, 13)) == 1))) {
        int2 = (int2 + script12785(94 as inv, 13, int0));
        if ((int1 == 0)) {
            int2 = (int2 + script377(94 as inv, 13, int0));
        };
    };
    int3 = script12518(93 as inv, 3983 as category, int3);
    while ((int3 != -1)) {
        if ((script2144(INV_GETOBJ(93 as inv, int3)) == 1)) {
            int2 = (int2 + script12785(93 as inv, int3, int0));
            if ((int1 == 0)) {
                int2 = (int2 + script377(93 as inv, int3, int0));
            };
        };
        int3 = script12518(93 as inv, 3983 as category, (int3 + 1));
    };
    return int2;
}