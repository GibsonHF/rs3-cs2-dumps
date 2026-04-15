//
function script1522(int0: unknown_int, int1: component, int2: component, int3: component, int4: component): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    var int5 = 0;
    if ((int0 == 102039552)) {
        int5 = 1;
    };
    var int6 = script6431();
    var int7 = 0;
    var int8 = IF_GETWIDTH(int1);
    var int9 = MIN(3, MAX(1, (int8 / 70)));
    int9 = (int8 / int9);
    var string0 = "";
    var string1 = "";
    IF_SETSIZE(int9, 0, 0, 1, int2);
    IF_SETPOSITION(int7, 0, 0, 0, int2);
    var int10 = ((int9 / 2) - 35);
    CC_CREATE(int2, 5, 0);
    CC_SETGRAPHIC(24429 as graphic);
    CC_SETSIZE(24, 24, 0, 0);
    CC_SETPOSITION(int10, 0, 0, 1);
    string1 = "The total number of levels gained across all skills.";
    if ((varbitplayer_19007 == 1)) {
        string1 = strconcat(string1, `<br><col=00DD00>The total number of virtual levels up to ${inttostring(120, 10)} (150 for Invention) gained across all skills.`);
    };
    if ((int6 == false)) {
        CC_SETONMOUSEREPEAT(callback(script8801, string1, -2147483645, -2147483643, 0, 1, 12));
        CC_SETONMOUSELEAVE(callback(script8805));
    } else {
        CC_SETONCLICK(callback(script7774, string1, -2147483645, -2147483643, 0));
    };
    int10 = (int10 + 30);
    CC_CREATE(int2, 4, 1);
    CC_SETSIZE(40, 0, 0, 1);
    if ((varbitplayer_19007 == 1)) {
        CC_SETPOSITION(int10, -6, 0, 1);
    } else {
        CC_SETPOSITION(int10, 0, 0, 1);
    };
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(16777215);
    if ((int5 == 0)) {
        CC_SETTEXT(inttostring(script2761(), 10));
    } else {
        CC_SETTEXT(inttostring(script10784(), 10));
    };
    script1523(int2, CC_GETID(), int5);
    if ((varbitplayer_19007 == 1)) {
        CC_CREATE(int2, 4, 2);
        CC_SETSIZE(40, 0, 0, 1);
        CC_SETPOSITION(int10, 6, 0, 1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(56576);
        if ((int5 == 0)) {
            CC_SETTEXT(inttostring(script11866(), 10));
        } else {
            CC_SETTEXT(inttostring(script11867(), 10));
        };
        script1523(int2, CC_GETID(), int5);
    };
    if ((int8 >= 120)) {
        IF_SETSIZE(int9, 0, 0, 1, int3);
        IF_SETPOSITION((int7 + int9), 0, 0, 0, int3);
        int10 = ((int9 / 2) - 35);
        CC_CREATE(int3, 5, 0);
        CC_SETGRAPHIC(9286 as graphic);
        CC_SETSIZE(24, 24, 0, 0);
        CC_SETPOSITION(int10, 0, 0, 1);
        string1 = "Combat level is calculated from levels achieved in combat related skills.";
        if (((int5 == 1) && (varplayer_10805 == 1))) {
            string1 = strconcat(string1, script17261(varplayer_10806, varplayer_10807, varplayer_10808));
        };
        if ((int6 == false)) {
            CC_SETONMOUSEREPEAT(callback(script8801, string1, -2147483645, -2147483643, 0, 1, 12));
            CC_SETONMOUSELEAVE(callback(script8805));
        } else {
            CC_SETONCLICK(callback(script7774, string1, -2147483645, -2147483643, 0));
        };
        int10 = (int10 + 30);
        CC_CREATE(int3, 4, 1);
        CC_SETSIZE(40, 0, 0, 1);
        CC_SETPOSITION(int10, 0, 0, 1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(16777215);
        if ((int5 == 0)) {
            CC_SETTEXT(inttostring(script1432(), 10));
        } else {
            CC_SETTEXT(inttostring(script10824(), 10));
        };
    };
    if (((int8 >= 180) && (int0 != 61341697))) {
        IF_SETSIZE(int9, 0, 0, 1, int4);
        IF_SETPOSITION((int7 + (int9 * 2)), 0, 0, 0, int4);
        int10 = ((int9 / 2) - 35);
        CC_CREATE(int4, 5, 0);
        CC_SETGRAPHIC(4376 as graphic);
        CC_SETSIZE(24, 24, 0, 0);
        CC_SETPOSITION(int10, 0, 0, 1);
        string1 = "Total quest points earned.";
        if ((int6 == false)) {
            CC_SETONMOUSEREPEAT(callback(script8801, string1, -2147483645, -2147483643, 0, 1, 12));
            CC_SETONMOUSELEAVE(callback(script8805));
        } else {
            CC_SETONCLICK(callback(script7774, string1, -2147483645, -2147483643, 0));
        };
        int10 = (int10 + 30);
        CC_CREATE(int4, 4, 1);
        CC_SETSIZE(40, 0, 0, 1);
        CC_SETPOSITION(int10, 0, 0, 1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(16777215);
        if ((int5 == 0)) {
            CC_SETTEXT(inttostring(varplayer_1297, 10));
        } else {
            CC_SETTEXT(inttostring(varplayer_5145, 10));
        };
    };
    return;
}