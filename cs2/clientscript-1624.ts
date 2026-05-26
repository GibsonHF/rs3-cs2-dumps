//
function script1624(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = 0;
    var int7 = 0;
    if ((int4 <= 0)) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        int6 = IF_GETSCROLLX(int1);
        int7 = (int2 - int6);
        IF_SETONTIMER(callback(script1638, int0, int1, 0, (int4 - 1), int5, int6, int7, int3), int0);
    };
    return;
}