//
function script16789(int0: struct): [int, int, int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = struct_getparam(int0, 8680);
    if ((int5 != -1 as dbrow)) {
        int1 = dbrow_getfield(int5, 802816, 0);
        int2 = dbrow_getfield(int5, 802832, 0);
        int3 = dbrow_getfield(int5, 802848, 0);
    } else {
        int1 = struct_getparam(int0, 8668);
        int2 = struct_getparam(int0, 8670);
        int3 = struct_getparam(int0, 8669);
        int4 = struct_getparam(int0, 409);
    };
    return [int1, int2, int3, int4];
}