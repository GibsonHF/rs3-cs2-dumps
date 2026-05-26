//
function script11952(int0: number, int1: number): void {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int2 = 0;
    [string0, string1] = FRIEND_GETNAME(int0);
    if ((strcmp(string1, "") != 0)) {
        int2 = 1;
    };
    if ((CC_FIND(72613893, int0) == 1)) {
        if ((int2 == 0)) {
            CC_SETHIDE(1);
        } else {
            CC_SETGRAPHIC(2313);
            CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
        };
    };
    if ((CC_FIND(72613894, int0) == 1)) {
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(0, 1, 0);
        script11024(3);
        CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
    };
    if ((CC_FIND(72613895, int0) == 1)) {
        CC_SETTEXT(enum_getvalue(0, 36, 5853 as cs2enum, int1));
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(0, 1, 0);
        script11024(3);
        CC_SETOP(1, enum_getvalue(0, 36, 5853 as cs2enum, 0));
        CC_SETOP(2, enum_getvalue(0, 36, 5853 as cs2enum, 1));
        CC_SETOP(3, enum_getvalue(0, 36, 5853 as cs2enum, 2));
        CC_SETOP(4, enum_getvalue(0, 36, 5853 as cs2enum, 3));
        CC_SETOP(5, enum_getvalue(0, 36, 5853 as cs2enum, 4));
        CC_SETOP(6, enum_getvalue(0, 36, 5853 as cs2enum, 5));
        CC_SETOP(7, enum_getvalue(0, 36, 5853 as cs2enum, 6));
        CC_SETONOP(callback(script197, int0, -2147483644));
        CC_SETONTIMER(callback());
    };
    return;
}