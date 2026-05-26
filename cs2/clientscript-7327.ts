//
function script7327(): void {
    var int0 = -1 as cs2enum;
    var int1 = -1 as cs2enum;
    var int2 = -1 as cs2enum;
    [int0, int1, int2] = script7386();
    var int3 = script4186();
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int4 = comp(-1, 65535);
    var int5 = 1;
    while ((int5 < 5)) {
        switch (int5) {
            case 1: {
                string0 = enum_getvalue(0, 36, int0, varbitplayer_17040);
                string1 = enum_getvalue(0, 36, int1, varbitplayer_17041);
                string2 = enum_getvalue(0, 36, int2, varbitplayer_17042);
                int4 = comp(1275, 13);
                break;
            }
            case 2: {
                string0 = enum_getvalue(0, 36, int0, varbitplayer_17048);
                string1 = enum_getvalue(0, 36, int1, varbitplayer_17049);
                string2 = enum_getvalue(0, 36, int2, varbitplayer_17050);
                int4 = comp(1275, 19);
                break;
            }
            case 3: {
                string0 = enum_getvalue(0, 36, int0, varbitplayer_17056);
                string1 = enum_getvalue(0, 36, int1, varbitplayer_17057);
                string2 = enum_getvalue(0, 36, int2, varbitplayer_17058);
                int4 = comp(1275, 25);
                break;
            }
            case 4: {
                string0 = enum_getvalue(0, 36, int0, varbitplayer_17064);
                string1 = enum_getvalue(0, 36, int1, varbitplayer_17065);
                string2 = enum_getvalue(0, 36, int2, varbitplayer_17066);
                int4 = comp(1275, 31);
                break;
            }
        };
        if ((int3 < int5)) {
            IF_SETTEXT("Empty Ship Slot", int4);
        } else {
            IF_SETTEXT(`${string0}${string1}${string2}`, int4);
        };
        int5 = (int5 + 1);
    };
    return;
}