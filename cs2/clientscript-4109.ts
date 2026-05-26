//
function script4109(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = IF_GETWIDTH(int5);
    var int0 = MAX(MIN(int0, (IF_GETWIDTH(int4) - int6)), 0);
    var int7 = IF_GETX(int4);
    IF_SETSIZE((int7 + int0), 0, 0, 1, int2);
    IF_SETSIZE(((int7 + int0) + int6), 0, 1, 1, int3);
    IF_SETPOSITION(((int7 + int0) + int6), 0, 0, 0, int3);
    IF_SETPOSITION(int0, 0, 0, 1, int5);
    return;
}