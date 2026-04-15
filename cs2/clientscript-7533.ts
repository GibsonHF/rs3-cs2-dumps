//
function script7533(int0: component, int1: int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: struct): void {
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    if ((CC_FIND[1](int0, int1) == 1)) {
        CC_SETONTIMER[1](callback());
        CC_SETPOSITION[1](0, int2, int3, 0);
        [int6, int7, int8, int9] = [CC_GETX[1](), CC_GETY[1](), CC_GETWIDTH[1](), CC_GETHEIGHT[1]()];
        int10 = ((int6 + int8) - 18);
        [int11, int12] = [(int6 + 18), MAX((int8 - 36), 0)];
        int13 = ((int7 + int9) - 16);
        [int14, int15] = [(int7 + 16), MAX((int9 - 32), 0)];
        script10764(int0, 21361, (int6 + 5), (int7 + 5), (int8 - 5), (int9 - 5), 16777215);
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int6 + 10), (int7 + ((int9 - 32) / 2)), 0, 0);
        CC_SETOUTLINE(1);
        CC_SETOBJECT_NONUM(struct_getparam(int5, 3252), 1);
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE((int8 - (36 + 5)), int9, 0, 0);
        CC_SETPOSITION(((int6 + 10) + 36), int7, 0, 0);
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(IF_GETCOLOUR(91357196));
        CC_SETTEXTSHADOW(1);
        [int16, int17] = [struct_getparam(int5, 3248), struct_getparam(int5, 3249)];
        [int18, int19] = [enum_getvalue(0, 0, 7321, int16), enum_getvalue(0, 0, 7322, int16)];
        [int18, int19] = [(int18 * int17), (int19 * int17)];
        if ((struct_getparam(int5, 3251) == 1)) {
            [int18, int19] = [SCALE(111, 100, int18), SCALE(111, 100, int19)];
        };
        if ((int4 == 11507)) {
            [int18, int19] = [SCALE(150, 100, int18), SCALE(150, 100, int19)];
        };
        script7535(`<col=ffffff>${inttostring(int17, 10)} x ${enum_getvalue(0, 36, 1563 as cs2enum, int16)}</col><br>`, int5, `<br>Combat XP: ${script940((int18 / 10))}<br><u=ff0000>or</u> Coins: ${script940(int19)}`);
        CC_SETONOP[1](callback(script7536, -2147483645, -2147483643, int4, int5));
    };
    return;
}