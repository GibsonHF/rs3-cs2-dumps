//
function script12216(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(10797 as cs2enum);
    while ((int0 < int1)) {
        IF_SETTEXT(inttostring(enum_getvalue(0, 0, 10797 as cs2enum, int0), 10), enum_getvalue(0, 9, 10799 as cs2enum, int0));
        IF_SETONMOUSEREPEAT(callback(script3876, enum_getvalue(0, 36, 10798 as cs2enum, int0), enum_getvalue(0, 9, 10800 as cs2enum, int0), -1), enum_getvalue(0, 9, 10800, int0));
        IF_SETONMOUSELEAVE(callback(script8805), enum_getvalue(0, 9, 10800, int0));
        int0 = (int0 + 1);
    };
    int0 = 1;
    int1 = ENUM_GETOUTPUTCOUNT(10801 as cs2enum);
    var int2 = 0;
    while ((int0 <= int1)) {
        IF_SETTEXT(inttostring(enum_getvalue(0, 0, 10801 as cs2enum, int0), 10), enum_getvalue(0, 9, 10802 as cs2enum, int0));
        IF_SETONMOUSEREPEAT(callback(script3876, script12218(int0), enum_getvalue(0, 9, 10803 as cs2enum, int0), -1), enum_getvalue(0, 9, 10803, int0));
        IF_SETONMOUSELEAVE(callback(script8805), enum_getvalue(0, 9, 10803, int0));
        if ((script12219(int0) == 1)) {
            stack(26663);
            stack(script12220(int0));
            IF_SETGRAPHIC();
            IF_SETHIDE(1, script12221(int0));
            if (((int0 > 6) && (int0 < 15))) {
                int2 = (int2 + 1);
            };
        } else {
            stack(26662);
            stack(script12220(int0));
            IF_SETGRAPHIC();
        };
        int0 = (int0 + 1);
    };
    if ((int2 != 8)) {
        stack(26664);
        stack(112525495);
        IF_SETGRAPHIC();
    };
    return;
}