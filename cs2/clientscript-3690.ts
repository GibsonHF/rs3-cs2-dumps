//
function script3690(int0: number, int1: number, int2: number, int3: number, int4: number): [number, number, number, number] {
    if ((int2 == int4)) {
        var int2 = int3;
        var int3 = int4;
    };
    if ((int1 == int4)) {
        var int1 = int2;
        int2 = int3;
        int3 = int4;
    };
    if ((int0 == int4)) {
        var int0 = int1;
        int1 = int2;
        int2 = int3;
        int3 = int4;
    };
    return [int0, int1, int2, int3];
}