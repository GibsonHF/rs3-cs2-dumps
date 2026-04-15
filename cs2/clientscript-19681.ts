//
function script19681(int0: struct): struct {
    var int1 = struct_getparam(int0, 5418);
    var int2 = -1 as struct;
    var int3 = 0;
    var int4 = 0;
    if ((int1 != -1 as dbrow)) {
        int3 = DB_GETFIELDCOUNT(int1, 1048576);
        while ((int4 < int3)) {
            int2 = dbrow_getfield(int1, 1048579, int4);
            if ((script6488(int2) == 1)) {
                return int2;
            };
            int4 = (int4 + 1);
        };
    };
    return -1 as struct;
}