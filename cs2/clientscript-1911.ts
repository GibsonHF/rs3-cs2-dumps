//
function script1911(): void {
    var int0 = enum_getvalue(0, 0, 14541 as cs2enum, varbitplayer_42079);
    var int1 = enum_getvalue(0, 0, 14541 as cs2enum, (varbitplayer_42079 - 1));
    var int2 = -1;
    var int3 = 0;
    var int4 = enum_getvalue(0, 26, 14542 as cs2enum, int0);
    var int5 = ENUM_GETOUTPUTCOUNT(int4);
    var string0 = "";
    var int6 = -1 as struct;
    CC_DELETEALL(comp(267, 35));
    CC_DELETEALL(comp(267, 36));
    IF_SETTEXT(inttostring(int1, 10), comp(267, 17));
    IF_SETTEXT(inttostring(int0, 10), comp(267, 19));
    IF_SETTEXT(`<col=C2B77C>${inttostring(varplayer_1297, 10)}</col> / ${inttostring(varplayer_423, 10)}`, comp(267, 26));
    if ((varbitplayer_42079 == varbitplayer_42078)) {
        string0 = script4583(int5, `Earn quest points to claim more rewards! Your next reward is at ${inttostring(int0, 10)} QP:`, `Earn quest points to claim more rewards! Your next rewards are at ${inttostring(int0, 10)} QP:`);
    } else {
        string0 = `Earn quest points to claim more rewards! Your previous rewards at ${inttostring(int0, 10)} QP were:`;
    };
    IF_SETTEXT(string0, comp(267, 28));
    while ((++int2 < int5)) {
        int6 = enum_getvalue(0, 73, int4, int2);
        int3 = (270 - ((int5 - 1) * 80));
        script1924(comp(267, 35), comp(267, 36), int2, -1, int6, (int3 + (160 * int2)), 30, 140, 140, 0, true);
    };
    IF_SETONVARTRANSMIT(callback(script1910, 8159, 1), comp(267, 34));
    return;
}