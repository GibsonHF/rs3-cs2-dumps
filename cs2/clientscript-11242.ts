//
function script11242(int0: component, int1: component, int2: component): void {
    var int3 = 0;
    var int4 = 15;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    while ((int3 < ENUM_GETOUTPUTCOUNT(9936 as cs2enum))) {
        CC_CREATE(int1, 3, int3);
        CC_SETSIZE(0, int4, 1, 0);
        CC_SETPOSITION(5, (5 + (int3 * int4)), 0, 0);
        CC_SETFILL(1);
        if ((MODULO(int3, 2) == 0)) {
            CC_SETCOLOUR(1846324);
        } else {
            CC_SETCOLOUR(464928);
        };
        CC_CREATE(int0, 4, int3);
        CC_SETSIZE(10, int4, 1, 0);
        CC_SETPOSITION(5, (5 + (int3 * int4)), 0, 0);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXT(script11243(enum_getvalue(0, 36, 9936 as cs2enum, int3), CC_GETWIDTH()));
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, script10495(3)));
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script11244, int0, int3));
        int3 = (int3 + 1);
    };
    if ((IF_GETHEIGHT(int0) < ((5 * 2) + (int3 * int4)))) {
        IF_SETSCROLLSIZE(0, ((5 * 2) + (int3 * int4)), int0);
        script7791(int2, int0);
    };
    return;
}