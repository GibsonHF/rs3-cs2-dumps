//
function script1338(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = (int2 - int1);
    if ((int5 <= 0)) {
        return int3;
    };
    var int6 = (int4 - int3);
    if ((int6 <= 0)) {
        return int3;
    };
    return ((((int0 - int1) * int6) / int5) + int3);
}