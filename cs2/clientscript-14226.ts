//
function script14226(int0: int, int1: struct, int2: int, string0: string): [int, int] {
    var int3 = STRINGWIDTH(string0, struct_getparam(int1, 7275));
    var int4 = int3;
    int4 = script13394(int4, int0, int2, int1);
    var int5 = (((struct_getparam(int1, 7276) * int2) + 6) + struct_getparam(int1, 7265));
    return [++int4, int5];
}