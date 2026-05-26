//
function script12695(): void {
    var int0 = 1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var string0 = "";
    var int5 = 0;
    while ((int0 <= 5)) {
        switch (int0) {
            case 1: {
                int1 = varbitplayer_33662;
                int2 = varbitplayer_33663;
                int3 = 116981838;
                int4 = 116981839;
                script7794(116981819, 28689);
                break;
            }
            case 2: {
                int1 = varbitplayer_33664;
                int2 = varbitplayer_33665;
                int3 = 116981849;
                int4 = 116981850;
                script7794(116981840, 28689);
                break;
            }
            case 3: {
                int1 = varbitplayer_33666;
                int2 = varbitplayer_33667;
                int3 = 116981860;
                int4 = 116981861;
                script7794(116981851, 28689);
                break;
            }
            case 4: {
                int1 = varbitplayer_33668;
                int2 = varbitplayer_33669;
                int3 = 116981871;
                int4 = 116981872;
                script7794(116981862, 28689);
                break;
            }
            case 5: {
                int1 = varbitplayer_33670;
                int2 = varbitplayer_33671;
                int3 = 116981882;
                int4 = 116981883;
                script7794(116981873, 28689);
                break;
            }
        };
        switch (int1) {
            case 1: {
                stack(enum_getvalue(0, 23, 745 as cs2enum, int2));
                stack(int3);
                IF_SETGRAPHIC();
                stack(0);
                stack(36);
                stack(108);
                stack(int2);
                enum_getvalue();
                IF_SETTEXT(stack(), int4);
                break;
            }
            case 2: {
                stack(enum_getvalue(0, 23, 11546 as cs2enum, int2));
                stack(int3);
                IF_SETGRAPHIC();
                stack(0);
                stack(36);
                stack(11547);
                stack(int2);
                enum_getvalue();
                IF_SETTEXT(stack(), int4);
                stack(0);
                stack(36);
                stack(11548);
                stack(int2);
                enum_getvalue();
                string0 = stack();
                IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int3);
                break;
            }
            case 3: {
                stack(enum_getvalue(0, 23, 11560 as cs2enum, int2));
                stack(int3);
                IF_SETGRAPHIC();
                stack(0);
                stack(36);
                stack(11558);
                stack(int2);
                enum_getvalue();
                IF_SETTEXT(stack(), int4);
                stack(0);
                stack(36);
                stack(11559);
                stack(int2);
                enum_getvalue();
                string0 = stack();
                IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int3);
                break;
            }
        };
        int0 = (int0 + 1);
    };
    IF_SETTEXT(`+${inttostring((script12690() - 100), 10)}%`, 116981822);
    switch (varbitplayer_33673) {
        case 2: {
            stack(27993);
            stack(116981801);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(27993);
            stack(116981801);
            IF_SETGRAPHIC();
            stack(27993);
            stack(116981800);
            IF_SETGRAPHIC();
            break;
        }
        case 4: {
            stack(27993);
            stack(116981801);
            IF_SETGRAPHIC();
            stack(27993);
            stack(116981800);
            IF_SETGRAPHIC();
            stack(27993);
            stack(116981799);
            IF_SETGRAPHIC();
            break;
        }
        case 5: {
            stack(27993);
            stack(116981801);
            IF_SETGRAPHIC();
            stack(27993);
            stack(116981800);
            IF_SETGRAPHIC();
            stack(27993);
            stack(116981799);
            IF_SETGRAPHIC();
            stack(27993);
            stack(116981798);
            IF_SETGRAPHIC();
            break;
        }
    };
    if ((varbitplayer_33673 <= 1)) {
        string0 = "This is the first day you have logged in. Log in tomorrow to build up your boost!";
    } else {
        string0 = `You have logged in ${inttostring(varbitplayer_33673, 10)} days in a row! Current chain bonus: ${inttostring((varbitplayer_33673 * 5), 10)}%`;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 116981797);
    if ((varbitplayer_33675 == 1)) {
        IF_SETHIDE(0, 116981813);
        IF_SETHIDE(0, 116981889);
        IF_SETTEXT("Caught!", 116981891);
    } else {
        IF_SETHIDE(script12585(PLAYERMEMBER()), 116981813);
        IF_SETHIDE(1, 116981889);
        IF_SETTEXT("Catch!", 116981891);
    };
    if ((PLAYERMEMBER() == 0)) {
        IF_SETTEXT(strconcat(IF_GETTEXT(116981761), "<br><br><col=FFCB05>You need to be a member to play. You'll still build up your login bonus though!"), 116981761);
        IF_SETTEXT("Upgrade", 116981942);
        IF_SETHIDE(0, 116981889);
        IF_SETHIDE(0, 116981796);
        IF_SETHIDE(0, 116981836);
        IF_SETHIDE(0, 116981847);
        IF_SETHIDE(0, 116981858);
        IF_SETHIDE(0, 116981869);
        IF_SETHIDE(0, 116981880);
    };
    script12700();
    return;
}