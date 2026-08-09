//
function script5742(int0: number, int1: number, int2: number, int3: number, string0: string): [number, number] {
    var int2 = MIN(script15890(int1), int2);
    var int4 = enum_getvalue(0, 25, int1, int2);
    var int5 = PARAWIDTH(string0, (int0 * 2), int4);
    while ((int2 >= int3)) {
        if ((int5 > int0)) {
            int4 = enum_getvalue(0, 25, int1, int2);
            int5 = PARAWIDTH(string0, (int0 * 2), int4);
            int2 = (int2 - 1);
        };
        return [int4, int5];
    };
    return [int4, int5];
}