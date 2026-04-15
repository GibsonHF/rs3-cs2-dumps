//
function script5313(int0: component, int1: component, int2: component, int3: component, int4: component): void {
    var int5 = 0;
    var int6 = 15;
    var int7 = ENUM_GETOUTPUTCOUNT(5177 as cs2enum);
    var int8 = ENUM_GETOUTPUTCOUNT(5176 as cs2enum);
    var int9 = -1;
    CC_DELETEALL(int1);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int2);
    while ((int5 < MIN(int7, int8))) {
        CC_CREATE(int1, 3, int5);
        CC_SETSIZE(0, int6, 1, 0);
        CC_SETPOSITION(0, (int5 * int6), 0, 0);
        if ((MODULO(int5, 2) == 0)) {
            CC_SETCOLOUR(2236962);
        } else {
            CC_SETCOLOUR(1118481);
        };
        CC_SETFILL(1);
        CC_SETOP(1, "Sort");
        CC_CREATE(int3, 5, int5);
        CC_SETGRAPHIC(7712 as graphic);
        CC_SETOP(1, "Play");
        CC_SETSIZE(12, 13, 0, 0);
        CC_SETPOSITION(14, (1 + (int5 * int6)), 2, 0);
        int9 = 7713;
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int9));
        int9 = 7712;
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int9));
        CC_CREATE(int4, 5, int5);
        CC_SETGRAPHIC(7715);
        CC_SETOP(1, "Bookmark");
        CC_SETSIZE(12, 13, 0, 0);
        CC_SETPOSITION(1, (int5 * int6), 2, 0);
        int9 = 7716;
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int9));
        int9 = 7715;
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int9));
        CC_CREATE(int2, 4, int5);
        CC_SETTEXT(enum_getvalue(0, 36, 5177, int5));
        CC_SETTEXTFONT(66);
        CC_SETPOSITION(2, (int5 * int6), 0, 0);
        CC_SETSIZE(0, 15, 1, 0);
        CC_SETCOLOUR(14540253);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTSHADOW(0);
        int5 = (int5 + 1);
    };
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, (2 + (int5 * int6)), int0);
    script31(comp(319, 2), int0, 6507 as graphic, 6504 as graphic, 6505 as graphic, 6506 as graphic, 6499 as graphic, 6498 as graphic);
    return;
}