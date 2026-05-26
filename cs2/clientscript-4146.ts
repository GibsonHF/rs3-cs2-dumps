//[clientscript,bankpin_settings_setup]
function script4146(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_45157 == 0)) {
        IF_SETHIDE(1, 917524);
        IF_SETSIZE(180, 10, 0, 1, 917519);
    } else {
        IF_SETHIDE(0, 917524);
        IF_SETSIZE(180, 40, 0, 1, 917519);
    };
    if ((TESTBIT(varclient_98, 31) == 1)) {
        IF_SETHIDE(1, 917507);
        IF_SETHIDE(0, 917526);
    } else {
        IF_SETHIDE(0, 917507);
        IF_SETHIDE(1, 917526);
        IF_SETHIDE(1, 917515);
        IF_SETHIDE(1, 917516);
        IF_SETHIDE(1, 917517);
        IF_SETHIDE(1, 917518);
        switch (AND(varclient_98, 3)) {
            case 0: {
                IF_SETTEXT("No PIN set", 917511);
                if ((varbitplayer_25398 == 1)) {
                    int1 = 3;
                } else {
                    int1 = 2;
                };
                while ((int0 < int1)) {
                    int2 = (int0 * (26 + 4));
                    switch (int0) {
                        case 0: {
                            script4147(917515, int2, "Set a PIN");
                            break;
                        }
                        case 1: {
                            script4147(917516, int2, "Change recovery delay");
                            break;
                        }
                        case 2: {
                            if ((varbitplayer_25397 == 1)) {
                                script4147(917517, int2, "Cancel Authenticator as a bank pin");
                            } else {
                                script4147(917517, int2, "Use Authenticator as a bank pin");
                            };
                            break;
                        }
                    };
                    int0 = (int0 + 1);
                };
                break;
            }
            case 3: {
                IF_SETTEXT("PIN coming soon", 917511);
                if ((varbitplayer_25398 == 1)) {
                    int1 = 2;
                } else {
                    int1 = 1;
                };
                while ((int0 < int1)) {
                    int2 = (int0 * (26 + 4));
                    switch (int0) {
                        case 0: {
                            script4147(917515, int2, "Cancel the PIN");
                            break;
                        }
                        case 1: {
                            if ((varbitplayer_25397 == 1)) {
                                script4147(917516, int2, "Cancel Authenticator as a bank pin");
                            } else {
                                script4147(917516, int2, "Use Authenticator as a bank pin");
                            };
                            break;
                        }
                    };
                    int0 = (int0 + 1);
                };
                break;
            }
            default: {
                IF_SETTEXT("You have a PIN", 917511);
                if ((varbitplayer_25398 == 1)) {
                    int1 = 4;
                } else {
                    int1 = 3;
                };
                while ((int0 < int1)) {
                    int2 = (int0 * (26 + 4));
                    switch (int0) {
                        case 0: {
                            script4147(917515, int2, "Change your PIN");
                            break;
                        }
                        case 1: {
                            script4147(917516, int2, "Delete your PIN");
                            break;
                        }
                        case 2: {
                            script4147(917517, int2, "Change recovery delay");
                            break;
                        }
                        case 3: {
                            if ((varbitplayer_25397 == 1)) {
                                script4147(917518, int2, "Cancel Authenticator as a bank pin");
                            } else {
                                script4147(917518, int2, "Use Authenticator as a bank pin");
                            };
                            break;
                        }
                    };
                    int0 = (int0 + 1);
                };
                break;
            }
        };
        if ((TESTBIT(varclient_98, 10) == 1)) {
            IF_SETTEXT("7 days", 917513);
        } else {
            IF_SETTEXT("3 days", 917513);
        };
    };
    CC_DELETEALL(917522);
    CC_CREATE(917522, 4, 0);
    CC_SETTEXTFONT(27);
    CC_SETCOLOUR(16750623);
    CC_SETTEXTSHADOW(1);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXT(varclient_2352);
    if ((((PARAHEIGHT(varclient_2352, (IF_GETWIDTH(IF_GETLAYER(917522)) - 14), 27) * 11) + 5) <= IF_GETHEIGHT(917522))) {
        IF_SETSIZE(14, 40, 1, 1, 917522);
        IF_SETSCROLLSIZE(0, 0, 917522);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        IF_SETHIDE(1, 917523);
        return;
    };
    IF_SETSIZE(31, 40, 1, 1, 917522);
    var int3 = ((PARAHEIGHT(varclient_2352, IF_GETWIDTH(917522), 27) * 11) + 5);
    IF_SETSCROLLSIZE(0, int3, 917522);
    IF_SETSCROLLPOS(0, 0, 917522);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, int3, 1, 0);
    IF_SETHIDE(0, 917523);
    script31(917523, 917522, 792, 789, 790, 791, 773, 788);
    return;
}