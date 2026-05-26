//
function script14918(int0: number, int1: number): void {
    CC_DELETEALL(45482007);
    CC_DELETEALL(45482012);
    var int2 = dbrow_getfield(int0, 364640, 0);
    var int3 = item_getparam(int2, 2696);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    switch (int1) {
        case 1: {
            int7 = 2;
            int8 = ((IF_GETWIDTH(45482012) - ((int7 * 24) + ((int7 - 1) * 20))) / 2);
            if ((int3 < 61)) {
                int4 = script10873(int2, item_getparam(int2, 2697), 1, 1);
                [int5, int6] = script362(int4, 1);
                if ((int6 > 0)) {
                    string0 = `${inttostring(int5, 10)}${script8002()}${inttostring(int6, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)} Experience`;
                } else {
                    string0 = `${inttostring(int5, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)} Experience`;
                };
                script14919(45482012, -1, enum_getvalue(0, 23, 371 as cs2enum, int3), strconcat(script361(int4, 1), "xp"), string0, 0, int8, 0, -1);
            } else {
                script14919(45482012, -1, -1 as graphic, "-", "No xp gain", 1, int8, 0, -1);
            };
            int8 = (int8 + (24 + 20));
            script14919(45482012, -1, 10317 as graphic, TOSTRING_LOCALISED(script14688(int0), 1), "Chronote Value", 0, int8, 0, -1);
            IF_SETHIDE(0, 45482009);
            IF_SETHIDE(0, 45482010);
            int9 = script7127(int2, IF_GETHEIGHT(45482013), 45482032);
            IF_SETSIZE(IF_GETWIDTH(45482009), int9, 0, 0, 45482009);
            IF_SETPOSITION(IF_GETX(45482010), (IF_GETY(45482009) + int9), 0, 0, 45482010);
            int9 = script7129(int2, IF_GETHEIGHT(45482014), 45482015);
            IF_SETSIZE(IF_GETWIDTH(45482010), int9, 0, 0, 45482010);
            int9 = MAX(IF_GETHEIGHT(45482007), (IF_GETY(45482010) + IF_GETHEIGHT(45482010)));
            IF_SETSCROLLSIZE(0, int9, 45482007);
            IF_SETSCROLLPOS(0, MIN(IF_GETSCROLLY(45482007), int9), 45482007);
            script7791(45482018, 45482007);
            break;
        }
        case 2: {
            int7 = 1;
            int8 = ((IF_GETWIDTH(45482012) - ((int7 * 24) + ((int7 - 1) * 20))) / 2);
            script14919(45482012, -1, 10317 as graphic, TOSTRING_LOCALISED(script14688(int0), 1), "Chronote Value", 0, int8, 0, -1);
            script152(45482007, IF_GETWIDTH(45482007), (IF_GETHEIGHT(45482007) - IF_GETHEIGHT(45482008)), 0, IF_GETHEIGHT(45482008), 26, dbrow_getfield(int0, 364592, 0), 16777215);
            CC_SETTEXTALIGN(1, 0, 0);
            IF_SETHIDE(1, 45482009);
            IF_SETHIDE(1, 45482010);
            IF_SETSCROLLSIZE(0, 0, 45482007);
            IF_SETSCROLLPOS(0, MIN(IF_GETSCROLLY(45482007), int9), 45482007);
            script7791(45482018, 45482007);
            break;
        }
    };
    return;
}