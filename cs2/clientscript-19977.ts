//
function script19977(int0: struct, int1: unknown_int, int2: unknown_int): void {
    script6876(1);
    CC_DELETEALL(comp(1311, 697));
    var int3 = -1 as dbrow;
    var int4 = -1 as struct;
    if ((int0 == -1 as struct)) {
        return;
    };
    int4 = struct_getparam(int0, 9275);
    if ((int4 != -1 as struct)) {
        var int0 = int4;
    };
    int3 = struct_getparam(int0, 9274);
    if ((int3 == -1 as dbrow)) {
        return;
    };
    var int5 = DB_GETFIELDCOUNT(int3, 1142784);
    var int6 = MIN((int5 + DB_GETFIELDCOUNT(int3, 1142800)), (8 * 2));
    var int7 = 0;
    var int8 = 0;
    var string0 = "0";
    var int9 = -1 as struct;
    var int10 = 0;
    while ((int10 < int6)) {
        if ((int10 < int5)) {
            [int7, string0, int9] = dbrow_getfield(int3, 1142784, int10);
        } else {
            stack(dbrow_getfield(int3, 1142800, (int10 - int5)));
            [int7, int8, string0, int9] = stack();
        };
        script15938(comp(1311, 697), int10, 0, ((int10 / 8) * 26), (MODULO(int10, 8) * 26), 2, 0, 24, 24, 0, 0);
        script7858(int10, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4479 as dbrow, "");
        CC_SETOP(1, "Select");
        CC_SETOPCURSOR(1, 46);
        script3537(string0);
        script10033(int10, 2, 0, 0, 1, 1, 4, 4, 1, 1, 4128 as dbrow);
        CC_SETCOLOUR(int7);
        CC_SETFILL(1);
        if ((int10 >= int5)) {
            script10033(int10, 3, 2, 0, 2, 1, 10, 4, 0, 1, 4128 as dbrow);
            CC_SETCOLOUR(int8);
            CC_SETFILL(1);
        };
        if ((script6488(int9) == 0)) {
            script7918(int10, 4, 0, 0, 1, 1, 6, 6, 1, 1, 14794 as graphic);
        };
        int10 = (int10 + 1);
    };
    return;
}