//
function script20134(): int {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 1335584, 0);
    var int2 = 0;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    while ((int2 < int4)) {
        if ((varbitplayer_58389 >= enum_getvalue(0, 0, int1, int2))) {
            int3 = (int3 + 1);
        };
        int2 = (int2 + 1);
    };
    return int3;
}