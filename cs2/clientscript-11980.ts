//
function script11980(int0: struct, string0: string): [int, int] {
    if ((int0 == -1 as struct)) {
        return [-1, -1];
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int0 = script9952(int0);
    var int7 = 0;
    var int8 = struct_getparam(int0, 3572);
    if ((int8 < 0)) {
        int7 = (0 - int8);
    };
    int1 = struct_getparam(int0, 3550);
    int2 = ((struct_getparam(int0, 3547) + struct_getparam(int0, 3586)) + int7);
    int3 = int2;
    int6 = (struct_getparam(int0, 3652) + int7);
    if ((strcmp(string0, "") == 0)) {
        if ((int7 > 0)) {
            int3 = int6;
        };
    } else {
        int3 = MAX(int3, (int6 + MAX((struct_getparam(int0, 3547) - struct_getparam(int0, 3652)), 20)));
    };
    int4 = (int1 + struct_getparam(int0, 3551));
    int5 = (int3 + struct_getparam(int0, 3549));
    return [int4, int5];
}