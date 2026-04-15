//
function script9567(int0: fontmetrics, int1: int, int2: int, int3: component, int4: component, string0: string): void {
    if ((((int0 == 27 as fontmetrics) && (script6431() == true)) || (script15884(string0, " ") <= 5))) {
        var int0 = 28 as fontmetrics;
    };
    var int5 = ((5 * 2) + 12);
    var int6 = PARAWIDTH(string0, (int2 - int5), int0);
    var int7 = script7593(string0, (int2 - int5), int0, 0);
    int5 = 10;
    CC_CREATE(int4, 4, 0);
    CC_SETSIZE(int5, int7, 1, 0);
    CC_SETPOSITION(0, 2, 1, 0);
    CC_SETCOLOUR(int1);
    CC_SETTEXT(string0);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTFONT(int0);
    CC_SETTEXTALIGN(0, 1, 0);
    IF_SETSIZE((int6 + int5), (int7 + 3), 0, 0, int3);
    if (((varbitplayer_60413 == 1) || (script13749() == true))) {
        return;
    };
    var int8 = 0;
    var int9 = 0;
    [int8, int9] = unk11051();
    if ((--int8 <= 0)) {
        return;
    };
    int7 = (int7 + 5);
    CC_CREATE(int4, 5, 1);
    CC_SETSIZE(0, 2, 1, 0);
    CC_SETPOSITION(0, int7, 1, 0);
    CC_SETGRAPHIC(35516 as graphic);
    int7 = (int7 + 4);
    CC_CREATE(int4, 4, 2);
    CC_SETSIZE(int5, 16, 1, 0);
    CC_SETPOSITION(0, int7, 1, 0);
    CC_SETCOLOUR(int1);
    CC_SETTEXT(`+${inttostring(int8, 10)} ${script4583(int8, "option", "options")}`);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(2, 1, 0);
    IF_SETSIZE((int6 + int5), (int7 + 17), 0, 0, int3);
    return;
}