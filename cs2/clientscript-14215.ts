//
function script14215(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 1;
    var string0 = "No ability set.";
    var int5 = -1 as struct;
    if ((int3 > 0)) {
        int5 = enum_getvalue(0, 73, 8677 as cs2enum, int3);
        if ((int5 != -1 as struct)) {
            int4 = 0;
            string0 = struct_getparam(int5, 4206);
        };
    };
    script13991(int0, int1, 28556, int4);
    IF_SETTEXT(string0, int2);
    script7999(int2, 24113);
    return;
}