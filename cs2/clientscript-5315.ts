//
function script5315(int0: component, int1: component, int2: component, int3: component, int4: component): void {
    var int5 = 0;
    var int6 = 15;
    var int7 = ENUM_GETOUTPUTCOUNT(5177 as cs2enum);
    var int8 = ENUM_GETOUTPUTCOUNT(5176 as cs2enum);
    var int9 = 0;
    var int10 = -1;
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    while ((int5 < 40)) {
        int9 = (script5319(int5) - 1);
        CC_CREATE(int1, 3, int5);
        CC_SETSIZE(0, int6, 1, 0);
        CC_SETPOSITION(0, (int5 * int6), 0, 0);
        if ((MODULO(int5, 2) == 0)) {
            CC_SETCOLOUR(2236962);
        } else {
            CC_SETCOLOUR(1118481);
        };
        CC_SETFILL(1);
        CC_CREATE(int3, 5, int5);
        CC_SETGRAPHIC(7712 as graphic);
        CC_SETOP(1, "Play");
        CC_SETSIZE(12, 13, 0, 0);
        CC_SETPOSITION(14, (1 + (int5 * int6)), 2, 0);
        int10 = 7713;
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int10));
        int10 = 7712;
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int10));
        if ((int9 < 0)) {
            CC_SETHIDE(true);
        };
        CC_CREATE(int4, 5, int5);
        CC_SETGRAPHIC(7718 as graphic);
        CC_SETOP(1, "Remove");
        CC_SETSIZE(12, 13, 0, 0);
        CC_SETPOSITION(1, (1 + (int5 * int6)), 2, 0);
        int10 = 7719;
        CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int10));
        int10 = 7718;
        CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int10));
        if ((int9 < 0)) {
            CC_SETHIDE(true);
        };
        CC_CREATE(int2, 4, int5);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETPOSITION(2, (int5 * int6), 0, 0);
        CC_SETSIZE(0, 15, 1, 0);
        CC_SETCOLOUR(14540253);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTSHADOW(false);
        if ((int9 >= 0)) {
            CC_SETTEXT(enum_getvalue(0, 36, 5177 as cs2enum, int9));
        } else {
            CC_SETTEXT("");
        };
        CC_SETDRAGGABLE(int2, -1);
        CC_SETDRAGRENDERBEHAVIOUR(1);
        CC_SETDRAGDEADZONE(3);
        if ((script13749() == false)) {
            CC_SETDRAGDEADTIME(20);
        } else {
            CC_SETDRAGDEADTIME(5);
        };
        CC_SETONDRAGCOMPLETE(callback(script5316, -2147483645, -2147483643, -2147483641));
        int5 = (int5 + 1);
    };
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, (2 + (int5 * int6)), int0);
    script31(comp(319, 3), int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    return;
}