//
function script4491(int0: int): void {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var string0 = "";
    var int8 = -1;
    var string1 = "";
    var string2 = "";
    var int9 = -1;
    var string3 = "";
    var int10 = -1;
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int11 = -1;
    var int12 = 0;
    var string7 = "";
    var string8 = "";
    var string9 = "";
    var int13 = 0;
    var int14 = 0;
    var string10 = "";
    var string11 = "";
    var string12 = "";
    var int15 = -1;
    var int16 = -1;
    [int1, int2, int6, int7, string0, int8, string1, string2, int9, string3, int10, string4, string5, string6, int11, int12, string7, string8, string9, string10, int3, int5, string12, string11, int4, int15, int16] = script5722(int0);
    if (((int15 != int16) && (int16 != -1))) {
        int13 = 1;
        if ((varbitplayer_40718 <= 0)) {
            if ((int15 == DATE_RUNEDAY())) {
                int14 = 1;
            };
        } else if ((int15 == DATE_RUNEDAY_FROMDATE(varbitplayer_40718, varbitplayer_40715, varbitplayer_40716))) {
            int14 = 1;
        };
    };
    var string13 = `<col=ffcb05>${string0}</col><br><br><col=ffffff>${string2}</col>`;
    if (((STRING_LENGTH(string1) == 0) && (int8 != -1))) {
        string1 = enum_getvalue(0, 36, 11809 as cs2enum, int8);
    };
    if (((STRING_LENGTH(string4) == 0) && (int10 != -1))) {
        string4 = inttostring(int10, 10);
    };
    if (((STRING_LENGTH(string3) == 0) && (int9 != -1))) {
        string3 = enum_getvalue(0, 36, 11811 as cs2enum, int9);
    };
    return;
}