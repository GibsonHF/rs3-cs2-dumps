//
function script17097(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string, string1: string): [number, number, number] {
    var int1 = script17100(int0++, int1, int2, string1);
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(int5);
    var int8 = 0;
    var string2 = "";
    while ((int6 < int7)) {
        int8 = enum_getvalue(0, 0, int5, int6);
        var [string2, int3] = script17103(int8, int3, string0);
        int1 = script17098(int0++, int1, int2, int4, string2);
        int6 = (int6 + 1);
    };
    return [int0, int1, int3];
}