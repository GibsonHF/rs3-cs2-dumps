//
function script14897(int0: dbrow, int1: int): void {
    var int2 = comp(693, 190);
    var int3 = comp(693, 191);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int4 = MIN(5, DB_GETFIELDCOUNT(int0, 368800));
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    if ((int4 > 0)) {
        int5 = ((IF_GETWIDTH(int2) - (((1 + int4) * 40) + (int4 * 5))) / 2);
        int6 = ((IF_GETHEIGHT(int2) - 26) / 2);
        script13998(int2, int3, 28556 as struct, int5, int6, 40, 26, 0, false, script14641(int0, 0), script9670(int1, 0));
        if ((CC_FIND(int3, (int7 + 1)) == 1)) {
            CC_SETONOP(callback(script14898, 0));
        };
        while ((++int7 < int4)) {
            int5 = (int5 + 45);
            script13998(int2, int3, 28556 as struct, int5, int6, 40, 26, (int7 + 1), false, script14641(int0, (int7 + 1)), script9670(int1, (int7 + 1)));
            if ((CC_FIND(int3, (int7 + 1)) == 1)) {
                CC_SETONOP(callback(script14898, (int7 + 1)));
            };
        };
        IF_SETSIZE(8, (8 + IF_GETHEIGHT(int2)), 1, 1, comp(693, 192));
    } else {
        IF_SETSIZE(8, 8, 1, 1, comp(693, 192));
    };
    return;
}