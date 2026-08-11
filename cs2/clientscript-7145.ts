//
function script7145(): void {
    var int0 = 0;
    var string0 = "";
    var string1 = "";
    if ((varplayer_1169 != -1 as cs2enum)) {
        varclient_6404 = varplayer_1169;
        int0 = enum_getvalue(26, 0, 13284 as cs2enum, varplayer_1169);
        string1 = enum_getvalue(0, 36, 13761 as cs2enum, int0);
        script9554(89784321, 89784351, 89784322, string1, 21218);
        script9554(81985571, 81985573, 81985572, string1, 21217);
        string0 = enum_getvalue(26, 36, 13283, varplayer_1169);
        if ((STRING_LENGTH(string0) == 0)) {
            string0 = enum_getvalue(0, 36, 6816, int0);
        };
        if ((CC_FIND(comp(1370, 29), 3) == 1)) {  // makex2012:make_build
            CC_SETTEXT(string0);
        };
    };
    return;
}