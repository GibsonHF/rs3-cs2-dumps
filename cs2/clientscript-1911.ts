//
function script1911(): void {
    var int0 = 14541 as cs2enum;
    if ((script3825() == 1)) {
        int0 = 13468 as cs2enum;
    };
    var int1 = enum_getvalue(0, 0, int0, varbitplayer_42079);
    var int2 = enum_getvalue(0, 0, int0, (varbitplayer_42079 - 1));
    var int3 = -1;
    var int4 = 0;
    var int5 = 14542 as cs2enum;
    if ((script3825() == 1)) {
        int5 = 13474 as cs2enum;
    };
    var int6 = enum_getvalue(0, 26, int5, int1);
    var int7 = ENUM_GETOUTPUTCOUNT(int6);
    var string0 = "";
    var int8 = -1 as struct;
    CC_DELETEALL(comp(267, 35));  // qps:tab1_track_build
    CC_DELETEALL(comp(267, 36));  // qps:tab1_track_click
    IF_SETTEXT(inttostring(int2, 10), comp(267, 17));  // qps:tab1_header_progress_low
    IF_SETTEXT(inttostring(int1, 10), comp(267, 19));  // qps:tab1_header_progress_high
    IF_SETTEXT(`<col=C2B77C>${inttostring(varplayer_1297, 10)}</col> / ${inttostring(varplayer_423, 10)}`, comp(267, 26));  // qps:tab1_header_info_text
    if ((varbitplayer_42079 == varbitplayer_42078)) {
        string0 = script4583(int7, `Earn quest points to claim more rewards! Your next reward is at ${inttostring(int1, 10)} QP:`, `Earn quest points to claim more rewards! Your next rewards are at ${inttostring(int1, 10)} QP:`);
    } else {
        string0 = `Earn quest points to claim more rewards! Your previous rewards at ${inttostring(int1, 10)} QP were:`;
    };
    IF_SETTEXT(string0, comp(267, 28));  // qps:tab1_track_title
    int3 = (int3 + 1);
    while ((int3 < int7)) {
        int8 = enum_getvalue(0, 73, int6, int3);
        int4 = (270 - ((int7 - 1) * 80));
        script1924(17498147, 17498148, int3, -1, int8, (int4 + (160 * int3)), 30, 140, 140, 0, 1);
    };
    IF_SETONVARTRANSMIT(callback(script1910, 8159, 1), comp(267, 34));  // qps:tab1_track
    return;
}