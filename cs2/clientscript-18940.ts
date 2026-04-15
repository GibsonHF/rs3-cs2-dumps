//
function script18940(int0: unknown_int, int1: dbrow, int2: int, int3: int, int4: unknown_int): void {
    if (((int1 == -1 as dbrow) || (int4 == 0))) {
        return;
    };
    var int5 = dbrow_getfield(int1, 127008, int2);
    if ((int5 == -1 as struct)) {
        return;
    };
    var int6 = struct_getparam(int5, 7514);
    if ((struct_getparam(int5, 8051) != -1 as cs2enum)) {
        int6 = struct_getparam(int5, 7514);
    };
    if ((script1258(int6, int3) == 0)) {
        script2684();
        return;
    };
    script2788(int6, int3);
    script2684();
    return;
}