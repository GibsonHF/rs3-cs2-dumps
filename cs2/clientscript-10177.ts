//
function script10177(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int6);
    CC_DELETEALL(int8);
    CC_DELETEALL(int9);
    CC_DELETEALL(int10);
    if ((script10179() == 0)) {
        IF_SETHIDE(1, 48168990);
        IF_SETHIDE(0, 48168985);
        IF_SETOPCURSOR(1, 204, 48168988);
        IF_SETOPCURSOR(1, 204, 48168989);
        return;
    };
    IF_SETHIDE(0, 48168990);
    IF_SETHIDE(1, 48168985);
    var int11 = 0;
    var int12 = 24;
    var string0 = "";
    var string1 = "";
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    [string0, string1, int13, int14, int15] = script10178(int11);
    while (((int11 < 30) && (strcmp(string0, "") != 0))) {
        CC_CREATE(int2, 3, int11);
        CC_SETSIZE(0, int12, 1, 0);
        CC_SETPOSITION(0, (int12 * int11), 0, 0);
        CC_SETFILL(1);
        if ((MODULO(int11, 2) == 0)) {
            CC_SETCOLOUR(1846324);
        } else {
            CC_SETCOLOUR(464928);
        };
        CC_CREATE(int8, 4, int11);
        CC_SETTEXT(string0);
        CC_SETSIZE(0, int12, 1, 0);
        CC_SETPOSITION(0, (int12 * int11), 0, 0);
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(14931919);
        CC_SETTEXTSHADOW(0);
        CC_CREATE(int3, 4, int11);
        CC_SETTEXT(string1);
        CC_SETSIZE(0, int12, 1, 0);
        CC_SETPOSITION(0, (int12 * int11), 0, 0);
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(14931919);
        CC_SETTEXTSHADOW(0);
        CC_CREATE(int9, 4, int11);
        CC_SETTEXT(inttostring(int13, 10));
        CC_SETSIZE(0, int12, 1, 0);
        CC_SETPOSITION(0, (int12 * int11), 0, 0);
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(14931919);
        CC_SETTEXTSHADOW(0);
        CC_CREATE(int4, 5, int11);
        CC_SETSIZE(15, 15, 0, 0);
        CC_SETPOSITION(0, ((int12 * int11) + 5), 1, 0);
        if ((int14 == 1)) {
            CC_SETGRAPHIC(13165);
        } else {
            CC_SETGRAPHIC(13166);
        };
        CC_CREATE(int5, 4, int11);
        CC_SETSIZE(15, 15, 0, 0);
        CC_SETPOSITION(0, ((int12 * int11) + 5), 1, 0);
        CC_SETHIDE(1);
        if ((int14 == 1)) {
            CC_SETTEXT("1");
        } else {
            CC_SETTEXT("0");
        };
        CC_CREATE(int6, 5, int11);
        CC_SETSIZE(15, 15, 0, 0);
        CC_SETPOSITION(0, ((int12 * int11) + 5), 1, 0);
        if ((int15 == 1)) {
            CC_SETGRAPHIC(13165);
        } else {
            CC_SETGRAPHIC(13166);
        };
        CC_CREATE(int7, 4, int11);
        CC_SETSIZE(15, 15, 0, 0);
        CC_SETPOSITION(0, ((int12 * int11) + 5), 1, 0);
        CC_SETHIDE(1);
        if ((int15 == 1)) {
            CC_SETTEXT("1");
        } else {
            CC_SETTEXT("0");
        };
        CC_CREATE(int10, 5, int11);
        CC_SETSIZE(24, 24, 0, 0);
        CC_SETPOSITION(0, (int12 * int11), 0, 0);
        CC_SETGRAPHIC(23769);
        CC_SETOP(1, "More Info");
        [string0, string1, int13, int14, int15] = script10178(++int11);
        int16 = (CC_GETHEIGHT() + CC_GETY());
    };
    if ((int16 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int16, int0);
        IF_SETHIDE(0, int1);
        script7791(int1, int0);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        IF_SETHIDE(1, int1);
    };
    IF_SETSIZE(0, int16, 0, 0, 48168963);
    IF_SETSIZE(0, int16, 0, 0, 48168962);
    IF_SETSIZE(0, int16, 0, 0, 48168961);
    IF_SETSIZE(0, int16, 0, 0, 48168960);
    IF_SETSIZE(0, int16, 0, 0, 48168964);
    return;
}