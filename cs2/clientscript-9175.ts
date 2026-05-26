//
function script9175(): void {
    var int0 = -1 as cs2enum;
    var int1 = 1;
    var int2 = 0;
    var int3 = -1 as struct;
    var int4 = 0;
    switch (varbitplayer_20794) {
        case 0: {
            int0 = 6452 as cs2enum;
            break;
        }
        case 1: {
            int0 = 6452 as cs2enum;
            int2 = 1;
            break;
        }
        case 2: {
            int0 = 8014 as cs2enum;
            break;
        }
        case 3: {
            int0 = 8015 as cs2enum;
            break;
        }
        case 4: {
            int0 = 8016 as cs2enum;
            break;
        }
        case 5: {
            int0 = 8017 as cs2enum;
            break;
        }
    };
    var int5 = ENUM_GETOUTPUTCOUNT(int0);
    CC_DELETEALL(comp(1344, 26));
    CC_DELETEALL(comp(1344, 27));
    var int6 = 0;
    while ((int4 < int5)) {
        int3 = enum_getvalue(0, 73, int0, (1 + int4));
        script9179(int3, int4, int2);
        int4 = (int4 + 1);
    };
    int4 = 0;
    script9177(int0, int2, int6);
    return;
}