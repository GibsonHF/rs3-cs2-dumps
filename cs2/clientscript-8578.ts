//
function script8578(): void {
    var int0 = script2180(struct_getparam(37695, 6685));
    var int1 = script2180(struct_getparam(37695, 6686));
    var int2 = 123928601;
    var string0 = "";
    var int3 = 35;
    var int4 = 3;
    var int5 = 0;
    var int6 = 0;
    var int7 = false;
    var int8 = false;
    var int9 = struct_getparam(37698, 6674);
    script13310(123928584, 123928609, 27, 4000);
    script13310(123928602, 123928610, 28, 4000);
    IF_SETTEXT(`${inttostring(script8579(1), 10)}/${inttostring(int9, 10)}`, comp(1891, 30));  // trh_rifts:skill1_progress_text
    IF_SETTEXT(`${inttostring(script8579(2), 10)}/${inttostring(int9, 10)}`, comp(1891, 55));  // trh_rifts:skill2_progress_text
    IF_SETGRAPHIC(struct_getparam(37695, 6703), comp(1891, 40));  // trh_rifts:skill1_prize_graphic
    IF_SETGRAPHIC(struct_getparam(37695, 6704), comp(1891, 20));  // trh_rifts:skill2_prize_graphic
    if ((varbitplayer_36876 == int9)) {
        int7 = 1;
        IF_SETGRAPHIC(struct_getparam(37695, 6705), comp(1891, 40));  // trh_rifts:skill1_prize_graphic
    };
    if ((varbitplayer_36877 == int9)) {
        int8 = 1;
        IF_SETGRAPHIC(struct_getparam(37695, 6706), comp(1891, 20));  // trh_rifts:skill2_prize_graphic
    };
    script8577(123928616, -1);
    script8577(123928596, -1);
    IF_SETHIDE(int7, comp(1891, 41));  // trh_rifts:skill1_prize_lock
    IF_SETHIDE(int8, comp(1891, 42));  // trh_rifts:skill2_prize_lock
    var string1 = struct_getparam(37695, 6707);
    var string2 = struct_getparam(37695, 6708);
    if ((STRING_LENGTH(string1) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -1), comp(1891, 40));  // trh_rifts:skill1_prize_graphic
    };
    if ((STRING_LENGTH(string2) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -1), comp(1891, 20));  // trh_rifts:skill2_prize_graphic
    };
    stack(int2);
    stack(5);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETSIZE(int3, int3, 0, 0);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, int0));
    string0 = `${enum_getvalue(0, 36, 108, int0)} Progress`;
    stack(int2);
    stack(4);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETPOSITION((int3 + 10), int5, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(PARAWIDTH(string0, 300, 26 as fontmetrics), int3, 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    int5 = (int5 + 90);
    stack(int2);
    stack(5);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETSIZE(int3, int3, 0, 0);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548, int1));
    string0 = `${enum_getvalue(0, 36, 108, int1)} Progress`;
    stack(int2);
    stack(4);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETPOSITION((int3 + 10), int5, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETSIZE(PARAWIDTH(string0, 300, 26 as fontmetrics), int3, 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(16777215);
    return;
}