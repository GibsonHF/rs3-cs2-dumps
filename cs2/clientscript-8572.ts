//
function script8572(int0: int): void {
    var string0 = enum_getvalue(0, 36, 8657 as cs2enum, script2222(int0));
    var string1 = "This is your left click option.";
    if ((script6431() == true)) {
        string1 = "This is your tap option.";
    };
    var int1 = 18864;
    var int2 = 18863;
    var int3 = 18866;
    var int4 = 18865;
    var string2 = "Edit preset name";
    CC_CREATE(comp(1890, 4), 3, int0);
    CC_SETSIZE(220, 24, 0, 0);
    CC_SETPOSITION(30, ((29 * int0) + 5), 0, 0);
    CC_SETOP(1, "View preset");
    CC_SETONOP(callback(script8496, int0));
    CC_SETFILL(1);
    if ((varbitplayer_36830 == int0)) {
        CC_SETCOLOUR(script10495(15));
    } else {
        CC_SETCOLOUR(script10495(12));
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, script10495(9)));
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, script10495(12)));
    };
    CC_CREATE(comp(1890, 5), 4, int0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(210, 25, 0, 0);
    CC_SETPOSITION(35, ((29 * int0) + 4), 0, 0);
    CC_CREATE(comp(1890, 6), 5, int0);
    CC_SETGRAPHIC(18863 as graphic);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(229, ((29 * int0) + 8), 0, 0);
    CC_SETOP(1, "Remove preset");
    CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int1));
    CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int2));
    CC_CREATE(123863047, 5, int0);
    CC_SETGRAPHIC(18865);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(209, ((29 * int0) + 8), 0, 0);
    CC_SETOP(1, "Edit preset");
    CC_SETONOP(callback(script395, int0));
    CC_SETONMOUSEOVER(callback(script5336, -2147483645, -2147483643, int3));
    CC_SETONMOUSELEAVE(callback(script5336, -2147483645, -2147483643, int4));
    script10428(123863138, 123863139, 8657, ENUM_GETOUTPUTCOUNT(8657), "Edit preset name", script2222(varbitplayer_36830), 0);
    return;
}