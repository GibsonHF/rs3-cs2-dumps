//
function script17569(string0: string, string1: string): void {
    var int0 = comp(1165, 5);
    var int1 = comp(1165, 6);
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    var int4 = script20478(string1, int2, 17473 as dbrow, 0);
    script2995(int0, IF_GETNEXTSUBID(int0), 0, 0, 1, 0, int2, int4, 0, 0, 17473 as dbrow, string1);
    if ((int3 < int4)) {
        IF_SETHIDE(false, int1);
        IF_SETSCROLLPOS(0, 0, int0);
        IF_SETSCROLLSIZE(0, int4, int0);
        script7791(int1, int0);
    } else {
        IF_SETHIDE(true, int1);
        IF_SETSCROLLSIZE(0, 0, int0);
        CC_SETPOSITION(0, 0, 1, 1);
    };
    script9554(comp(1165, 1), comp(1165, 7), comp(1165, 2), string0, 21218 as struct);
    return;
}