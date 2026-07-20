//
function script20860(int0: number, int1: number): [number, number] {
    var int2 = script20635(int1);
    var int3 = 0;
    if ((int0 != 1)) {
        int3 = script20636(int0, 1, int2, 0);
    } else {
        int3 = script20636(int0, 1, int2, 1);
    };
    var int1 = script20637(int1, int3, int2);
    return [int3, int1];
}