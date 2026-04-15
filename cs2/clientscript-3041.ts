//
function script3041(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component): void {
    if ((MINIMENUOPEN(int2, -1) == 1)) {
        IF_SETONTIMER(callback(script3040, int0, int1, int2, int3, int4, int5, int6), int3);
        return;
    };
    IF_SETONTIMER(callback(), int3);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int7 = IGNORE_COUNT();
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int10 = 0;
    var int11 = 0;
    var int12 = 20;
    var int13 = 0;
    var int14 = 5;
    var int15 = 0;
    var int16 = 0;
    var string3 = "";
    var int17 = 1;
    var int18 = 100;
    if ((PLAYERMEMBER() == true)) {
        int18 = 400;
    };
    var int19 = script13749();
    if ((int19 == true)) {
        int12 = 40;
        int17 = (int17 + 7);
    };
    switch (int7) {
        case -2: {
            script15595("Loading Ignore List.<br><br>Please wait.", int5, int2, comp(-1, 65535), int4, int3, int6);
            break;
        }
        case -1: {
            script15595("Connecting to server.<br><br>Please wait.", int5, int2, comp(-1, 65535), int4, int3, int6);
            break;
        }
        case 0: {
            script15595("You are not ignoring any players.<br>Adding players will hide any messages that they send.", int5, int2, comp(-1, 65535), int4, int3, int6);
            break;
        }
        default: {
            if ((int7 > 0)) {
                IF_SETHIDE(true, int5);
                IF_SETTEXT(`Name (${inttostring(int7, 10)}/${inttostring(int18, 10)})`, int6);
                while ((int8 < int7)) {
                    [string0, string1] = IGNORE_GETNAME(int8);
                    script14400(int2, 0, int12, 0, int9, 1, int8);
                    if ((CC_FIND(int2, int8) == 1)) {
                        if ((int19 == false)) {
                            script11476(int2, int8, string1);
                        } else {
                            script14990(0, `Last known as: ${string1}`);
                        };
                        CC_SETOPBASE(string0);
                        CC_SETOP(1, "Delete");
                        CC_SETONOP(callback(script3042, -2147483644, string0));
                    };
                    script7924(int1, int8, 14, 14, 5, (int9 + int17), -1 as graphic, false, false, false, 0);
                    if ((strcmp(string1, "") != 0)) {
                        CC_SETGRAPHIC(2313 as graphic);
                        int14 = 20;
                    } else {
                        CC_SETGRAPHIC(-1 as graphic);
                        int14 = 5;
                    };
                    string2 = string0;
                    script10629(int0, int8, 0, int12, int14, int9, string2, 16777215, 26 as fontmetrics, 0, 1, 0, true);
                    CC_SETSIZE(int14, int12, 1, 0);
                    CC_SETMAXLINES(1);
                    int9 = (int9 + int12);
                    int8 = (int8 + 1);
                };
                int11 = ((IF_GETHEIGHT(int3) / int12) + 1);
                if ((int11 > int7)) {
                    while ((int8 < int11)) {
                        script14400(int2, 0, int12, 0, int9, 1, int8);
                        int9 = (int9 + int12);
                        int8 = (int8 + 1);
                    };
                    int13 = IF_GETHEIGHT(int3);
                } else {
                    int13 = int9;
                };
                script17128(int3, int4, int11, int7, int13);
            };
            break;
        }
    };
    return;
}