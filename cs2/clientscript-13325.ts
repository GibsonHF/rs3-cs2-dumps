//
function script13325(int0: struct, int1: int, int2: int): void {
    CC_DELETEALL(comp(1311, 531));
    CC_DELETEALL(comp(1311, 532));
    IF_SETHIDE(false, comp(1311, 530));
    var int3 = IF_GETNEXTSUBID(comp(1311, 530));
    var int4 = 1;
    var int5 = 1;
    var int6 = 0;
    var int7 = 1;
    var int8 = 5;
    while ((int5 <= 7)) {
        IF_SETHIDE(true, script13631(int5));
        int5 = (int5 + 1);
    };
    int5 = 1;
    while ((int5 <= struct_getparam(int0, 3850))) {
        if ((int1 == int5)) {
            IF_SETHIDE(false, script13631(int5));
            int4 = 4;
        } else {
            int4 = 1;
        };
        int3 = script11605(comp(1311, 531), comp(1311, 532), 28222 as struct, 0, int8, int3, int4, "Select", "Unselect", script2412(int5, int0));
        if ((CC_FIND(comp(1311, 532), int5) == 1)) {
            CC_SETOPCURSOR(1, 46);
        };
        script4512(comp(1311, 531), (30 - (2 * 2)), (30 - (2 * 2)), 2, (int8 + 2), script2679(int0, int5));
        int7 = (int7 + 1);
        int8 = (int8 + (30 + 4));
        int5 = (int5 + 1);
        int6 = (int6 + 1);
    };
    CC_DELETEALL(comp(1311, 555));
    CC_DELETEALL(comp(1311, 556));
    if ((struct_getparam(int0, 3849) > 1)) {
        IF_SETHIDE(false, comp(1311, 554));
        int3 = IF_GETNEXTSUBID(comp(1311, 554));
        int8 = 5;
        int5 = 1;
        while ((int5 <= struct_getparam(int0, 3849))) {
            if ((int2 == int5)) {
                int4 = 4;
            } else {
                int4 = 1;
            };
            script11605(comp(1311, 555), comp(1311, 556), 28222 as struct, 0, int8, int3++, int4, "Select", "Unselect", script2431(int0, int5));
            if ((CC_FIND(comp(1311, 556), int5) == 1)) {
                CC_SETOPCURSOR(1, 46);
            };
            script4512(comp(1311, 555), (30 - 8), (30 - 8), 4, (int8 + 4), script2737(int0, int5));
            if ((script1529(int0, int5) == 0)) {
                script4512(comp(1311, 555), 14, 18, 18, (int8 + 15), 10983 as graphic);
            };
            int5 = (int5 + 1);
            int8 = (int8 + (30 + 4));
        };
    };
    return;
}