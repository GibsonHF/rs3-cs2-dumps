//
function script5268(int0: boolean, string0: string, string1: string): void {
    var int1 = IF_GETNEXTSUBID(comp(1137, 111));
    var int2 = ((int1 / 2) * 20);
    CC_CREATE(comp(1137, 111), 4, int1);
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
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETCOLOUR(65280);
    CC_SETTEXTSHADOW(true);
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
    CC_SETONMOUSELEAVE(callback(script1949, -2147483645, -2147483643, 65280));
    CC_SETOP(1, "Select");
    if (((int1 >= 10) && (MODULO(int1, 2) == 0))) {
        IF_SETHIDE(false, comp(1137, 112));
        IF_SETSIZE(18, 2, 1, 1, comp(1137, 111));
        IF_SETSCROLLSIZE(0, (int2 + 20), comp(1137, 111));
        script31(comp(1137, 112), comp(1137, 111), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
        script72(comp(1137, 112), comp(1137, 111), (((varbitplayer_14749 - 1) / 2) * 20));
    };
    return;
}