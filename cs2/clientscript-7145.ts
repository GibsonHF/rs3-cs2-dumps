//
function script7145(): void {
    var int0 = 0;
    var string0 = "";
    var string1 = "";
    if ((varplayer_1169 != -1 as cs2enum)) {
        varclient_6404 = varplayer_1169;
        int0 = enum_getvalue(26, 0, 13284 as cs2enum, varplayer_1169);
        string1 = enum_getvalue(0, 36, 13761 as cs2enum, int0);
        script9554(comp(1370, 1), comp(1370, 31), comp(1370, 2), string1, 21218 as struct);
        script9554(comp(1251, 35), comp(1251, 37), comp(1251, 36), string1, 21217 as struct);
        string0 = enum_getvalue(26, 36, 13283 as cs2enum, varplayer_1169);
        if ((STRING_LENGTH(string0) == 0)) {
            string0 = enum_getvalue(0, 36, 6816 as cs2enum, int0);
        };
        if ((CC_FIND(comp(1370, 29), 3) == 1)) {
            CC_SETTEXT(string0);
        };
    };
    return;
}