//
function script16498(int0: dbrow, int1: component): void {
    var int2 = -1;
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    var int7 = 0;
    var int8 = DB_GETFIELDCOUNT(int0, 413696);
    var int9 = 0;
    unk11013(0, int8, 1, int1);
    IF_SETSIZE((60 * int8), 80, 0, 0, int1);
    CC_DELETEALL(int1);
    var int10 = 0;
    if ((IF_FIND(int1) == 1)) {
        while ((++int2 < int8)) {
            [int3, int4, int5, int6, int6, int6, int6, int6] = dbrow_getfield(int0, 413696, int2);
            if ((script10613(int3) == 0)) {
                script14391(int1, int2, 0, 0, 1, 1, 61, 75, 0, 0);
                if ((int5 != 7)) {
                    script7920(int1, (int2 + 1), int9, 0, int2, 0, 0, 1, 1, 61, 75, 0, 0, script227(int5));
                    int9 = (int9 + 1);
                } else {
                    script16708(int1, int5, script8948(int5), (int2 + 1), int9, 0, -2, 1, 1, 60, 79, 0, 0);
                    int9 = (int9 + 3);
                };
                script10024(int1, (int2 + 1), int9, 0, int2, 1, 0, 1, 1, 27, 24, 0, 0, int3, int4, 0, 1);
                script4473(int2, int0, int3, int4);
                int9 = 0;
            } else {
                int10 = (int10 + 1);
            };
        };
    };
    unk11013(0, (int8 - int10), 1, int1);
    return;
}