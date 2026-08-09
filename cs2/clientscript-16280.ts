//
function script16280(): void {
    var int0 = 61603844;
    var int1 = 61603845;
    CC_DELETEALL(int0);
    var int2 = 0;
    var string0 = "";
    var int3 = IF_GETWIDTH(int0);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 5;
    var int8 = 1624;
    define_array((int8 + 1));
    while ((int2 <= int8)) {
        pop_array(int2, int2);
        int2 = (int2 + 1);
    };
    script520(0, 0, int8, 1347);
    int2 = 0;
    var int9 = 0;
    while ((int9 < int8)) {
        int2 = push_array(int9);
        string0 = enum_getvalue(0, 36, 1345 as cs2enum, int2);
        if (((STRING_LENGTH(string0) > 0) && (script837(int2) == 1))) {
            int4 = (int7 + script15891(string0, int3, 66, 0));
            script2995(int0, int2, int6, int5, 0, 0, int3, int4, 0, 0, 2100, string0);
            CC_SETCOLOUR(65280);
            CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 65280));
            CC_SETOP(1, "Play");
            CC_SETONOP(callback(script16281, int2));
            if ((int9 < int8)) {
                CC_SETPARAM_INT(1133, push_array((int9 + 1)));
            };
        };
        int9 = (int9 + 1);
    };
    IF_SETSCROLLSIZE(0, IF_GETHEIGHT(int0), int0);
    IF_SETSCROLLPOS(0, 0, int0);
    script7791(int1, int0);
    return;
}