//
function script1101(int0: component, int1: int, int2: int, int3: int): void {
    var int4 = script3099(int0);
    var int5 = script10588(int0);
    var int6 = script10589(int0);
    var int7 = script11297(int0);
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int8 = 0;
    var int9 = 0;
    var int10 = FRIEND_GETWORLD(int1);
    var int11 = -1;
    var int12 = 0;
    var int13 = 10787197;
    var int14 = 0;
    var int15 = 0;
    var int16 = script6431();
    [string0, string1] = FRIEND_GETNAME(int1);
    if ((strcmp(string1, "") != 0)) {
        int8 = 1;
    };
    if (((unk11134(int1) == 1) || (unk11133(int1) == 1))) {
        int9 = 1;
    };
    var int17 = 26 as fontmetrics;
    if ((int16 == true)) {
        int17 = 32 as fontmetrics;
    };
    if ((CC_FIND(int4, int1) == 1)) {
        CC_SETOPBASE(`<col=ffffff>${string0}`);
        if ((int8 == 1)) {
            string0 = `     ${string0}`;
        };
        if ((int9 == 1)) {
            string0 = `     ${string0}`;
            int13 = 8961267;
        };
        CC_SETCOLOUR(int13);
        CC_SETONTIMER(callback());
        CC_SETTEXTFONT(int17);
        CC_SETTEXTSHADOW(1);
        CC_SETTEXTALIGN(0, 0, 0);
        unk11044(int1);
        if ((int10 != 0)) {
            if ((varclient_4126 == 1)) {
                CC_SETOP(1, "Share");
                if (((MAP_QUICKCHAT() == 0) && (USERDETAIL_QUICKCHAT() == 0))) {
                    CC_SETOP(4, "Message");
                };
            } else if (((MAP_QUICKCHAT() == 0) && (USERDETAIL_QUICKCHAT() == 0))) {
                CC_SETOP(1, "Message");
            };
            if ((int16 == false)) {
                CC_SETOP(2, "Quick Message");
            };
            CC_SETOP(3, "Trail");
            CC_SETOP(6, "Join");
            if ((strcmp(FRIEND_GETNOTES(int1), "") != 0)) {
                CC_SETOP(7, "Edit Note");
            } else {
                CC_SETOP(7, "Add Note");
            };
            if ((PLAYER_GROUP_FIND() == 1)) {
                CC_SETOP(9, "Invite to group");
            };
            if ((int10 == MAP_WORLD())) {
                CC_SETOP(10, "Compare");
            };
        } else if ((strcmp(FRIEND_GETNOTES(int1), "") != 0)) {
            CC_SETOP(7, "Edit Note");
        } else {
            CC_SETOP(7, "Add Note");
        };
        CC_SETOP(8, "Delete");
        CC_SETONOP(callback(script126, -2147483644, "event_opbase", int1));
        string2 = string0;
        if ((STRINGWIDTH(string0, int17) > int2)) {
            while ((STRINGWIDTH(`${string0}...`, int17) > int2)) {
                string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 1));
            };
            string0 = `${string0}...`;
        };
        CC_SETTEXT(string0);
        if ((int8 == 1)) {
            string2 = `${string2}<br>Last known as: ${string1}`;
        };
        string3 = FRIEND_GETNOTES(int1);
        if ((strcmp(string3, "") != 0)) {
            string2 = `${string2}<br>${string3}`;
        };
        CC_SETONMOUSEREPEAT(callback(script3876, string2, -2147483645, -2147483643));
        cc_setparam(7540, 2);
        CC_SETPARAM_STRING(4277, string2);
        CC_SETHIDE(0);
    };
    if ((CC_FIND(int5, int1) == 1)) {
        CC_SETHIDE(false);
        if ((int9 == 1)) {
            CC_SETGRAPHIC(6980 as graphic);
        } else {
            CC_SETGRAPHIC(2313 as graphic);
            if ((int8 == 0)) {
                cc_setparam(5438, 0);
                CC_SETHIDE(true);
            } else {
                cc_setparam(5438, 1);
            };
        };
    };
    if ((int10 == 0)) {
        string0 = "Offline";
        string2 = "Offline";
    } else if ((int10 < 300)) {
        string0 = inttostring(int10, 10);
        int14 = ((2 + 24) + 2);
        string2 = unk11120(int1);
        [string2, int11, int12] = script6305(string2, int10);
    } else if ((int10 < 600)) {
        string0 = inttostring(int10, 10);
        int14 = ((2 + 24) + 2);
        string2 = unk11120(int1);
    } else {
        if (((int10 >= 1100) && (int10 <= 5000))) {
            string0 = "Lobby";
        } else {
            string0 = unk11120(int1);
        };
        string2 = string0;
    };
    int15 = STRINGWIDTH(string0, int17);
    if ((CC_FIND(int7, int1) == 1)) {
        if (((int14 > 0) && (int3 >= (int15 + int14)))) {
            if (((int10 >= 300) && (int10 < 600))) {
                CC_SETGRAPHIC(131 as graphic);
            } else if ((int11 == -1)) {
                if ((int12 >= 0)) {
                    CC_SETGRAPHIC(enum_getvalue(0, 23, 1810 as cs2enum, int12));
                } else {
                    CC_SETGRAPHIC(23848 as graphic);
                };
            } else if ((TESTBIT(int11, 24) == 1)) {
                CC_SETGRAPHIC(35198 as graphic);
            } else if ((TESTBIT(int11, 16) == 1)) {
                CC_SETGRAPHIC(23849 as graphic);
            } else {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 1810 as cs2enum, int12));
            };
            CC_SETONMOUSEREPEAT(callback(script3126, string2, -2147483645, -2147483643, int0, int4));
            CC_SETHIDE(0);
        } else {
            CC_SETHIDE(true);
            int14 = 0;
        };
    };
    if ((CC_FIND(int6, int1) == 1)) {
        CC_SETPOSITION((2 + int14), CC_GETY(), 0, 0);
        CC_SETTEXTFONT(int17);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXT(string0);
        if ((int10 == 0)) {
            CC_SETCOLOUR(14507070);
        } else if ((int10 == MAP_WORLD())) {
            CC_SETCOLOUR(3979038);
        } else {
            CC_SETCOLOUR(16777060);
        };
        CC_SETONMOUSEREPEAT(callback(script3126, string2, -2147483645, -2147483643, int0, int4));
        CC_SETHIDE(0);
    };
    return;
}