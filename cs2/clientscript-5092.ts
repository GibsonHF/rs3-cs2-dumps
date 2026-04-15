//
function script5092(): void {
    CC_DELETEALL(comp(1112, 3));
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((varbitplayer_7079 != 3)) {
        if ((varbitplayer_7059 > 0)) {
            string0 = "<br>Members:<br>Score:";
            string3 = string0;
            string1 = `<br>${TOSTRING_LOCALISED(AND(varclient_788, 1023), 1)}`;
            string4 = `<br>${TOSTRING_LOCALISED(AND((varclient_788 / POW(2, 10)), 1023), 1)}`;
            string1 = `${string1}<br>${TOSTRING_LOCALISED(AND(varclient_786, 65535), 1)}`;
            int8 = (varclient_786 / POW(2, 16));
            if ((int8 < 0)) {
                int8 = (POW(2, 16) + int8);
            };
            string4 = `${string4}<br>${TOSTRING_LOCALISED(int8, 1)}`;
            int8 = enum_getvalue(0, 0, 3928 as cs2enum, varbitplayer_7060);
            if ((int8 < 2147483647)) {
                string1 = `${string1} / ${TOSTRING_LOCALISED(int8, 1)}`;
                string4 = `${string4} / ${TOSTRING_LOCALISED(int8, 1)}`;
            };
            if ((varbitplayer_7059 < 2)) {
                string6 = "<br><br><br>Neutral players:";
                string7 = `<br><br><br>${TOSTRING_LOCALISED((varclient_788 / POW(2, 20)), 1)}`;
            } else {
                [string6, string7] = ["<br><br><br>", "<br><br><br>"];
            };
            if ((varbitplayer_7079 == 1)) {
                [string2, string5] = ["Your team:", "Blue team:"];
            } else if ((varbitplayer_7079 == 2)) {
                [string2, string5] = ["Red team:", "Your team:"];
            } else {
                [string2, string5] = ["Red team:", "Blue team:"];
                if ((varbitplayer_7059 < 2)) {
                    string6 = `${string6}<br>Your score:`;
                    string7 = `${string7}<br>${TOSTRING_LOCALISED(varbitplayer_7080, 1)}`;
                    int8 = enum_getvalue(0, 0, 3928 as cs2enum, varbitplayer_7061);
                    if ((int8 < 2147483647)) {
                        string7 = `${string7} / ${TOSTRING_LOCALISED(int8, 1)}`;
                    };
                };
            };
        } else {
            [string6, string7] = ["Score:", TOSTRING_LOCALISED(varbitplayer_7080, 1)];
        };
        int8 = enum_getvalue(0, 0, 3940 as cs2enum, varbitplayer_7071);
        if ((int8 != 0)) {
            string6 = `${string6}<br>Reward for pking:`;
            if ((int8 > 0)) {
                string7 = `${string7}<br>${inttostring(int8, 10)}`;
            } else {
                string7 = `${string7}<br>A key`;
            };
        };
        if ((varclient_787 < 0)) {
            string6 = `${string6}<br>Scoring begins in:`;
            if ((varclient_787 <= -2147483648)) {
                string7 = `${string7}<br>-`;
            } else {
                int6 = (0 - varclient_787);
            };
        };
        if (((varbitplayer_7062 > 0) && (varclient_787 > 0))) {
            string6 = `${string6}<br>Time remaining:`;
            int6 = varclient_787;
        };
        int5 = ((PARAHEIGHT(string6, 2147483647, 66 as fontmetrics) * 10) + 2);
        int0 = ((PARAWIDTH(string0, 2147483647, 66 as fontmetrics) + 3) + PARAWIDTH(string1, 2147483647, 66 as fontmetrics));
        int0 = MAX(int0, PARAWIDTH(string2, 2147483647, 66 as fontmetrics));
        int1 = ((PARAWIDTH(string3, 2147483647, 66 as fontmetrics) + 3) + PARAWIDTH(string4, 2147483647, 66 as fontmetrics));
        int1 = MAX(int1, PARAWIDTH(string5, 2147483647, 66 as fontmetrics));
        int3 = ((PARAWIDTH(string6, 2147483647, 66 as fontmetrics) + 3) + MAX(PARAWIDTH(string7, 2147483647, 66 as fontmetrics), 40));
        int2 = ((int0 + 5) + int1);
        int4 = MAX(int3, int2);
        int2 = ((int4 - int2) / 2);
        [int0, int1] = [(int0 + int2), (int1 + int2)];
        IF_SETSIZE((int4 + 8), (int5 + 8), 0, 0, comp(1112, 1));
        CC_CREATE(comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_CREATE[1](comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_SETSIZE(int0, 0, 0, 1);
        CC_SETSIZE[1](int0, 0, 0, 1);
        CC_SETPOSITION(0, 0, 0, 1);
        CC_SETPOSITION[1](0, 0, 0, 1);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTFONT[1](66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTALIGN[1](2, 0, 0);
        CC_SETCOLOUR(16711680);
        CC_SETCOLOUR[1](16711680);
        CC_SETTEXT(string0);
        CC_SETTEXT[1](string1);
        CC_CREATE(comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_SETSIZE(int0, 0, 0, 1);
        CC_SETPOSITION(0, 0, 0, 1);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETCOLOUR(16711680);
        CC_SETTEXT(string2);
        CC_CREATE(comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_CREATE[1](comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_SETSIZE(int1, 0, 0, 1);
        CC_SETSIZE[1](int1, 0, 0, 1);
        CC_SETPOSITION(0, 0, 2, 1);
        CC_SETPOSITION[1](0, 0, 2, 1);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTFONT[1](66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTALIGN[1](2, 0, 0);
        CC_SETCOLOUR(8355839);
        CC_SETCOLOUR[1](8355839);
        CC_SETTEXT(string3);
        CC_SETTEXT[1](string4);
        CC_CREATE(comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_SETSIZE(int1, 0, 0, 1);
        CC_SETPOSITION(0, 0, 2, 1);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETCOLOUR(8355839);
        CC_SETTEXT(string5);
        if ((STRING_LENGTH(string0) > 0)) {
            CC_CREATE(comp(1112, 3), 9, IF_GETNEXTSUBID(comp(1112, 3)));
            CC_CREATE[1](comp(1112, 3), 9, IF_GETNEXTSUBID(comp(1112, 3)));
            CC_SETSIZE(0, 27, 0, 0);
            CC_SETSIZE[1](0, 27, 0, 0);
            CC_SETPOSITION((int0 + 2), 3, 0, 0);
            CC_SETPOSITION[1]((CC_GETX() + 1), (CC_GETY() + 1), 0, 0);
            CC_SETCOLOUR(8355711);
            CC_SETCOLOUR[1](4144959);
        };
        CC_CREATE(comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_CREATE[1](comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
        CC_SETSIZE(int3, 0, 0, 1);
        CC_SETSIZE[1](int3, 0, 0, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETPOSITION[1](0, 0, 1, 1);
        CC_SETTEXTFONT(66 as fontmetrics);
        CC_SETTEXTFONT[1](66 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXTALIGN[1](2, 0, 0);
        CC_SETCOLOUR(13619151);
        CC_SETCOLOUR[1](13619151);
        CC_SETTEXT(string6);
        CC_SETTEXT[1](string7);
        if ((int6 > 0)) {
            CC_CREATE(comp(1112, 3), 4, IF_GETNEXTSUBID(comp(1112, 3)));
            CC_SETSIZE(int3, 12, 0, 0);
            CC_SETPOSITION((MAX((int4 - int3), 0) / 2), 0, 2, 2);
            CC_SETTEXTFONT(66 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(2, 0, 0);
            CC_SETCOLOUR(13619151);
            int7 = (int6 * 30);
            if (((int7 > varclient_995) || ((int7 + 29) < varclient_995))) {
                varclient_995 = (int7 + 15);
            };
            CC_SETTEXT(script5094());
            CC_SETONTIMER(callback(script5093, -2147483645, -2147483643));
        };
    };
    return;
}