//
function script12252(int0: int, int1: int): void {
    var int0 = MAX(0, int0);
    if ((MODULO(int0, 50) != 0)) {
        return;
    };
    var int2 = 0;
    var int3 = (int0 / 3000);
    var int4 = (int3 / 60);
    if ((int4 > 0)) {
        int3 = MODULO(int3, 60);
    };
    int2 = MODULO(int0, 3000);
    var int5 = SCALE(60, 3000, int2);
    var string0 = inttostring(int4, 10);
    var string1 = inttostring(int3, 10);
    var string2 = inttostring(int5, 10);
    if ((int4 < 10)) {
        string0 = strconcat("0", string0);
    };
    if ((int3 < 10)) {
        string1 = strconcat("0", string1);
    };
    if ((int5 < 10)) {
        string2 = strconcat("0", string2);
    };
    if ((int4 > 0)) {
        IF_SETTEXT(`${string0}:${string1}:${string2}`, comp(1508, 2));
    } else {
        IF_SETTEXT(`${string1}:${string2}`, comp(1508, 2));
    };
    if ((int0 > 1500)) {
        IF_SETCOLOUR(16777215, comp(1508, 2));
    } else if ((int0 > 1000)) {
        IF_SETCOLOUR(16409600, comp(1508, 2));
    } else if ((int0 > 500)) {
        IF_SETCOLOUR(15093760, comp(1508, 2));
    } else {
        IF_SETCOLOUR(13107200, comp(1508, 2));
    };
    return;
}