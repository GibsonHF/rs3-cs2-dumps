//
function script6533(int0: struct, int1: int, int2: int, int3: unknown_int): void {
    if ((int3 != 1)) {
        return;
    };
    var int4 = script5675(int0, int1, int2);
    if ((int4 == -1 as cs2enum)) {
        return;
    };
    script5671();
    CC_DELETEALL(comp(556, 10));
    IF_SETHIDE(false, comp(556, 6));
    var string0 = script5688(int0, int1, int2);
    if ((script5647(int0, int1, int2) == 1)) {
        if ((STRING_LENGTH(string0) > 0)) {
            IF_SETTEXT(string0, comp(556, 5));
        };
        IF_SETHIDE(false, comp(556, 11));
    } else {
        IF_SETTEXT("???", comp(556, 5));
        IF_SETHIDE(true, comp(556, 11));
    };
    var int5 = 0;
    var int6 = 0;
    var string1 = "";
    var int7 = 0;
    var int8 = ENUM_GETOUTPUTCOUNT(int4);
    while ((int5 < int8)) {
        int6 = enum_getvalue(0, 0, int4, int5);
        if ((script5648(int0, int1, int6) >= 1)) {
            string1 = script5684(int0, int1, int6);
            if ((STRING_LENGTH(string1) > 0)) {
                script5674(comp(556, 10), int7);
                script5673(comp(556, 10), int7, string1);
            };
        } else {
            script5674(comp(556, 10), int7);
            script5673(comp(556, 10), int7, "???");
        };
        int5 = (int5 + 1);
        int7 = (int7 + 12);
    };
    return;
}