//
function script5268(int0: number, string0: string, string1: string): void {
    var int1 = IF_GETNEXTSUBID(74514543);
    var int2 = ((int1 / 2) * 20);
    CC_CREATE(74514543, 4, int1);
    CC_SETTEXT(string0);
    var string1 = strconcat(string1, `<col=800000>${TEXT_SWITCH(int0, " Teams: Yes.", " Teams: No.")}`);
    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
    CC_SETSIZE(8100, 20, 2, 0);
    CC_SETONOP(callback(script5267));
    if ((MODULO(int1, 2) == 0)) {
        CC_SETPOSITION(2, int2, 0, 0);
    } else {
        CC_SETPOSITION(2, int2, 2, 0);
    };
    CC_SETTEXTFONT(66);
    CC_SETCOLOUR(65280);
    CC_SETTEXTSHADOW(1);
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
    CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 65280));
    CC_SETOP(1, "Select");
    if (((int1 >= 10) && (MODULO(int1, 2) == 0))) {
        IF_SETHIDE(0, 74514544);
        IF_SETSIZE(18, 2, 1, 1, 74514543);
        IF_SETSCROLLSIZE(0, (int2 + 20), 74514543);
        script31(74514544, 74514543, 792, 789, 790, 791, 773, 788);
        script72(74514544, 74514543, (((varbitplayer_14749 - 1) / 2) * 20));
    };
    return;
}