//
function script14796(int0: unknown_int): void {
    var int1 = ENUM_GETOUTPUTCOUNT(14057 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    var int4 = -1;
    if ((int0 == 1)) {
        script8180(int0, 18);
        while ((++int4 < int1)) {
            [int2, int3, string0] = script14801(enum_getvalue(0, 74, 14057 as cs2enum, int4));
            script8844(2, int2, int3, comp(667, 11), int4);
        };
    } else {
        while ((++int4 < int1)) {
            script8844(2, 0, 0, comp(667, 11), int4);
        };
    };
    return;
}