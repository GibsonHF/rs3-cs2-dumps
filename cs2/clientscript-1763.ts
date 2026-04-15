//
function script1763(int0: int, int1: component, int2: int, int3: int): void {
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