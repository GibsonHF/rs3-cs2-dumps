//
function script18118(int0: dbrow): void {
    var int1 = DB_GETFIELDCOUNT(int0, 1048576);
    var int2 = MIN((int1 + DB_GETFIELDCOUNT(int0, 1048592)), (8 * 2));
    var int3 = 0;
    var int4 = 0;
    var string0 = "0";
    var int5 = -1 as struct;
    var int6 = 0;
    var int7 = 0;
    while ((int7 < int2)) {
        if ((int7 < int1)) {
            [int3, string0, int5] = dbrow_getfield(int0, 1048576, int7);
        } else {
            stack(dbrow_getfield(int0, 1048592, (int7 - int1)));
            [int3, int4, string0, int5] = stack();
        };
        script15938(comp(1311, 512), int7, 0, ((int7 / 8) * 26), (MODULO(int7, 8) * 26), 2, 0, 24, 24, 0, 0);
        script7858(int7, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4479 as dbrow, "");
        CC_SETOP(1, "Select");
        CC_SETOPCURSOR(1, 46);
        script3537(string0);
        script10033(int7, 2, 0, 0, 1, 1, 4, 4, 1, 1, 4128 as dbrow);
        CC_SETCOLOUR(int3);
        CC_SETFILL(1);
        if ((int7 >= int1)) {
            script10033(int7, 3, 2, 0, 2, 1, 10, 4, 0, 1, 4128 as dbrow);
            CC_SETCOLOUR(int4);
            CC_SETFILL(1);
        };
        int6 = struct_getparam(int5, 2543);
        if ((script2476(int6, 0) == 0)) {
            script7918(int7, 4, 0, 0, 1, 1, 6, 6, 1, 1, 14794 as graphic);
        };
        int7 = (int7 + 1);
    };
    return;
}