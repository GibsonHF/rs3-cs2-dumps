//
function script14066(int0: int, int1: component): void {
    var int2 = script14070(int0);
    var int3 = 0;
    var string0 = "Skills : ";
    var int4 = -1;
    var int5 = -1 as stat;
    if ((varbitplayer_40060 == int0)) {
        script7794(int1, 28303 as struct);
        IF_SETONMOUSEOVER(callback(), int1);
        IF_SETONMOUSELEAVE(callback(), int1);
        while ((int3 < ENUM_GETOUTPUTCOUNT(int2))) {
            int4 = enum_getvalue(0, 0, int2, int3);
            int5 = enum_getvalue(0, 17, 681 as cs2enum, int4);
            if ((int3 == (ENUM_GETOUTPUTCOUNT(int2) - 1))) {
                string0 = strconcat(string0, `${enum_getvalue(17, 36, 680 as cs2enum, int5)}.`);
            } else {
                string0 = strconcat(string0, `${enum_getvalue(17, 36, 680 as cs2enum, int5)}, `);
            };
            int3 = (int3 + 1);
        };
        IF_SETTEXT(string0, comp(1943, 42));
    } else {
        script7794(int1, 21363 as struct);
        IF_SETONMOUSEOVER(callback(script7793, -2147483645, 29006), int1);
        IF_SETONMOUSELEAVE(callback(script7793, -2147483645, 21363), int1);
    };
    return;
}