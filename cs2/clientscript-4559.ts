//
function script4559(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component): void {
    if ((MINIMENUOPEN(int3, -1) == 1)) {
        IF_SETONTIMER(callback(script4558, int0, int1, int2, int3, int4, int5, int6, int7, int8, int9), int4);
        return;
    };
    IF_SETONTIMER(callback(), int4);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int10 = 0;
    var int11 = CLAN_GETCHATCOUNT();
    var int12 = 0;
    var string0 = "";
    var int13 = 20;
    var int14 = 17;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var string1 = "";
    var string2 = "";
    var int21 = 0;
    var int22 = script13749();
    if ((int22 == true)) {
        int13 = 40;
    } else {
        IF_SETSIZE(0, int13, 1, 0, comp(589, 9));
    };
    int21 = ((int13 / 2) - 4);
    if ((int11 <= 0)) {
        if ((int22 == false)) {
            IF_SETTEXT("Not in chat", comp(589, 25));
            IF_SETTEXT("None", comp(589, 27));
            IF_SETHIDE(false, int6);
            script13991(int6, comp(-1, 65535), 2830 as struct, true);
            IF_SETSIZE(IF_GETWIDTH(int7), 0, 0, 0, int7);
            script4560("You are not currently in a Friends Chat channel.<br><br>Use the button below if you wish to join a chat channel.", int3);
        } else {
            IF_SETTEXT("(Not in chat)", comp(1044, 26));
            script4560("You are not currently in a Friends Chat channel.<br><br>Use the 'Join Channel' button if you wish to join a chat channel.", int3);
        };
        IF_SETTEXT("Join Channel", int8);
        IF_SETOP(1, "Join chat channel", int8);
        IF_SETHIDE(true, int5);
        IF_SETSCROLLSIZE(0, 0, int4);
        IF_SETSCROLLPOS(0, 0, int4);
    } else {
        if ((int22 == false)) {
            IF_SETTEXT(CLAN_GETCHATDISPLAYNAME(), comp(589, 25));
            IF_SETTEXT(CLAN_GETCHATOWNERNAME(), comp(589, 27));
            IF_SETHIDE(true, int6);
            IF_SETSIZE(IF_GETWIDTH(int7), 0, 0, 1, int7);
        } else {
            IF_SETTEXT(`${CLAN_GETCHATDISPLAYNAME()}<br>(${CLAN_GETCHATOWNERNAME()})`, comp(1044, 26));
        };
        IF_SETTEXT("Leave Channel", int8);
        IF_SETOP(1, "Leave chat channel", int8);
        IF_SETHIDE(false, int5);
        while ((int12 < int11)) {
            int20 = CLAN_GETCHATUSERRANK(int12);
            string2 = CLAN_GETCHATUSERNAME_UNFILTERED(int12);
            string0 = CLAN_GETCHATUSERNAME(int12);
            int17 = CLAN_GETCHATUSERWORLD(int12);
            script14400(int3, 0, int13, 0, int16, 1, int12);
            if ((CC_FIND(int3, int12) == 1)) {
                if ((int22 == false)) {
                    script11558(int20, int3, int12);
                };
                if ((CLAN_ISSELF(int12) == 0)) {
                    CC_SETOPBASE(string2);
                    if ((int22 == true)) {
                        if ((int17 > 0)) {
                            CC_SETOP(1, "Select");
                        };
                        script17124(int12);
                    };
                    if ((FRIEND_TEST(REMOVETAGS(string2)) == 1)) {
                        CC_SETOP(8, "Remove friend");
                    } else if ((IGNORE_TEST(REMOVETAGS(string2)) == 1)) {
                        CC_SETOP(9, "Remove ignore");
                    } else {
                        CC_SETOP(6, "Add friend");
                        CC_SETOP(7, "Add ignore");
                    };
                    CC_SETONOP(callback(script4564, string2, -2147483644, int12));
                };
                if ((operator(">=", CLAN_GETCHATMINKICK(CLAN_GETCHATRANK())) && (CLAN_GETCHATRANK() > int20))) {
                    CC_SETOP(10, "Kick/ban");
                };
            };
            script2994(int1, int12, 5, (int16 + int21), 0, 0, 9, 9, 0, 0, script1599(int20));
            script2995(int0, int12, int14, int16, 0, 0, int14, int13, 1, 0, 2101 as dbrow, string0);
            CC_SETCOLOUR(16777215);
            CC_SETTEXTSHADOW(true);
            CC_SETMAXLINES(1);
            [int15, string0] = script17129(int17);
            script2995(int2, int12, 5, int16, 0, 0, 5, int13, 1, 0, 2101 as dbrow, string0);
            CC_SETCOLOUR(int15);
            CC_SETTEXTSHADOW(true);
            CC_SETMAXLINES(1);
            int16 = (int16 + int13);
            int12 = (int12 + 1);
        };
        int18 = ((IF_GETHEIGHT(int4) / int13) + 1);
        if ((int18 > int11)) {
            while ((int12 < int18)) {
                script14400(int3, 0, int13, 0, int16, 1, int12);
                int16 = (int16 + int13);
                int12 = (int12 + 1);
            };
            int19 = IF_GETHEIGHT(int4);
        } else {
            int19 = int16;
        };
        script17128(int4, int5, int18, int11, int19);
    };
    script4573(int9);
    return;
}