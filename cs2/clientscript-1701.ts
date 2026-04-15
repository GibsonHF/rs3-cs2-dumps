//[clientscript,scrollbar_horizontal_wheel]
function script1701(int0: component, int1: component, int2: int): void {
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(int0) == 1)) {
        int3 = cc_getparam(6315);
        int4 = cc_getparam(6316);
        if ((int4 > 0)) {
            var int2 = MAX(MIN(int2, int4), (0 - int4));
        };
    };
    var int5 = IF_GETSCROLLX(int1);
    int5 = (int5 + (int2 * int3));
    if ((CC_FIND(int0, 1) == 1)) {
        script1702(int0, int1, int5, 1);
    };
    return;
}