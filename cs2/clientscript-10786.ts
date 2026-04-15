//
function script10786(): void {
    CC_DELETEALL(comp(1560, 20));
    var int0 = script10495(1);
    var int1 = script10495(2);
    var int2 = 16777215;
    var int3 = script10495(7);
    var int4 = 5;
    var string0 = script4694(varbitplayer_26173, varbitplayer_26174, varclient_4669, varclient_4669);
    CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETTEXTFONT(32 as fontmetrics);
    CC_SETCOLOUR(int0);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 54, 0, 0);
    CC_SETTEXTALIGN(1, 1, 18);
    CC_SETTEXT(string0);
    int4 = (int4 + (54 + 5));
    CC_CREATE(comp(1560, 20), 9, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETCOLOUR(int3);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 10), 0, 0, 0);
    int4 = (int4 + 5);
    CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETCOLOUR(int1);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 16, 0, 0);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXT("Clan");
    int4 = (int4 + (16 + 5));
    CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(int2);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 16, 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    if (((varplayer_4985 == 0) && (STRING_LENGTH(varclient_4672) > 0))) {
        CC_SETTEXT(varclient_4672);
        CC_SETMOUSEOVERCURSOR(210);
        CC_SETOP(1, "View Clan Information");
        CC_SETONOP(callback(script15228, 28));
        CC_CREATE(102236180, 5, IF_GETNEXTSUBID(102236180));
        CC_SETGRAPHIC(26767);
        CC_SETSIZE(24, 24, 0, 0);
        CC_SETPOSITION(5, (int4 - 4), 2, 0);
    } else {
        CC_SETTEXT("N/A");
    };
    int4 = (int4 + (16 + 5));
    if ((STRING_LENGTH(varclient_8255) > 0)) {
        CC_CREATE(comp(1560, 20), 9, IF_GETNEXTSUBID(comp(1560, 20)));
        CC_SETCOLOUR(int3);
        CC_SETPOSITION(0, int4, 1, 0);
        CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 10), 0, 0, 0);
        int4 = (int4 + 5);
        CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
        CC_SETTEXTFONT(29 as fontmetrics);
        CC_SETCOLOUR(int1);
        CC_SETPOSITION(0, int4, 1, 0);
        CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 16, 0, 0);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETTEXT("Ironman Group");
        int4 = (int4 + (16 + 5));
        CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETCOLOUR(int2);
        CC_SETPOSITION(0, int4, 1, 0);
        CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 16, 0, 0);
        CC_SETTEXTALIGN(1, 1, 0);
        if (((varplayer_4985 == 0) && (STRING_LENGTH(varclient_8255) > 0))) {
            CC_SETTEXT(varclient_8255);
            if ((varclient_8257 == 0)) {
                CC_SETMOUSEOVERCURSOR(210);
                CC_SETOP(1, "View Group Information");
                CC_SETONOP(callback(script15228, 27));
                CC_CREATE(102236180, 5, IF_GETNEXTSUBID(102236180));
                CC_SETGRAPHIC(26767);
                CC_SETSIZE(24, 24, 0, 0);
                CC_SETPOSITION(5, (int4 - 4), 2, 0);
            };
        } else {
            CC_SETTEXT("N/A");
        };
        int4 = (int4 + (16 + 5));
    };
    CC_CREATE(comp(1560, 20), 9, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETCOLOUR(int3);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 10), 0, 0, 0);
    int4 = (int4 + 5);
    CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETCOLOUR(int1);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 16, 0, 0);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXT("Status");
    int4 = (int4 + (16 + 5));
    CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(int2);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 28, 0, 0);
    CC_SETTEXTALIGN(1, 0, 0);
    var string1 = enum_getvalue(0, 36, 5586 as cs2enum, varbitplayer_26172);
    CC_SETTEXT(string1);
    int4 = (int4 + (28 + 5));
    CC_CREATE(comp(1560, 20), 9, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETCOLOUR(int3);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 10), 0, 0, 0);
    int4 = (int4 + 5);
    CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETCOLOUR(int1);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 16, 0, 0);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXT("Personal Message");
    int4 = (int4 + (16 + 5));
    CC_CREATE(comp(1560, 20), 4, IF_GETNEXTSUBID(comp(1560, 20)));
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(int2);
    CC_SETPOSITION(0, int4, 1, 0);
    CC_SETSIZE((IF_GETWIDTH(comp(1560, 20)) - 20), 48, 0, 0);
    CC_SETTEXTALIGN(1, 0, 0);
    if ((STRING_LENGTH(varclient_4671) > 0)) {
        CC_SETTEXT(REMOVETAGS(varclient_4671));
    } else {
        CC_SETTEXT("None");
    };
    if (((varbitplayer_57139 == 1) || (script6431() == true))) {
        IF_SETHIDE(true, comp(1560, 21));
    } else {
        IF_SETHIDE(false, comp(1560, 21));
    };
    return;
}