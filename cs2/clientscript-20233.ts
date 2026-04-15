//
function script20233(): void {
    var string0 = "";
    var int0 = -1;
    var int1 = (IF_GETWIDTH(comp(1401, 30)) - 24);
    var int2 = 0;
    var int3 = 0;
    var int4 = 4;
    var int5 = 0;
    var int6 = 1;
    var int7 = 1;
    IF_SETHIDE(false, comp(1401, 30));
    if (((varbitplayer_58385 == 2) || (varbitplayer_58385 == 4))) {
        switch (varbitplayer_58380) {
            case 0: {
                string0 = "Load success.";
                int0 = 21747;
                int6 = 0;
                if (((IF_FIND[1](comp(1401, 2)) == 1) && (cc_getparam[1](8058) != 1))) {
                    cc_setparam[1](8058, 1);
                    CC_SETONTIMER[1](callback(script20234, CLIENTCLOCK()));
                };
                break;
            }
            case 1: {
                string0 = `'${varclient_8331}' could not be found. Please try another name.`;
                int0 = 18695;
                break;
            }
            case 2: {
                string0 = "Name look up timed out. Please try another name or try again later.";
                int0 = 18695;
                break;
            }
            case 3: {
                string0 = "Enter the display name of the account you wish to import rewards to.";
                if ((strcmp(LOWERCASE(varclient_8331), LOWERCASE(CHAT_PLAYERNAME_UNFILTERED())) == 0)) {
                    string0 = "You cannot nominate yourself! Please try another name or go back.";
                };
                break;
            }
            case 4: {
                string0 = "Loading...";
                int7 = 0;
                break;
            }
        };
        if ((int6 == 1)) {
            IF_SETPARAM_INT(8058, 0, comp(1401, 2));
            IF_SETONTIMER(callback(), comp(1401, 2));
            IF_SETENABLED(0, 91815973);
            IF_SETHIDE(1, 91815974);
        };
        int2 = script15891(string0, IF_GETWIDTH(comp(1401, 50)), IF_GETFONTMETRICS(comp(1401, 50)), 0);
        IF_SETHIDE(false, comp(1401, 37));
        IF_SETHIDE(true, comp(1401, 36));
        IF_SETHIDE(false, comp(1401, 41));
        stack(int0);
        stack(91815988);
        IF_SETGRAPHIC();
        IF_SETHIDE(int7, 91815987);
        IF_SETTEXT(string0, 91815986);
        IF_SETSIZE(0, int2, 1, 0, 91815986);
        int2 = (MAX(20, int2) + 34);
        IF_SETSIZE(8, int2, 1, 0, 91815977);
        script20232(IF_GETHEIGHT(91815970), int2);
        script20227(91815985, 91815984, int1, 0, 16, 0);
    } else {
        IF_SETHIDE(true, comp(1401, 37));
        IF_SETHIDE(false, comp(1401, 36));
        IF_SETHIDE(true, comp(1401, 41));
        script20226(comp(1401, 49), comp(1401, 48), int1, 0, 16, 0);
    };
    return;
}