//
function script6747(int0: number): void {
    IF_SETHIDE(1, 88080421);
    IF_SETONMOUSEREPEAT(callback(), 88080420);
    IF_SETONMOUSEREPEAT(callback(), 88080421);
    var string0 = "";
    var int1 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5420), 1268);
    var int2 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5421), 1268);
    var int3 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5422), 1268);
    var int4 = struct_getparam(enum_getvalue(0, 73, 10016, varplayer_5423), 1268);
    var int5 = 0;
    var int6 = struct_getparam(int0, 1268);
    if ((int1 == int6)) {
        IF_SETHIDE(0, 88080421);
        if ((varplayer_5419 != 1)) {
            IF_SETTEXT(`${inttostring(varplayer_5419, 10)} days left`, 88080421);
        } else {
            IF_SETTEXT(`${inttostring(varplayer_5419, 10)} day left`, 88080421);
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
    IF_SETHIDE(0, 88080422);
    IF_SETHIDE(1, 88080483);
    IF_SETHIDE(0, 88080417);
    IF_SETHIDE(0, 88080418);
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
    IF_SETTEXT(struct_getparam(int0, 1266), 88080419);
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
        IF_SETTEXT(struct_getparam(int0, 3631), 88080477);
    } else {
        IF_SETTEXT(struct_getparam(int0, 1273), 88080477);
    };
    if ((strcmp(struct_getparam(int0, 1292), "") != 0)) {
        IF_SETTEXT(struct_getparam(int0, 1292), 88080481);
    } else {
        IF_SETTEXT("There are no rewards for this minigame.", 88080481);
    };
    script9181();
    var int7 = 80;
    if (((MAP_MEMBERS() == 0) && (struct_getparam(int0, 1290) == 2))) {
        IF_SETHIDE(1, 88080436);
        IF_SETHIDE(1, 88080453);
        IF_SETHIDE(1, 88080470);
        IF_SETHIDE(1, 88080473);
        IF_SETTEXT("Options", 88080452);
        if ((PLAYERMEMBER() == 1)) {
            if ((int6 == 3004)) {
                IF_SETTEXT("Crashed stars can sometimes be found around Gielinor.", 88080446);
            } else {
                IF_SETTEXT("This activity is a members only feature. Please log into a members' world to play.", 88080446);
            };
        } else {
            if ((int6 == 3004)) {
                IF_SETTEXT("Crashed stars can sometimes be found around Gielinor.", 88080446);
            } else {
                IF_SETTEXT("This activity is a members only feature.", 88080446);
            };
            IF_SETHIDE(0, 88080461);
        };
    } else if ((script3224(int6) == 0)) {
        IF_SETTEXT("Requirements", 88080452);
        int7 = script9182(int0);
        IF_SETHIDE(1, 88080436);
        IF_SETHIDE(1, 88080453);
        IF_SETTEXT("", 88080446);
        IF_SETHIDE(1, 88080461);
        IF_SETHIDE(1, 88080470);
        IF_SETHIDE(1, 88080473);
    } else {
        IF_SETTEXT("Options", 88080452);
        IF_SETHIDE(0, 88080436);
        if ((script8229(6, enum_getreverseindex(73, 0, 6452, int0, 0)) > -1)) {
            IF_SETOP(1, "Untrack", 88080440);
            IF_SETTEXT("Untrack", 88080443);
        } else if ((script8230() == 0)) {
            IF_SETHIDE(1, 88080436);
        } else {
            IF_SETOP(1, "Track", 88080440);
            IF_SETTEXT("Track", 88080443);
        };
        if (((struct_getparam(int0, 2700) == -1 as coordgrid) && (struct_getparam(int0, 2701) == -1))) {
            IF_SETHIDE(1, 88080453);
        } else {
            IF_SETHIDE(0, 88080453);
            if (((varbitplayer_20797 == 1) && (struct_getparam(int0, 2701) > 0))) {
                IF_SETHIDE(0, 88080470);
                IF_SETHIDE(1, 88080472);
                IF_SETHIDE(0, 88080471);
                IF_SETHIDE(0, 88080473);
            } else {
                IF_SETHIDE(1, 88080470);
                IF_SETHIDE(1, 88080473);
            };
        };
        IF_SETTEXT("", 88080446);
        IF_SETHIDE(1, 88080461);
    };
    var int8 = script20477(88080477);
    var int9 = (32 + int8);
    IF_SETSIZE(2, int9, 1, 0, 88080474);
    IF_SETPOSITION(0, int9, 1, 0, 88080479);
    int8 = script20477(88080481);
    int9 = ((int9 + int8) + 32);
    IF_SETSIZE(0, (int8 + 32), 1, 0, 88080479);
    IF_SETPOSITION(0, int9, 1, 0, 88080435);
    int9 = ((int9 + int7) + 5);
    IF_SETSIZE(0, (int7 + 5), 1, 0, 88080435);
    IF_SETPOSITION(0, int9, 1, 0, 88080423);
    var int10 = 0;
    var int11 = 4091;
    var string1 = script9133(int6);
    if ((strcmp(string1, "") != 0)) {
        int10 = script9180(1, int10, string1, 88080427, 88080426);
    } else {
        IF_SETTEXT("", 88080427);
    };
    var string2 = struct_getparam(int0, 1274);
    if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (script6431() == 1))) {
        string2 = struct_getparam(int0, 8082);
    };
    if ((strcmp(string2, "") != 0)) {
        int10 = script9180(1, int10, string2, 88080428, 88080426);
    } else {
        IF_SETTEXT("There are no hints available for this task. Good luck!", 88080428);
        IF_SETHIDE(0, 88080428);
        IF_SETTEXTFONT(26, 88080428);
        IF_SETTEXTALIGN(0, 1, 12, 88080428);
        IF_SETPOSITION(0, int10, 0, 0, 88080428);
    };
    if ((strcmp(struct_getparam(int0, 1275), "") != 0)) {
        int10 = script9180(2, int10, struct_getparam(int0, 1275), 88080429, 88080426);
    } else {
        IF_SETTEXT("", 88080429);
    };
    if ((strcmp(struct_getparam(int0, 1276), "") != 0)) {
        int10 = script9180(3, int10, struct_getparam(int0, 1276), 88080430, 88080426);
    } else {
        IF_SETTEXT("", 88080430);
    };
    if ((strcmp(struct_getparam(int0, 1277), "") != 0)) {
        int10 = script9180(4, int10, struct_getparam(int0, 1277), 88080431, 88080426);
    } else {
        IF_SETTEXT("", 88080431);
    };
    if ((strcmp(struct_getparam(int0, 1278), "") != 0)) {
        int10 = script9180(5, int10, struct_getparam(int0, 1278), 88080432, 88080426);
    } else {
        IF_SETTEXT("", 88080432);
    };
    if ((strcmp(struct_getparam(int0, 1279), "") != 0)) {
        int10 = script9180(6, int10, struct_getparam(int0, 1279), 88080433, 88080426);
    } else {
        IF_SETTEXT("", 88080433);
    };
    if ((strcmp(struct_getparam(int0, 1280), "") != 0)) {
        int10 = script9180(7, int10, struct_getparam(int0, 1280), 88080434, 88080426);
    } else {
        IF_SETTEXT("", 88080434);
    };
    IF_SETSIZE(0, (int10 + 30), 1, 0, 88080423);
    CC_DELETEALL(88080484);
    IF_SETSCROLLSIZE(0, ((int9 + int10) + 30), 88080422);
    IF_SETSCROLLPOS(0, 0, 88080422);
    if ((IF_GETSCROLLHEIGHT(88080422) > IF_GETHEIGHT(88080422))) {
        script7791(88080484, 88080422);
    };
    return;
}