//
function script5308(): void {
    var int0 = 0;
    var int1 = 1;
    var int2 = 1;
    var string0 = "";
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = 7287;
    var int6 = 7706;
    var int7 = 7289;
    var int8 = 2;
    var int9 = 54;
    var int10 = MAX(1, (IF_GETWIDTH(53936136) / (int9 + int8)));
    var int11 = 0;
    var int12 = 0;
    CC_DELETEALL(53936136);
    CC_DELETEALL(53936137);
    while ((int0 < ENUM_GETOUTPUTCOUNT(840))) {
        int4 = enum_getvalue(0, 0, 840 as cs2enum, int0);
        int3 = enum_getvalue(0, 73, 5173 as cs2enum, int4);
        if ((int3 == -1 as struct)) {
            return;
        };
        int11 = ((int8 * int2) + (int9 * (int2 - 1)));
        int12 = ((int8 * int1) + (int9 * (int1 - 1)));
        string0 = `${struct_getparam(int3, 1974)}<br>${struct_getparam(int3, 1975)}`;
        CC_CREATE(53936136, 5, int0);
        CC_SETGRAPHIC(int5);
        CC_SETSIZE(int9, int9, 0, 0);
        CC_SETPOSITION(int11, int12, 0, 0);
        if ((int4 == 0)) {
            CC_SETOP(1, struct_getparam(int3, 1974));
        } else {
            CC_SETONTARGETENTER(callback(script5309, -2147483643));
            stack(44);
            stack(-2147483645);
            stack(int5);
            stack("ii");
            CC_SETONTARGETLEAVE();
            if ((int4 == 1)) {
                CC_SETTARGETVERB(struct_getparam(int3, 1974));
            } else if ((int4 == 2)) {
                CC_SETTARGETVERB(struct_getparam(int3, 1974));
            } else {
                CC_SETTARGETVERB(`Place ${struct_getparam(int3, 1974)}`);
            };
            CC_SETTARGETCURSORS(176, -1);
        };
        CC_SETONMOUSEOVER(callback(script44, -2147483645, int6));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, 53936136, -1));
        CC_SETONMOUSELEAVE(callback(script8806, -2147483645, -2147483643, int5));
        int11 = (int11 + 2);
        int12 = (int12 + 2);
        CC_CREATE(53936137, 5, int0);
        CC_SETGRAPHIC(struct_getparam(int3, 1983));
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(int11, int12, 0, 0);
        if ((int2 >= int10)) {
            int1 = (int1 + 1);
            int2 = 1;
        } else {
            int2 = (int2 + 1);
        };
        int0 = (int0 + 1);
    };
    IF_SETSCROLLPOS(0, 0, 53936138);
    IF_SETSCROLLSIZE(0, (int12 + 54), 53936138);
    script31(53936139, 53936138, 6507, 6504, 6505, 6506, 6499, 6498);
    return;
}