//
function script8085(): unknown_int {
    var int0 = -1 as dbrow;
    if ((varplayer_1831 == -1 as obj)) {
        return 0;
    };
    if ((((((OC_CATEGORY(varplayer_1831) == 31 as category) || (OC_CATEGORY(varplayer_1831) == 30 as category)) || (OC_CATEGORY(varplayer_1831) == 29 as category)) || (OC_CATEGORY(varplayer_1831) == 33 as category)) || (OC_CATEGORY(varplayer_1831) == 32 as category))) {
        return 3;
    };
    if ((MAP_MEMBERS() == 1)) {
        switch (varplayer_1831) {
            case 7771: {
                return 3;
            }
            case 24906:
            case 24907:
            case 24908: {
                return 4;
            }
        };
        if ((item_getparam(varplayer_1831, 394) > 0)) {
            stack(348240);
            stack(varplayer_1831);
            DB_FIND(0);
            dbrow_findnext();
            int0 = stack();
            if (((int0 != -1) && (dbrow_getfield(int0, 348192, 0) > 0))) {
                return 1;
            };
            return 2;
        };
        return 5;
    };
    return 5;
}