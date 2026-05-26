//
function script2687(int0: number, int1: number, int2: number, int3: number): [number, number, number] {
    if ((int1 == int3)) {
        var int1 = int2;
        var int2 = int3;
    };
    if ((int0 == int3)) {
        var int0 = int1;
        int1 = int2;
        int2 = int3;
    };
    return [int0, int1, int2];
}