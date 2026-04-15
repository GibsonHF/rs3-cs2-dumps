//[clientscript,bankpin_settings_setup]
function script4146(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if ((varbitplayer_45157 == 0)) {
        IF_SETHIDE(true, comp(14, 20));
        IF_SETSIZE(180, 10, 0, 1, comp(14, 15));
    } else {
        IF_SETHIDE(false, comp(14, 20));
        IF_SETSIZE(180, 40, 0, 1, comp(14, 15));
    };
    if ((TESTBIT(varclient_98, 31) == 1)) {
        IF_SETHIDE(true, comp(14, 3));
        IF_SETHIDE(false, comp(14, 22));
    } else {
        IF_SETHIDE(false, comp(14, 3));
        IF_SETHIDE(true, comp(14, 22));
        IF_SETHIDE(true, comp(14, 11));
        IF_SETHIDE(true, comp(14, 12));
        IF_SETHIDE(true, comp(14, 13));
        IF_SETHIDE(true, comp(14, 14));
        switch (AND(varclient_98, 3)) {
            case 0: {
                IF_SETTEXT("No PIN set", comp(14, 7));
                if ((varbitplayer_25398 == 1)) {
                    int1 = 3;
                } else {
                    int1 = 2;
                };
                while ((int0 < int1)) {
                    int2 = (int0 * (26 + 4));
                    switch (int0) {
                        case 0: {
                            script4147(comp(14, 11), int2, "Set a PIN");
                            break;
                        }
                        case 1: {
                            script4147(comp(14, 12), int2, "Change recovery delay");
                            break;
                        }
                        case 2: {
                            if ((varbitplayer_25397 == 1)) {
                                script4147(comp(14, 13), int2, "Cancel Authenticator as a bank pin");
                            } else {
                                script4147(comp(14, 13), int2, "Use Authenticator as a bank pin");
                            };
                            break;
                        }
                    };
                    int0 = (int0 + 1);
                };
                break;
            }
            case 3: {
                IF_SETTEXT("PIN coming soon", comp(14, 7));
                if ((varbitplayer_25398 == 1)) {
                    int1 = 2;
                } else {
                    int1 = 1;
                };
                while ((int0 < int1)) {
                    int2 = (int0 * (26 + 4));
                    switch (int0) {
                        case 0: {
                            script4147(comp(14, 11), int2, "Cancel the PIN");
                            break;
                        }
                        case 1: {
                            if ((varbitplayer_25397 == 1)) {
                                script4147(comp(14, 12), int2, "Cancel Authenticator as a bank pin");
                            } else {
                                script4147(comp(14, 12), int2, "Use Authenticator as a bank pin");
                            };
                            break;
                        }
                    };
                    int0 = (int0 + 1);
                };
                break;
            }
            default: {
                IF_SETTEXT("You have a PIN", comp(14, 7));
                if ((varbitplayer_25398 == 1)) {
                    int1 = 4;
                } else {
                    int1 = 3;
                };
                while ((int0 < int1)) {
                    int2 = (int0 * (26 + 4));
                    switch (int0) {
                        case 0: {
                            script4147(comp(14, 11), int2, "Change your PIN");
                            break;
                        }
                        case 1: {
                            script4147(comp(14, 12), int2, "Delete your PIN");
                            break;
                        }
                        case 2: {
                            script4147(comp(14, 13), int2, "Change recovery delay");
                            break;
                        }
                        case 3: {
                            if ((varbitplayer_25397 == 1)) {
                                script4147(comp(14, 14), int2, "Cancel Authenticator as a bank pin");
                            } else {
                                script4147(comp(14, 14), int2, "Use Authenticator as a bank pin");
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
            IF_SETTEXT("7 days", comp(14, 9));
        } else {
            IF_SETTEXT("3 days", comp(14, 9));
        };
    };
    CC_DELETEALL(comp(14, 18));
    CC_CREATE(comp(14, 18), 4, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETCOLOUR(16750623);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXT(varclient_2352);
    if ((((PARAHEIGHT(varclient_2352, (IF_GETWIDTH(IF_GETLAYER(comp(14, 18))) - 14), 27 as fontmetrics) * 11) + 5) <= IF_GETHEIGHT(comp(14, 18)))) {
        IF_SETSIZE(14, 40, 1, 1, comp(14, 18));
        IF_SETSCROLLSIZE(0, 0, comp(14, 18));
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        IF_SETHIDE(true, comp(14, 19));
        return;
    };
    IF_SETSIZE(31, 40, 1, 1, comp(14, 18));
    var int3 = ((PARAHEIGHT(varclient_2352, IF_GETWIDTH(comp(14, 18)), 27 as fontmetrics) * 11) + 5);
    IF_SETSCROLLSIZE(0, int3, comp(14, 18));
    IF_SETSCROLLPOS(0, 0, comp(14, 18));
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETSIZE(0, int3, 1, 0);
    IF_SETHIDE(false, comp(14, 19));
    script31(comp(14, 19), comp(14, 18), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    return;
}