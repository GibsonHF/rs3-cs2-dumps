//
function script8578(): void {
    var int0 = script2180(struct_getparam(37695, 6685));
    var int1 = script2180(struct_getparam(37695, 6686));
    var int2 = comp(1891, 25);
    var string0 = "";
    var int3 = 35;
    var int4 = 3;
    var int5 = 0;
    var int6 = 0;
    var int7 = false;
    var int8 = false;
    var int9 = struct_getparam(37698, 6674);
    script13310(comp(1891, 8), comp(1891, 33), 27, 4000);
    script13310(comp(1891, 26), comp(1891, 34), 28, 4000);
    IF_SETTEXT(`${inttostring(script8579(1), 10)}/${inttostring(int9, 10)}`, comp(1891, 30));
    IF_SETTEXT(`${inttostring(script8579(2), 10)}/${inttostring(int9, 10)}`, comp(1891, 55));
    stack(struct_getparam(37695, 6703));
    stack(123928616);
    IF_SETGRAPHIC();
    stack(37695);
    stack(6704);
    struct_getparam();
    stack(123928596);
    IF_SETGRAPHIC();
    if ((varbitplayer_36876 == int9)) {
        int7 = true;
        stack(struct_getparam(37695, 6705));
        stack(123928616);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_36877 == int9)) {
        int8 = true;
        stack(struct_getparam(37695, 6706));
        stack(123928596);
        IF_SETGRAPHIC();
    };
    script8577(comp(1891, 40), -1);
    script8577(comp(1891, 20), -1);
    IF_SETHIDE(int7, comp(1891, 41));
    IF_SETHIDE(int8, comp(1891, 42));
    var string1 = struct_getparam(37695, 6707);
    var string2 = struct_getparam(37695, 6708);
    if ((STRING_LENGTH(string1) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -1), 123928616);
    };
    if ((STRING_LENGTH(string2) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -1), 123928596);
    };
    CC_CREATE(int2, 5, int6++);
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETSIZE(int3, int3, 0, 0);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548 as cs2enum, int0));
    string0 = `${enum_getvalue(0, 36, 108 as cs2enum, int0)} Progress`;
    CC_CREATE(int2, 4, int6++);
    CC_SETPOSITION((int3 + 10), int5, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(PARAWIDTH(string0, 300, 26 as fontmetrics), int3, 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    int5 = (int5 + 90);
    CC_CREATE(int2, 5, int6++);
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETSIZE(int3, int3, 0, 0);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548 as cs2enum, int1));
    string0 = `${enum_getvalue(0, 36, 108 as cs2enum, int1)} Progress`;
    CC_CREATE(int2, 4, int6++);
    CC_SETPOSITION((int3 + 10), int5, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(PARAWIDTH(string0, 300, 26 as fontmetrics), int3, 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    return;
}