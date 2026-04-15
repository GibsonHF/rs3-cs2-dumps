//
function script17674(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script8830(int0, int1);
    if (((int2 == 0) || (script17672(int2, script8828(int3)) == 1))) {
        int2 = 255;
        int3 = script8829(8);
    };
    script8823(int0, int1, int2, script8828(int3));
    return;
}