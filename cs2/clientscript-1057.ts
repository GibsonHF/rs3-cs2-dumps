//
function script1057(int0: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string): void {
    var int1 = 0;
    var int2 = 65;
    var int3 = script2042();
    if ((int3 < 140)) {
        int2 = (int2 + 10);
    };
    IF_SETTEXT(string0, comp(387, 8));
    switch (varclient_6403) {
        case 0:
        case 1:
        case 4:
        case 5:
        case 6: {
            script1025(comp(387, 8), -1, 39 as fontmetrics, 37 as fontmetrics, 35 as fontmetrics);
            IF_SETHIDE(false, comp(387, 14));
            IF_SETHIDE(false, comp(387, 10));
            IF_SETPOSITION(150, 0, 0, 2, comp(387, 7));
            IF_SETSIZE(11468, 30, 2, 1, comp(387, 7));
            break;
        }
        default: {
            script1025(comp(387, 8), -1, 35 as fontmetrics, 33 as fontmetrics, 30 as fontmetrics);
            IF_SETHIDE(true, comp(387, 14));
            IF_SETHIDE(true, comp(387, 10));
            IF_SETPOSITION(0, 0, 0, 2, comp(387, 7));
            IF_SETSIZE(0, 30, 1, 1, comp(387, 7));
            int2 = 30;
            break;
        }
    };
    var int4 = 863806;
    if ((varbitplayer_22875 == 1)) {
        int4 = 4273706;
    } else if ((varbitplayer_22875 == 0)) {
        int4 = 2367774;
    };
    var int5 = (int2 + 5);
    var string6 = "";
    var int6 = (IF_GETHEIGHT(comp(387, 22)) - 10);
    int6 = (int6 - (int0 * int5));
    int6 = (int6 - IF_GETHEIGHT(comp(387, 4)));
    CC_DELETEALL(comp(387, 22));
    CC_DELETEALL(comp(387, 23));
    var int7 = 0;
    var int8 = 0;
    [int7, int7, int8, int7] = script2956();
    while ((int1 < int0)) {
        switch (int1) {
            case 0: {
                string6 = string1;
                break;
            }
            case 1: {
                string6 = string2;
                break;
            }
            case 2: {
                string6 = string3;
                break;
            }
            case 3: {
                string6 = string4;
                break;
            }
            case 4: {
                string6 = string5;
                break;
            }
        };
        if ((STRING_LENGTH(string6) <= 0)) {
            return;
        };
        CC_CREATE(comp(387, 22), 3, IF_GETNEXTSUBID(comp(387, 22)));
        CC_SETSIZE(0, int2, 1, 0);
        CC_SETPOSITION(0, (int6 + (int5 * int1)), 2, 0);
        CC_SETCOLOUR(int4);
        CC_SETFILL(1);
        CC_SETTRANS(30);
        CC_CREATE(comp(387, 22), 5, IF_GETNEXTSUBID(comp(387, 22)));
        CC_SETSIZE(0, int2, 1, 0);
        CC_SETPOSITION(0, (int6 + (int5 * int1)), 2, 0);
        CC_SETGRAPHIC(13992 as graphic);
        CC_SETCOLOUR(int4);
        CC_SETHFLIP(true);
        unk11040(callback(script1057, string0, int0, string1, string2, string3, string4, string5));
        if ((varbitplayer_38842 == 0)) {
            CC_CREATE(comp(387, 22), 4, IF_GETNEXTSUBID(comp(387, 22)));
            CC_SETSIZE(15, int2, 0, 0);
            CC_SETPOSITION(2, (int6 + (int5 * int1)), 0, 0);
            CC_SETTEXT(`${inttostring((int1 + 1), 10)}.`);
            CC_SETCOLOUR(script10495(0));
            CC_SETTEXTFONT(31 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTSHADOW(true);
        };
        CC_CREATE(comp(387, 22), 4, IF_GETNEXTSUBID(comp(387, 22)));
        CC_SETSIZE((60 + int8), int2, 1, 0);
        CC_SETPOSITION(15, (int6 + (int5 * int1)), 0, 0);
        CC_SETTEXT(string6);
        CC_SETCOLOUR(16777215);
        script1025(comp(387, 22), CC_GETID(), 33 as fontmetrics, 30 as fontmetrics, 28 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, enum_getvalue(25, 0, 8584 as cs2enum, CC_GETFONTMETRICS()));
        CC_CREATE(comp(387, 22), 5, IF_GETNEXTSUBID(comp(387, 22)));
        CC_SETSIZE(18, 18, 0, 0);
        CC_SETPOSITION(int8, ((int6 + (int5 * int1)) + ((int2 - 18) / 2)), 2, 0);
        CC_SETGRAPHIC(13994 as graphic);
        CC_SETTRANS(50);
        CC_CREATE(comp(387, 23), 4, IF_GETNEXTSUBID(comp(387, 23)));
        CC_SETSIZE(int8, int2, 1, 0);
        CC_SETPOSITION(int8, (int6 + (int5 * int1)), 2, 0);
        CC_SETPAUSETEXT("Select");
        int1 = (int1 + 1);
    };
    return;
}