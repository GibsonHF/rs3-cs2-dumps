//
function script3055(int0: component, int1: int, int2: unknown_int, int3: int, int4: int, int5: boolean, string0: string, string1: string, string2: string): [int, int] {
    var int6 = IF_GETWIDTH(int0);
    var int7 = (MAX(PARAHEIGHT(string0, int6, 26 as fontmetrics), 1) * 15);
    CC_CREATE(int0, 4, int1);
    CC_SETSIZE(0, int7, 1, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(0, 0, 15);
    CC_SETTEXTSHADOW(true);
    var int8 = 0;
    var int9 = 0;
    while ((int9 < int1)) {
        if ((CC_FIND[1](int0, int9) == 1)) {
            int8 = (int8 + CC_GETHEIGHT[1]());
        };
        int9 = (int9 + 1);
    };
    if ((int5 == false)) {
        CC_SETPOSITION(0, int8, 0, 2);
    } else {
        CC_SETPOSITION(0, int8, 0, 0);
    };
    var string3 = "";
    if ((int2 == 1)) {
        CC_SETOPBASE(REMOVETAGS(string1));
        CC_SETONOP(callback(script3056, -2147483644, string1, string2, int4));
        switch (int3) {
            case 3:
            case 6:
            case 7:
            case 18: {
                string3 = REMOVETAGS(string2);
                if ((strcmp(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()), string3) != 0)) {
                    if (((FRIEND_TEST(string3) == 0) && (IGNORE_TEST(string3) == 0))) {
                        CC_SETOP(1, "Add friend");
                        CC_SETOP(2, "Add ignore");
                    } else if (((FRIEND_TEST(string3) == 1) && (USERDETAIL_QUICKCHAT() == 0))) {
                        CC_SETOP(3, "Message");
                    };
                    if (((((varbitplayer_16564 == 1) || (STAFFMODLEVEL() > 0)) || (varclient_733 == 1)) || (PLAYERMOD() > 0))) {
                        CC_SETOP(5, "Report");
                    };
                };
                break;
            }
            case 115: {
                CC_SETOP(6, "Open link");
                break;
            }
        };
    };
    return [(int1 + 1), (int8 + int7)];
}