//
function script7147(): void {
    script10085(comp(1371, 19), comp(1371, 20), 40049 as struct, 1, varplayer_8846, varplayer_8847);
    var string0 = enum_getvalue(26, 36, 13283 as cs2enum, varplayer_1169);
    var int0 = enum_getvalue(26, 0, 13284 as cs2enum, varplayer_1169);
    if ((STRING_LENGTH(string0) == 0)) {
        string0 = enum_getvalue(0, 36, 6816 as cs2enum, int0);
    };
    CC_DELETEALL(comp(1370, 29));
    script1458(comp(1370, 29), comp(1370, 30), 28553 as struct, string0, script6427(varplayer_8846));
    IF_SETPAUSETEXT(`Make ${inttostring(varplayer_8847, 10)} ${OC_NAME(varplayer_1170)}`, comp(1370, 30));
    return;
}