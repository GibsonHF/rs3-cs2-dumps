//
function script4157(): int {
    if (((OC_CATEGORY(varplayer_1831) == 2840 as category) && (item_getparam(varplayer_1831, 5048) == 1))) {
        return 5;
    };
    if ((item_getparam(varplayer_1831, 4413) == true)) {
        return 6;
    };
    stack(348240);
    stack(varplayer_1831);
    DB_FIND(0);
    dbrow_findnext();
    var int0 = stack();
    if ((int0 == -1)) {
        switch (script8085()) {
            case 1: {
                return 1;
            }
            case 2:
            case 3:
            case 4: {
                return 6;
            }
            case 5: {
                return 7;
            }
        };
        return 8;
    };
    return dbrow_getfield(int0, 348160, 0);
}