//
function script4172(int0: int): void {
    if ((MODULO(int0, 50) != 0)) {
        return;
    };
    var int1 = 0;
    var int2 = (int0 / 3000);
    var int3 = (int2 / 60);
    if ((int3 > 0)) {
        int2 = MODULO(int2, 60);
    };
    int1 = MODULO(int0, 3000);
    var int4 = SCALE(60, 3000, int1);
    var string0 = inttostring(int3, 10);
    var string1 = inttostring(int2, 10);
    var string2 = inttostring(int4, 10);
    if ((int3 < 10)) {
        string0 = strconcat("0", string0);
    };
    if ((int2 < 10)) {
        string1 = strconcat("0", string1);
    };
    if ((int4 < 10)) {
        string2 = strconcat("0", string2);
    };
    if ((int3 > 0)) {
        IF_SETTEXT(`${string0}:${string1}:${string2}`, comp(1508, 2));
    } else {
        IF_SETTEXT(`${string1}:${string2}`, comp(1508, 2));
    };
    var int5 = (varclient_4259 + (varclient_4260 * 30));
    if ((varclient_4260 != 0)) {
        if ((CLIENTCLOCK() > int5)) {
            IF_SETCOLOUR(13107200, comp(1508, 2));
        } else if ((CLIENTCLOCK() > (int5 - 50))) {
            IF_SETCOLOUR(13112320, comp(1508, 2));
        } else if ((CLIENTCLOCK() > (int5 - 100))) {
            IF_SETCOLOUR(13772800, comp(1508, 2));
        } else if ((CLIENTCLOCK() > (int5 - 150))) {
            IF_SETCOLOUR(14433280, comp(1508, 2));
        } else if ((CLIENTCLOCK() > (int5 - 200))) {
            IF_SETCOLOUR(15093760, comp(1508, 2));
        } else if ((CLIENTCLOCK() > (int5 - 250))) {
            IF_SETCOLOUR(16409600, comp(1508, 2));
        } else {
            IF_SETCOLOUR(16777215, comp(1508, 2));
        };
    } else {
        IF_SETCOLOUR(16777215, comp(1508, 2));
    };
    return;
}