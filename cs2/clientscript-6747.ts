//
function script6747(int0: struct): void {
    IF_SETHIDE(true, comp(1344, 37));
    IF_SETONMOUSEREPEAT(callback(), comp(1344, 36));
    IF_SETONMOUSEREPEAT(callback(), 88080421);
    var string0 = "";
    var int1 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5420), 1268);
    var int2 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5421), 1268);
    var int3 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5422), 1268);
    var int4 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5423), 1268);
    var int5 = 0;
    var int6 = struct_getparam(int0, 1268);
    if ((int1 == int6)) {
        IF_SETHIDE(false, comp(1344, 37));
        if ((varplayer_5419 != 1)) {
            IF_SETTEXT(`${inttostring(varplayer_5419, 10)} days left`, comp(1344, 37));
        } else {
            IF_SETTEXT(`${inttostring(varplayer_5419, 10)} day left`, comp(1344, 37));
        };
        string0 = "This minigame is currently in the Spotlight and will give thaler at 500% of the normal rate.<br>Find Stanley Limelight near the minigame to learn about thaler.";
        int5 = 1;
    } else if ((int2 == int6)) {
        if ((varplayer_5419 != 1)) {
            string0 = `This minigame will enter the Spotlight in ${inttostring(varplayer_5419, 10)} days.`;
        } else {
            string0 = `This minigame will enter the Spotlight in ${inttostring(varplayer_5419, 10)} day.`;
        };
        int5 = 1;
    } else if ((int3 == int6)) {
        string0 = `This minigame will enter the Spotlight in ${inttostring((varplayer_5419 + 3), 10)} days.`;
        int5 = 1;
    } else if ((int4 == int6)) {
        string0 = `This minigame will enter the Spotlight in ${inttostring((varplayer_5419 + (3 * 2)), 10)} days.`;
        int5 = 1;
    };
    if ((int5 == 1)) {
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 88080420, -1), 88080420);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 88080420, -1), 88080421);
    };
    IF_SETHIDE(false, comp(1344, 38));
    IF_SETHIDE(true, comp(1344, 99));
    IF_SETHIDE(false, comp(1344, 33));
    IF_SETHIDE(false, comp(1344, 34));
    if ((script9178(int6) == 1)) {
        stack(21106);
        stack(88080418);
        IF_SETGRAPHIC();
        IF_SETOP(1, "Remove Favourite", 88080418);
    } else {
        stack(21105);
        stack(88080418);
        IF_SETGRAPHIC();
        IF_SETOP(1, "Add Favourite", 88080418);
    };
    IF_SETTEXT(struct_getparam(int0, 1266), comp(1344, 35));
    if ((struct_getparam(int0, 3629) == 0)) {
        if ((int1 == int6)) {
            stack(7918);
            stack(88080420);
            IF_SETGRAPHIC();
        } else if ((int2 == int6)) {
            stack(7919);
            stack(88080420);
            IF_SETGRAPHIC();
        } else if ((int3 == int6)) {
            stack(16279);
            stack(88080420);
            IF_SETGRAPHIC();
        } else if ((int4 == int6)) {
            stack(16280);
            stack(88080420);
            IF_SETGRAPHIC();
        } else {
            stack(21099);
            stack(88080420);
            IF_SETGRAPHIC();
        };
    } else {
        stack(21100);
        stack(88080420);
        IF_SETGRAPHIC();
    };
    if ((strcmp(struct_getparam(int0, 3631), "") != 0)) {
        IF_SETTEXT(struct_getparam(int0, 3631), comp(1344, 93));
    } else {
        IF_SETTEXT(struct_getparam(int0, 1273), comp(1344, 93));
    };
    if ((strcmp(struct_getparam(int0, 1292), "") != 0)) {
        IF_SETTEXT(struct_getparam(int0, 1292), comp(1344, 97));
    } else {
        IF_SETTEXT("There are no rewards for this minigame.", comp(1344, 97));
    };
    script9181();
    var int7 = 80;
    if (((MAP_MEMBERS() == 0) && (struct_getparam(int0, 1290) == 2))) {
        IF_SETHIDE(true, comp(1344, 52));
        IF_SETHIDE(true, comp(1344, 69));
        IF_SETHIDE(true, comp(1344, 86));
        IF_SETHIDE(true, comp(1344, 89));
        IF_SETTEXT("Options", comp(1344, 68));
        if ((PLAYERMEMBER() == true)) {
            if ((int6 == 3004)) {
                IF_SETTEXT("Crashed stars can sometimes be found around Gielinor.", comp(1344, 62));
            } else {
                IF_SETTEXT("This activity is a members only feature. Please log into a members' world to play.", comp(1344, 62));
            };
        } else {
            if ((int6 == 3004)) {
                IF_SETTEXT("Crashed stars can sometimes be found around Gielinor.", comp(1344, 62));
            } else {
                IF_SETTEXT("This activity is a members only feature.", comp(1344, 62));
            };
            IF_SETHIDE(false, comp(1344, 77));
        };
    } else if ((script3224(int6) == 0)) {
        IF_SETTEXT("Requirements", comp(1344, 68));
        int7 = script9182(int0);
        IF_SETHIDE(true, comp(1344, 52));
        IF_SETHIDE(true, comp(1344, 69));
        IF_SETTEXT("", comp(1344, 62));
        IF_SETHIDE(true, comp(1344, 77));
        IF_SETHIDE(true, comp(1344, 86));
        IF_SETHIDE(true, comp(1344, 89));
    } else {
        IF_SETTEXT("Options", comp(1344, 68));
        IF_SETHIDE(false, comp(1344, 52));
        if ((script8229(6, enum_getreverseindex(73, 0, 6452 as cs2enum, int0, 0)) > -1)) {
            IF_SETOP(1, "Untrack", comp(1344, 56));
            IF_SETTEXT("Untrack", comp(1344, 59));
        } else if ((script8230() == 0)) {
            IF_SETHIDE(true, comp(1344, 52));
        } else {
            IF_SETOP(1, "Track", comp(1344, 56));
            IF_SETTEXT("Track", comp(1344, 59));
        };
        if (((struct_getparam(int0, 2700) == -1 as coordgrid) && (struct_getparam(int0, 2701) == -1))) {
            IF_SETHIDE(true, comp(1344, 69));
        } else {
            IF_SETHIDE(false, comp(1344, 69));
            if (((varbitplayer_20797 == 1) && (struct_getparam(int0, 2701) > 0))) {
                IF_SETHIDE(false, comp(1344, 86));
                IF_SETHIDE(true, comp(1344, 88));
                IF_SETHIDE(false, comp(1344, 87));
                IF_SETHIDE(false, comp(1344, 89));
            } else {
                IF_SETHIDE(true, comp(1344, 86));
                IF_SETHIDE(true, comp(1344, 89));
            };
        };
        IF_SETTEXT("", comp(1344, 62));
        IF_SETHIDE(true, comp(1344, 77));
    };
    var int8 = script20477(comp(1344, 93));
    var int9 = (32 + int8);
    IF_SETSIZE(2, int9, 1, 0, comp(1344, 90));
    IF_SETPOSITION(0, int9, 1, 0, comp(1344, 95));
    int8 = script20477(comp(1344, 97));
    int9 = ((int9 + int8) + 32);
    IF_SETSIZE(0, (int8 + 32), 1, 0, comp(1344, 95));
    IF_SETPOSITION(0, int9, 1, 0, comp(1344, 51));
    int9 = ((int9 + int7) + 5);
    IF_SETSIZE(0, (int7 + 5), 1, 0, comp(1344, 51));
    IF_SETPOSITION(0, int9, 1, 0, comp(1344, 39));
    var int10 = 0;
    var int11 = 4091;
    var string1 = script9133(int6);
    if ((strcmp(string1, "") != 0)) {
        int10 = script9180(1, int10, string1, comp(1344, 43), comp(1344, 42));
    } else {
        IF_SETTEXT("", comp(1344, 43));
    };
    var string2 = struct_getparam(int0, 1274);
    if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (script6431() == true))) {
        string2 = struct_getparam(int0, 8082);
    };
    if ((strcmp(string2, "") != 0)) {
        int10 = script9180(1, int10, string2, comp(1344, 44), comp(1344, 42));
    } else {
        IF_SETTEXT("There are no hints available for this task. Good luck!", comp(1344, 44));
        IF_SETHIDE(false, comp(1344, 44));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1344, 44));
        IF_SETTEXTALIGN(0, 1, 12, comp(1344, 44));
        IF_SETPOSITION(0, int10, 0, 0, comp(1344, 44));
    };
    if ((strcmp(struct_getparam(int0, 1275), "") != 0)) {
        int10 = script9180(2, int10, struct_getparam(int0, 1275), comp(1344, 45), comp(1344, 42));
    } else {
        IF_SETTEXT("", comp(1344, 45));
    };
    if ((strcmp(struct_getparam(int0, 1276), "") != 0)) {
        int10 = script9180(3, int10, struct_getparam(int0, 1276), comp(1344, 46), comp(1344, 42));
    } else {
        IF_SETTEXT("", comp(1344, 46));
    };
    if ((strcmp(struct_getparam(int0, 1277), "") != 0)) {
        int10 = script9180(4, int10, struct_getparam(int0, 1277), comp(1344, 47), comp(1344, 42));
    } else {
        IF_SETTEXT("", comp(1344, 47));
    };
    if ((strcmp(struct_getparam(int0, 1278), "") != 0)) {
        int10 = script9180(5, int10, struct_getparam(int0, 1278), comp(1344, 48), comp(1344, 42));
    } else {
        IF_SETTEXT("", comp(1344, 48));
    };
    if ((strcmp(struct_getparam(int0, 1279), "") != 0)) {
        int10 = script9180(6, int10, struct_getparam(int0, 1279), comp(1344, 49), comp(1344, 42));
    } else {
        IF_SETTEXT("", comp(1344, 49));
    };
    if ((strcmp(struct_getparam(int0, 1280), "") != 0)) {
        int10 = script9180(7, int10, struct_getparam(int0, 1280), comp(1344, 50), comp(1344, 42));
    } else {
        IF_SETTEXT("", comp(1344, 50));
    };
    IF_SETSIZE(0, (int10 + 30), 1, 0, comp(1344, 39));
    CC_DELETEALL(comp(1344, 100));
    IF_SETSCROLLSIZE(0, ((int9 + int10) + 30), comp(1344, 38));
    IF_SETSCROLLPOS(0, 0, comp(1344, 38));
    if ((IF_GETSCROLLHEIGHT(comp(1344, 38)) > IF_GETHEIGHT(comp(1344, 38)))) {
        script7791(comp(1344, 100), comp(1344, 38));
    };
    return;
}