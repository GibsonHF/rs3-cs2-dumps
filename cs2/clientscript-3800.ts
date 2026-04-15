//
function script3800(int0: unknown_int, int1: component, int2: unknown_int): void {
    if ((script14177(int1) == 0)) {
        return;
    };
    var int3 = 10;
    if ((IF_GETSCROLLHEIGHT(int1) > 3000)) {
        int3 = 5;
    };
    script14191(int1, 20, int3, 8, 12);
    IF_SETONVERTICALSWIPE(callback(script3791, int0, int1, -2147483646, int2), int1);
    return;
}