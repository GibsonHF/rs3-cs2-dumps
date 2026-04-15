//
function script4506(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int, int10: int, int11: int, int12: int, int13: int, int14: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string, string9: string, string10: string, string11: string, string12: string): void {
    if ((varbitclient_40728 != int1)) {
        return;
    };
    var int15 = 0;
    var int16 = 0;
    var int17 = enum_getvalue(0, 73, 11807 as cs2enum, int1);
    if ((int2 == -1)) {
        var int2 = struct_getparam(int17, 5799);
    };
    if ((int3 == -1)) {
        var int3 = struct_getparam(int17, 6045);
    };
    if ((int4 == -1)) {
        var int4 = struct_getparam(int17, 6099);
    };
    if ((int5 == -1)) {
        var int5 = struct_getparam(int17, 6100);
    };
    if ((STRING_LENGTH(string0) == 0)) {
        var string0 = struct_getparam(int17, 6101);
    };
    if ((int6 == -1)) {
        var int6 = struct_getparam(int17, 6102);
    };
    if ((STRING_LENGTH(string1) == 0)) {
        var string1 = struct_getparam(int17, 6103);
    };
    if ((STRING_LENGTH(string2) == 0)) {
        var string2 = struct_getparam(int17, 6104);
    };
    if ((int7 == -1)) {
        var int7 = struct_getparam(int17, 6105);
    };
    if ((STRING_LENGTH(string3) == 0)) {
        var string3 = struct_getparam(int17, 6106);
    };
    if ((int8 == -1)) {
        var int8 = struct_getparam(int17, 6107);
    };
    if ((STRING_LENGTH(string4) == 0)) {
        var string4 = struct_getparam(int17, 6108);
    };
    if ((STRING_LENGTH(string5) == 0)) {
        var string5 = struct_getparam(int17, 6109);
    };
    if ((STRING_LENGTH(string6) == 0)) {
        var string6 = struct_getparam(int17, 6110);
    };
    if ((int9 == -1)) {
        var int9 = struct_getparam(int17, 6111);
    };
    if ((int10 == -1)) {
        var int10 = struct_getparam(int17, 6112);
    };
    if ((STRING_LENGTH(string7) == 0)) {
        var string7 = struct_getparam(int17, 6113);
    };
    if ((STRING_LENGTH(string8) == 0)) {
        var string8 = struct_getparam(int17, 6114);
    };
    if ((STRING_LENGTH(string9) == 0)) {
        var string9 = struct_getparam(int17, 6115);
    };
    if ((STRING_LENGTH(string10) == 0)) {
        var string10 = struct_getparam(int17, 5690);
    };
    if ((int11 == -1)) {
        var int11 = struct_getparam(int17, 7183);
    };
    if ((int12 == -1)) {
        var int12 = struct_getparam(int17, 7180);
    };
    if ((STRING_LENGTH(string12) == 0)) {
        switch (MAP_LANG()) {
            case 1: {
                var string12 = struct_getparam(int17, 7196);
                break;
            }
            case 2: {
                string12 = struct_getparam(int17, 7197);
                break;
            }
            case 3: {
                string12 = struct_getparam(int17, 7198);
                break;
            }
        };
        if ((STRING_LENGTH(string12) == 0)) {
            string12 = struct_getparam(int17, 7179);
        };
        if (((STRING_LENGTH(string12) > 0) && (struct_getparam(int17, 5799) != 302))) {
            string12 = strconcat(string12, "&utm_source=rs3-cal&utm_medium=in-game-link&utm_term=newspost");
        };
    };
    if ((STRING_LENGTH(string11) == 0)) {
        switch (MAP_LANG()) {
            case 1: {
                var string11 = struct_getparam(int17, 7279);
                break;
            }
            case 2: {
                string11 = struct_getparam(int17, 7280);
                break;
            }
            case 3: {
                string11 = struct_getparam(int17, 7281);
                break;
            }
        };
        if ((STRING_LENGTH(string11) == 0)) {
            string11 = struct_getparam(int17, 1368);
        };
    };
    if ((int13 == -1)) {
        var int13 = struct_getparam(int17, 7184);
    };
    if ((int14 == -1)) {
        var int14 = struct_getparam(int17, 7185);
    };
    if (((int13 != int14) && (int14 != -1))) {
        int15 = 1;
        if ((int2 == 7)) {
            if ((int3 == DATE_RUNEDAY_FROMDATE(varbitplayer_40718, varbitplayer_40715, varbitplayer_40716))) {
                int16 = 1;
            };
        } else if ((int13 == DATE_RUNEDAY_FROMDATE(varbitplayer_40718, varbitplayer_40715, varbitplayer_40716))) {
            int16 = 1;
        };
    };
    var string13 = `<col=ffcb05>${string0}</col><br><br><col=ffffff>${string2}</col>`;
    if (((STRING_LENGTH(string1) == 0) && (int6 != -1))) {
        string1 = enum_getvalue(0, 36, 11809 as cs2enum, int6);
    };
    if (((STRING_LENGTH(string4) == 0) && (int8 != -1))) {
        string4 = inttostring(int8, 10);
    };
    if (((STRING_LENGTH(string3) == 0) && (int7 != -1))) {
        string3 = enum_getvalue(0, 36, 11811 as cs2enum, int7);
    };
    return;
}