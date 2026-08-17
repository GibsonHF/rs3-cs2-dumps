//
function script20807(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number] {
    var int7 = dbrow_findnext();
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = 0;
    var int12 = 0;
    var int13 = IF_GETWIDTH(int0);
    var int14 = 0;
    while ((int7 != -1)) {
        if ((int14 < 400)) {
            int8 = dbrow_getfield(int7, 1515520, 0);
            int9 = dbrow_getfield(int7, 1515584, 0);
            int10 = dbrow_getfield(int7, 1515856, 0);
            if (((varbitclient_61239 == 0) || (INV_TOTAL(1004 as inv, int9) > 0))) {
                script7852(int2, int8, int11, int12, 0, 0, 80, 72, 0, 0, callback(script18460));
                CC_SETOP(1, "Select");
                CC_SETONMOUSEREPEAT(callback(script9564, int9, -2147483645, -2147483643));
                CC_SETONOP(callback(script20810, int0, int1, int2, int3, int4, int5, int8, int6));
                script17949(int3, int8, (int11 + 12), (int12 + 8), 0, 0, 63, 56, 0, 0, -1, 1);
                script2995(int4, int8, (int11 + 8), (int12 + 8), 0, 0, 63, 13, 0, 0, callback(script2100));
                if (((int5 != -1) && (int10 != -1))) {
                    script20480(int5, int8, (int11 + 8), (int12 + 51), 0, 0, 64, 13, 0, 0, 2100, "", -1, 2, 1);
                };
                int11 = ((int11 + 80) + 4);
                if (((int11 + 80) > int13)) {
                    int11 = 0;
                    int12 = ((int12 + 72) + 4);
                };
                int14 = (int14 + 1);
            };
            int7 = dbrow_findnext();
        };
        if ((int11 != 0)) {
            int12 = ((int12 + 72) + 4);
        };
        return [int14, int12];
    };
    if ((int11 != 0)) {
        int12 = ((int12 + 72) + 4);
    };
    return [int14, int12];
}