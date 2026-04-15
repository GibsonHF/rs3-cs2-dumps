//
function script19068(int0: dbrow): unknown_int {
    if ((dbrow_getfield(int0, 1187872, 0) == 3)) {
        return 0;
    };
    var int1 = DB_GETFIELDCOUNT(int0, 1187904);
    var int2 = -1 as obj;
    var int3 = -1 as struct;
    var int4 = -1;
    if ((int1 > 0)) {
        while ((++int4 < int1)) {
            int2 = dbrow_getfield(int0, 1187904, int4);
            int3 = item_getparam(int2, 4414);
            if ((script6488(int3) == 0)) {
                return 0;
            };
        };
        return 1;
    };
    return 0;
}