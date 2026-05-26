//
function script13387(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = (CLIENTCLOCK() - int2);
    var int5 = enum_getvalue(0, 73, 12591 as cs2enum, int3);
    var int6 = 4500;
    if (((int3 != 111) && (int5 != -1 as struct))) {
        int6 = struct_getparam(int5, 4234);
    };
    if ((int4 >= int6)) {
        script13389(int0, int1, int3);
    };
    return;
}