//
function script18092(int0: int, int1: int, int2: int, int3: int): [int, int] {
    var int4 = comp(1226, 67);
    var int5 = (9 * int0);
    var int6 = 2;
    var int7 = -1 as stat;
    var int8 = 1;
    while ((int1 <= int5)) {
        if ((ENUM_GETOUTPUTCOUNT(681 as cs2enum) < int1)) {
            return [int2, int1];
        };
        int7 = enum_getvalue(0, 17, 681 as cs2enum, int1);
        if ((int7 == -1 as stat)) {
            return [int2, int1];
        };
        if ((CC_FINDBYCATEGORY(int4, 1, int0) == 1)) {
            script15937(int6, int2, 0, 0, 1, 1, 50, 50, 0, 0);
            var int2 = (int2 + 1);
            if (((db_find_with_count(1032193, int7, 0) > 0) && (int3 != int1))) {
                int8 = 1;
            } else {
                int8 = 0;
            };
            if ((int8 == 1)) {
                script7858(0, int1, 0, 0, 0, 0, 0, 0, 1, 1, 7953 as dbrow, "");
                CC_SETOP(1, `Select ${enum_getvalue(0, 36, 108 as cs2enum, int1)}`);
                CC_SETONOP(callback(script18094, int1, -2147483645, -2147483643));
            } else {
                script7858(0, int1, 0, 0, 0, 0, 0, 0, 1, 1, 7955 as dbrow, "");
                CC_SETOP(1, `Select ${enum_getvalue(0, 36, 108 as cs2enum, int1)}`);
                CC_SETONOP(callback(script18093));
            };
            script7918(int6, int2, 0, 0, 1, 1, 4, 4, 1, 1, enum_getvalue(0, 23, 745 as cs2enum, int1));
            int2 = (int2 + 1);
            if ((int8 == 0)) {
                script7918(int6, int2, 0, 0, 1, 1, 4, 4, 1, 1, 25889 as graphic);
                int2 = (int2 + 1);
            };
        };
        var int1 = (int1 + 1);
    };
    return [int2, int1];
}