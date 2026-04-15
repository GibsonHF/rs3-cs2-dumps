//
function script3165(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component): void {
    if ((MINIMENUOPEN(int3, -1) == 1)) {
        IF_SETONTIMER(callback(script3164, int0, int1, int2, int3, int4, int5, int6, int7), int4);
        return;
    };
    IF_SETONTIMER(callback(), int4);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    if ((int6 != comp(-1, 65535))) {
        CC_DELETEALL(int6);
    };
    var int8 = 0;
    var int9 = ACTIVECLANCHANNEL_GETUSERCOUNT();
    var int10 = 0;
    var string0 = "";
    var int11 = 20;
    var int12 = 17;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var string1 = "";
    var int19 = script4468();
    var int20 = ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED()));
    var int21 = 0;
    if ((int20 != -1)) {
        int21 = ACTIVECLANCHANNEL_GETUSERRANK(int20);
    };
    var int22 = (1 + 1);
    var int23 = script13749();
    if ((int23 == false)) {
        IF_SETSIZE(IF_GETWIDTH(int7), 0, 0, 1, int7);
        IF_SETTEXT(ACTIVECLANCHANNEL_GETCLANNAME(), comp(912, 22));
        IF_SETSIZE(0, int11, 1, 0, comp(912, 9));
    } else {
        int11 = 40;
        int22 = (int22 + 7);
    };
    var int24 = ((int11 / 2) - 4);
    while ((int10 < int9)) {
        int18 = ACTIVECLANCHANNEL_GETUSERRANK(int10);
        string1 = ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int10);
        string0 = string1;
        int15 = ACTIVECLANCHANNEL_GETUSERWORLD(int10);
        script14400(int3, 0, int11, 0, int14, 1, int10);
        if ((CC_FIND(int3, int10) == 1)) {
            if ((int23 == false)) {
                script11462(int18, int3, int10);
            };
            if ((ACTIVECLANCHANNEL_GETUSERSLOT(REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED())) != int10)) {
                CC_SETOPBASE(string1);
                if ((int23 == true)) {
                    if ((int15 > 0)) {
                        CC_SETOP(1, "Select");
                    };
                    script17124(int10);
                };
                if ((FRIEND_TEST(REMOVETAGS(string1)) == 1)) {
                    CC_SETOP(8, "Remove friend");
                } else if ((IGNORE_TEST(REMOVETAGS(string1)) == 1)) {
                    CC_SETOP(9, "Remove ignore");
                } else {
                    CC_SETOP(6, "Add friend");
                    CC_SETOP(7, "Add ignore");
                };
                CC_SETONOP(callback(script3170, string1, -2147483644, int10));
            };
            if (((int19 == 1) && (int21 > int18))) {
                CC_SETOP(10, "Kick/ban");
            };
        };
        script2994(int1, int10, 5, (int14 + int24), 0, 0, 9, 9, 0, 0, enum_getvalue(0, 23, 3712 as cs2enum, int18));
        script2995(int0, int10, int12, int14, 0, 0, int12, int11, 1, 0, 2101 as dbrow, string0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTSHADOW(true);
        CC_SETMAXLINES(1);
        [int13, string0] = script17129(int15);
        script2995(int2, int10, 5, int14, 0, 0, 5, int11, 1, 0, 2101 as dbrow, string0);
        CC_SETCOLOUR(int13);
        CC_SETTEXTSHADOW(true);
        CC_SETMAXLINES(1);
        int14 = (int14 + int11);
        int10 = (int10 + 1);
    };
    var int25 = IF_GETHEIGHT(int4);
    int16 = ((int25 / int11) + 1);
    if ((int16 > int9)) {
        while ((int10 < int16)) {
            script14400(int3, 0, int11, 0, int14, 1, int10);
            int14 = (int14 + int11);
            int10 = (int10 + 1);
        };
        int17 = int25;
    } else {
        int17 = int14;
    };
    script17128(int4, int5, int16, int9, int17);
    return;
}