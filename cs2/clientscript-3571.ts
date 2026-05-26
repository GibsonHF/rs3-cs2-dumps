//
function script3571(int0: number, int1: number): number {
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = 0;
    [int2, int3, int4, int5, int6] = script2517(int0, int1);
    if (((int2 != -1 as obj) && (int4 > 0))) {
        return int2;
    };
    if ((((int5 != -1) && (struct_getparam(int5, 2655) != -1 as obj)) && (struct_getparam(int5, 2665) > 0))) {
        return struct_getparam(int5, 2655);
    };
    return -1 as obj;
}