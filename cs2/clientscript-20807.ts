//
function script20807(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number] {
    dbrow_findnext();
    var int6 = stack();
    var int7 = -1;
    var int8 = -1;
    var int9 = 0;
    var int10 = 0;
    var int11 = IF_GETWIDTH(int0);
    var int12 = 0;
    while (((int6 != -1 as dbrow) && (int12 < 400))) {
        int7 = dbrow_getfield(int6, 1515520, 0);
        int8 = dbrow_getfield(int6, 1515584, 0);
        if (((varbitclient_61239 == 0) || (INV_TOTAL(1004 as inv, int8) > 0))) {
            script7852(int2, int7, int9, int10, 0, 0, 80, 72, 0, 0, 18460, "");
            CC_SETOP(1, "Select");
            CC_SETONMOUSEREPEAT(callback(script9564, int8, -2147483645, -2147483643));
            CC_SETONOP(callback(script20810, int0, int1, int2, int3, int4, int7, int5));
            script17949(int3, int7, (int9 + 12), (int10 + 8), 0, 0, 63, 56, 0, 0, -1, 1);
            script2995(int4, int7, (int9 + 8), (int10 + 8), 0, 0, 63, 13, 0, 0, 2100, "");
            int9 = ((int9 + 80) + 4);
            if (((int9 + 80) > int11)) {
                int9 = 0;
                int10 = ((int10 + 72) + 4);
            };
            int12 = (int12 + 1);
        };
        dbrow_findnext();
        int6 = stack();
    };
    if ((int9 != 0)) {
        int10 = ((int10 + 72) + 4);
    };
    return [int12, int10];
}