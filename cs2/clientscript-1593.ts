//
function script1593(int0: int, int1: unknown_int): void {
    var int2 = script8049(int1, comp(1109, 38));
    var int3 = script8049(int1, comp(1109, 23));
    var int4 = script8049(int1, comp(1109, 33));
    var int5 = script8049(int1, comp(1109, 34));
    var int6 = script8049(int1, comp(1109, 36));
    var int7 = script8049(int1, comp(1109, 37));
    var int8 = script8049(int1, comp(1109, 35));
    var int9 = script8049(int1, comp(1109, 21));
    var int10 = script8049(int1, comp(1109, 22));
    var int11 = script8049(int1, comp(1109, 19));
    var int12 = IF_GETWIDTH(int2);
    if ((varbitplayer_38842 == 1)) {
        var int0 = SCALE(IF_GETWIDTH(int3), 4, 3);
        IF_SETDRAGGABLE(comp(-1, 65535), -1, int2);
        IF_CLEARSCRIPTHOOKS(int2);
    } else {
        if ((int0 < 0)) {
            int0 = IF_GETX(int2);
        };
        int0 = MAX(0, MIN(int0, (IF_GETWIDTH(int3) - int12)));
        if ((IF_GETWIDTH(int3) > 0)) {
            varclient_1505 = int0;
        };
        IF_SETDRAGGABLE(int3, -1, int2);
        IF_SETONDRAGCOMPLETE(callback(script601, -2147483647, int1), int2);
    };
    IF_SETPOSITION(int0, 0, 0, 0, int2);
    IF_SETMOUSEOVERCURSOR(149, int2);
    var int13 = 0;
    var int14 = script3365(int3);
    var int15 = (int0 + (int14 - script3365(int4)));
    var int16 = (IF_GETWIDTH(int6) - ((int0 + (int14 - script3365(int6))) + int12));
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int17 = 19;
    var int18 = 26 as fontmetrics;
    if ((varbitplayer_38842 == 1)) {
        int17 = 27;
        int18 = 32 as fontmetrics;
    };
    var string3 = "";
    var string4 = "";
    var int19 = 0;
    var int20 = 0;
    var int21 = -1 as graphic;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = (IF_GETHEIGHT(int9) / int17);
    var int28 = CLAN_GETCHATCOUNT();
    IF_SETTEXT(`${TOSTRING_LOCALISED(int28, 1)} / ${TOSTRING_LOCALISED(500, 1)}`, script8049(int1, comp(1109, 29)));
    if ((int28 > 0)) {
        IF_SETHIDE(true, script8049(int1, comp(1109, 24)));
        while ((int13 < int28)) {
            string1 = CLAN_GETCHATUSERNAME(int13);
            string2 = CLAN_GETCHATUSERNAME_UNFILTERED(int13);
            int20 = CLAN_GETCHATUSERWORLD(int13);
            int26 = CLAN_GETCHATUSERRANK(int13);
            if ((int20 < 300)) {
                string3 = inttostring(int20, 10);
                int19 = ((2 + 24) + 2);
                string4 = `RuneScape ${string3}`;
                [string4, int22, int23] = script6305(string4, int20);
                if ((int22 == -1)) {
                    if ((int23 <= 0)) {
                        int21 = 23848 as graphic;
                    } else {
                        int21 = enum_getvalue(0, 23, 1810 as cs2enum, int23);
                    };
                } else if ((TESTBIT(int22, 24) == 1)) {
                    int21 = 35198 as graphic;
                } else if ((TESTBIT(int22, 16) == 1)) {
                    int21 = 23849 as graphic;
                } else {
                    int21 = enum_getvalue(0, 23, 1810 as cs2enum, int23);
                };
            } else if (((int20 >= 300) && (int20 < 600))) {
                string3 = inttostring(int20, 10);
                string4 = `Old School ${inttostring(int20, 10)}`;
                int19 = ((2 + 24) + 2);
                int21 = 131 as graphic;
            } else if (((int20 >= 1100) && (int20 <= 1200))) {
                string3 = "Lobby";
                int19 = 0;
                string4 = "Lobby";
                int21 = -1 as graphic;
            } else {
                string3 = inttostring(int20, 10);
                int19 = 0;
                string4 = `World ${inttostring(int20, 10)}`;
                int21 = -1 as graphic;
            };
            if ((STRINGWIDTH(string3, int18) > int16)) {
                string3 = "...";
            };
            if ((CC_FIND(int4, int13) == 1)) {
                int14 = (int15 - CC_GETX());
                CC_SETSIZE(int14, int17, 0, 0);
                if ((STRINGWIDTH(string1, int18) > int14)) {
                    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                } else {
                    CC_SETONMOUSEREPEAT(callback());
                };
                CC_SETONOP(callback(script202, string1, string2, -2147483644, int13));
                CC_SETLINKFRIENDCHAT(int13);
                CC_SETTEXT(string1);
                script1595(int13, string1, string2);
                CC_SETHIDE(0);
            };
            IF_SETSIZE(int16, 0, 0, 1, int6);
            IF_SETSIZE(int16, 0, 0, 1, int7);
            IF_SETSIZE(int16, 0, 0, 1, int8);
            if ((CC_FIND(int6, int13) == 1)) {
                CC_SETCOLOUR(script12799(int20, MAP_WORLD(), 3979038, 16777060));
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int8, int13) == 1)) {
                if ((int19 <= 0)) {
                    CC_SETHIDE(true);
                } else {
                    CC_SETGRAPHIC(int21);
                    CC_SETONMOUSEREPEAT(callback(script3127, string4, -2147483645, -2147483643, int1, int6));
                    CC_SETHIDE(0);
                };
            };
            if ((CC_FIND(int7, int13) == 1)) {
                CC_SETPOSITION((int19 + 2), CC_GETY(), 0, 0);
                CC_SETTEXT(string3);
                CC_SETONMOUSEREPEAT(callback(script3127, string4, -2147483645, -2147483643, int1, int6));
                if ((int20 == 0)) {
                    CC_SETCOLOUR(14507070);
                } else if ((int20 == MAP_WORLD())) {
                    CC_SETCOLOUR(3979038);
                } else {
                    CC_SETCOLOUR(16777060);
                };
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int5, int13) == 1)) {
                string3 = `Rank: ${enum_getvalue(0, 36, 5853 as cs2enum, int26)}`;
                CC_SETGRAPHIC(script1599(int26));
                CC_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643));
                CC_SETHIDE(0);
            };
            int13 = (int13 + 1);
        };
        int24 = IF_GETSCROLLY(int9);
        int25 = (MAX(int13, int27) * int17);
        while ((int13 < 500)) {
            if ((CC_FIND(int4, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int6, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int8, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int7, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int5, int13) == 1)) {
                CC_SETHIDE(true);
            };
            int13 = (int13 + 1);
        };
        IF_SETONRESIZE(callback(script2397, CLAN_GETCHATDISPLAYNAME(), CLAN_GETCHATOWNERNAME(), int1, -2147483645), int11);
        IF_CALLONRESIZE(int11);
        IF_SETOP(1, "Leave chat", script8049(int1, 72679437));
        stack(6255);
        stack(script8049(int1, 72679464));
        IF_SETGRAPHIC();
        string4 = "Leave the Friends chat channel";
        IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -2147483643), script8049(int1, 72679437));
        IF_SETHIDE(0, int2);
        if ((int25 > IF_GETHEIGHT(int9))) {
            IF_SETHIDE(false, script8049(int1, comp(1109, 22)));
            IF_SETSCROLLSIZE(IF_GETWIDTH(int9), int25, int9);
            if ((int24 > int25)) {
                int24 = int25;
            };
            IF_SETSCROLLPOS(0, int24, int9);
            script7791(int10, int9);
        } else {
            IF_SETHIDE(true, script8049(int1, comp(1109, 22)));
            IF_SETSCROLLSIZE(0, 0, int9);
            IF_SETSCROLLPOS(0, 0, int9);
        };
    } else {
        string0 = "Not in chat";
        string4 = "Join a Friends chat channel";
        IF_SETHIDE(false, script8049(int1, comp(1109, 24)));
        IF_SETHIDE(true, script8049(int1, comp(1109, 22)));
        while ((int13 < 500)) {
            if ((CC_FIND(int4, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int6, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int8, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int7, int13) == 1)) {
                CC_SETHIDE(true);
            };
            if ((CC_FIND(int5, int13) == 1)) {
                CC_SETHIDE(true);
            };
            int13 = (int13 + 1);
        };
        IF_SETONRESIZE(callback(script2397, string0, string1, int1, -2147483645), int11);
        IF_CALLONRESIZE(int11);
        IF_SETOP(1, "Join chat", script8049(int1, 72679437));
        stack(6256);
        stack(script8049(int1, 72679464));
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string4, -2147483645, -2147483643), script8049(int1, 72679437));
        IF_SETHIDE(1, int2);
        IF_CLEAROPS(int2);
        IF_SETONMOUSEREPEAT(callback(), script8049(int1, 72679443));
    };
    return;
}