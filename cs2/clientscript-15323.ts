//
function script15323(): [achievement, achievement] {
    var int0 = ENUM_GETOUTPUTCOUNT(16072 as cs2enum);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    while ((int1 < int0)) {
        int3 = unk11075(enum_getvalue(0, 41, 16072 as cs2enum, int1));
        int2 = (int2 + int3);
        int1 = (int1 + 1);
    };
    int1 = 0;
    define_array(int2);
    define_array[65667](int2);
    var int4 = 0;
    var int5 = 0;
    var int6 = -1 as achievement;
    var int7 = -1 as category;
    while ((int1 < int0)) {
        int7 = enum_getvalue(0, 41, 16072 as cs2enum, int1);
        if ((script2457(int7) == 0)) {
            ACHIEVEMENT_FINDCATEGORY(int7);
            int6 = ACHIEVEMENT_FINDNEXT();
            while ((int6 != -1 as achievement)) {
                int5 = ACHIEVEMENT_REQSTATE(int6);
                if ((int5 >= 7000)) {
                    pop_array(int4, int5);
                    pop_array[1](int4, int6);
                    int4 = (int4 + 1);
                };
                int6 = ACHIEVEMENT_FINDNEXT();
            };
        };
        int1 = (int1 + 1);
    };
    if ((int4 == 0)) {
        return [-1 as achievement, -1 as achievement];
    };
    if ((int4 > 1)) {
        ARRAY_SORT(int4, 0, 1);
    };
    var int8 = push_array[1](0);
    var int9 = -1 as achievement;
    if ((int4 > 1)) {
        int9 = push_array[1](1);
    };
    return [int8, int9];
}