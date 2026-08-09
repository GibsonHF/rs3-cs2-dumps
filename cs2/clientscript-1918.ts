//
function script1918(int0: number): void {
    var int1 = enum_getvalue(0, 73, 14536 as cs2enum, int0);
    var int2 = -1 as struct;
    var int3 = struct_getparam(int1, 7501);
    var int4 = -1;
    script1919(17498167, int0, int1, 21, 48, 135);
    int4 = (int4 + 1);
    while ((int4 < int3)) {
        int2 = enum_getvalue(0, 73, struct_getparam(int1, 7500), int4);
        script1922(17498167, int4, int0, -1, (73 + (int4 * 180)), ((48 + 21) + (int0 * 135)), (180 - 140), 2);
        script1924(17498167, 17498168, int4, int0, int2, (115 + (int4 * 180)), (int0 * 135), 140, 140, 23, 0);
    };
    return;
}