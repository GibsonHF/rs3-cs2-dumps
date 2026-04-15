//
function script6728(int0: int, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = CC_GETX();
    if ((int5 >= int0)) {
        int5 = int1;
    };
    int5 = (int5 + int2);
    CC_SETPOSITION(int5, int4, 0, int3);
    return;
}