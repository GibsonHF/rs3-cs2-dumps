//
function script1763(int0: number, int1: number, int2: number, int3: number): void {
    if ((((int3 == -1) && (IF_GETSCROLLX(int1) <= 0)) || ((int3 == 1) && (IF_GETSCROLLX(int1) >= (IF_GETSCROLLWIDTH(int1) - IF_GETWIDTH(int1)))))) {
        return;
    };
    var int4 = (int2 * int3);
    int4 = (IF_GETSCROLLX(int1) + int4);
    IF_SETSCROLLPOS(int4, 0, int1);
    script1847(int0);
    script1846(int0);
    return;
}