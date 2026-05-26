//
function script3691(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number, number, number, number] {
    if ((int3 == int5)) {
        var int3 = int4;
        var int4 = int5;
    };
    if ((int2 == int5)) {
        var int2 = int3;
        int3 = int4;
        int4 = int5;
    };
    if ((int1 == int5)) {
        var int1 = int2;
        int2 = int3;
        int3 = int4;
        int4 = int5;
    };
    if ((int0 == int5)) {
        var int0 = int1;
        int1 = int2;
        int2 = int3;
        int3 = int4;
        int4 = int5;
    };
    return [int0, int1, int2, int3, int4];
}