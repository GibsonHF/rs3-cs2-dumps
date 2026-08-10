//
function script20134(): number {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1)) {
        return 0;
    };
    if ((script13048() == 1)) {
        return 999;
    };
    var int1 = dbrow_getfield(int0, 1335648, 0);
    var int2 = 0;
    var int3 = 0;
    stack(0);
    script20928();
    var int4 = [];
    while ((int2 < int4)) {
        if ((varbitplayer_58389 >= enum_getvalue(0, 0, int1, int2))) {
            int3 = (int3 + 1);
        };
        int2 = (int2 + 1);
    };
    return int3;
}