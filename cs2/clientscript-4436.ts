//
function script4436(int0: int, int1: component): void {
    var string0 = REMOVETAGS(CHAT_PLAYERNAME_UNFILTERED());
    var int2 = ACTIVECLANCHANNEL_GETUSERSLOT(string0);
    if ((int2 == -1)) {
        return;
    };
    var int3 = script411(int1);
    var int4 = struct_getparam(int3, 7291);
    var int5 = struct_getparam(int3, 7292);
    var int6 = struct_getparam(int3, 7293);
    var int7 = struct_getparam(int3, 7294);
    var int8 = struct_getparam(int3, 7295);
    var int9 = struct_getparam(int3, 7297);
    var int10 = struct_getparam(int3, 7298);
    var int11 = struct_getparam(int3, 7299);
    var int12 = struct_getparam(int3, 7300);
    var int13 = struct_getparam(int3, 7301);
    var int14 = struct_getparam(int3, 7302);
    var int15 = struct_getparam(int3, 7303);
    var int16 = struct_getparam(int3, 7304);
    var int17 = struct_getparam(int3, 7305);
    var int18 = struct_getparam(int3, 7307);
    var int19 = struct_getparam(int3, 7308);
    var int20 = struct_getparam(int3, 7309);
    var int21 = struct_getparam(int3, 7306);
    var int22 = struct_getparam(int3, 7310);
    var int23 = struct_getparam(int3, 7311);
    var int24 = struct_getparam(int3, 7313);
    var int25 = struct_getparam(int3, 7982);
    var string1 = "null";
    var string2 = "null";
    var int26 = 0;
    var int27 = 0;
    var int28 = -1;
    var int29 = 0;
    var int30 = ACTIVECLANCHANNEL_GETUSERCOUNT();
    var int31 = -1;
    var int32 = -1;
    var int33 = IF_GETSCROLLY(int16);
    var int34 = 19;
    if ((script6431() == true)) {
        int34 = 27;
    };
    var int35 = (int34 * int30);
    var int36 = IF_GETHEIGHT(int16);
    var int37 = IF_GETWIDTH(int4);
    var int38 = script3365(int23);
    var string3 = "Temporarily leave your clan chat channel";
    if ((int0 <= -1)) {
        var int0 = IF_GETX(int4);
    };
    int0 = MAX(0, MIN(int0, (IF_GETWIDTH(int23) - int37)));
    if ((int0 > 0)) {
        varclient_1035 = int0;
    };
    var int39 = ((int0 + int38) - script3365(int9));
    var int40 = (IF_GETWIDTH(int11) - ((int0 + (int38 - script3365(int11))) + int37));
    var int41 = 0;
    if (((PLAYER_GROUP_FIND() == 1) && (script10281(script10275()) == 1))) {
        int41 = 1;
    };
    var int42 = 0;
    if ((ACTIVECLANCHANNEL_GETUSERRANK(int2) >= ACTIVECLANCHANNEL_GETRANKKICK())) {
        int42 = 1;
    };
    IF_SETPOSITION(int0, 0, 0, 1, int4);
    IF_SETHIDE(false, int4);
    script4470(int5, int6);
    script5395(int7, int8);
    IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643), int22);
    IF_SETONMOUSELEAVE(callback(script8805), int22);
    IF_SETOP(1, "Leave Clan Chat channel", int22);
    IF_SETSIZE(int40, 0, 0, 1, int11);
    IF_SETSIZE(int40, 0, 0, 1, int12);
    IF_SETTEXT("", int15);
    IF_SETTEXT("", int24);
    IF_SETHIDE(1, int14);
    IF_SETTEXT(`<col=EE7600>${ACTIVECLANCHANNEL_GETCLANNAME()}</col> - ${inttostring(int30, 10)}/500`, int20);
    stack(6255);
    stack(int21);
    IF_SETGRAPHIC();
    if ((unk10986(0) == 1)) {
        string1 = `Clan size: ${inttostring(ACTIVECLANSETTINGS_GETAFFINEDCOUNT(), 10)}`;
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), int20);
        IF_SETONMOUSELEAVE(callback(script8805), int20);
    };
    var int43 = script7769();
    var int44 = 0;
    if ((int43 != -1 as struct)) {
        int44 = script7779(int43);
        switch (int44) {
            case 5: {
                string2 = `The ${struct_getparam(int43, 7965)} Clan Cup has now concluded, stay tuned for future Clan Cup news!`;
                break;
            }
            case 4: {
                string2 = `The ${struct_getparam(int43, 7965)} Clan Cup results are out! Press the trophy for more information.`;
                break;
            }
            case 3: {
                string2 = `The ${struct_getparam(int43, 7965)} Clan Cup has now finished, expect results in the near future!`;
                break;
            }
            case 2: {
                string2 = `The ${struct_getparam(int43, 7965)} Clan Cup has started! Speak to the Clan Scribe for more information.`;
                break;
            }
            case 1: {
                string2 = `There are ${inttostring((struct_getparam(int43, 7969) - DATE_RUNEDAY()), 10)} day(s) until the next Clan Cup: ${struct_getparam(int43, 7965)}! Press the trophy for more information.`;
                break;
            }
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), int25);
        IF_SETONMOUSELEAVE(callback(script8805), int25);
    } else {
        IF_SETHIDE(true, int25);
    };
    var string4 = "";
    while ((int26 < int30)) {
        int27 = ACTIVECLANCHANNEL_GETSORTEDUSERSLOT(int26);
        string4 = REMOVETAGS(ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int27));
        if ((unk10986(0) == 1)) {
            int28 = ACTIVECLANSETTINGS_GETAFFINEDSLOT(string4);
            if ((int28 != -1)) {
                int32 = unk10985(int28, 0, 9);
            } else {
                int32 = -1;
            };
        };
        int29 = (int26 * int34);
        if ((CC_FIND(int10, int27) == 1)) {
            script455(int29, ACTIVECLANCHANNEL_GETUSERRANK(int27), int32);
        };
        if ((CC_FIND(int9, int27) == 1)) {
            script454(string4, string0, int39, int29, int41, int42);
        };
        if (((CC_FIND(int12, int27) == 1) && (CC_FIND[1](int11, int27) == 1))) {
            script459(int40, int29, ACTIVECLANCHANNEL_GETUSERWORLD(int27), int11, int1);
        };
        if ((CC_FIND(int13, int27) == 1)) {
            script460(int29);
        };
        int26 = (int26 + 1);
    };
    while ((int26 < 600)) {
        if ((CC_FIND(int9, int26) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int10, int26) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int11, int26) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int12, int26) == 1)) {
            CC_SETHIDE(true);
        };
        if ((CC_FIND(int13, int26) == 1)) {
            CC_SETHIDE(true);
        };
        int26 = (int26 + 1);
    };
    if ((varclient_1518 >= 0)) {
        int31 = ACTIVECLANCHANNEL_GETUSERSLOT(varclient_2353);
        if ((int31 >= 0)) {
            varclient_1518 = int31;
            if ((CC_FIND(int13, varclient_1518) == 1)) {
                int29 = CC_GETY();
                IF_SETPOSITION(1, int29, 2, 0, int19);
                IF_SETPOSITION(1, int29, 2, 0, int18);
            };
        } else {
            IF_SETHIDE(false, int18);
            script4628(int1);
        };
    };
    if ((((varclient_1518 < 0) && (IF_FIND(int19) == 1)) && (CC_GETWIDTH() > 1))) {
        IF_SETHIDE(false, int18);
        script4628(int1);
    };
    if ((int35 > int36)) {
        script7791(int17, int16);
        IF_SETHIDE(false, int17);
        IF_SETSIZE(16, 60, 1, 1, int16);
        IF_SETSCROLLPOS(0, int33, int16);
        IF_SETSCROLLSIZE(0, MAX(int36, int35), int16);
        int33 = MIN(IF_GETSCROLLY(int16), int29);
        script72(int17, int16, int33);
    } else {
        IF_SETHIDE(true, int17);
        IF_SETSIZE(0, 60, 1, 1, int16);
        IF_SETSCROLLSIZE(0, 0, int16);
        IF_SETSCROLLPOS(0, 0, int16);
        script72(int17, int16, 0);
    };
    script6209();
    return;
}