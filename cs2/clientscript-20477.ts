//
function script20477(int0: component): int {
    if ((int0 == comp(-1, 65535))) {
        return 16;
    };
    var string0 = IF_GETTEXT(int0);
    var int1 = IF_GETWIDTH(int0);
    var int2 = IF_GETFONTMETRICS(int0);
    var int3 = PARAHEIGHT(string0, int1, int2);
    var int4 = script11432(int2);
    return (int3 * int4);
}