//
function script3029(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component): void {
    if ((MINIMENUOPEN(int3, -1) == 1)) {
        IF_SETONTIMER(callback(script3028, int0, int1, int2, int3, int4, int5, int6, int7, int8), int4);
        return;
    };
    IF_SETONTIMER(callback(), int4);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int9 = FRIEND_COUNT();
    var int10 = 0;
    var int11 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 5;
    var int16 = 0;
    var int17 = 0;
    var string3 = "";
    var int18 = 200;
    if ((PLAYERMEMBER() == true)) {
        int18 = 400;
    };
    var int19 = 20;
    var int20 = 1;
    var int21 = script13749();
    if ((int21 == true)) {
        int19 = 40;
        int20 = (int20 + 7);
    } else {
        IF_SETSIZE(0, int19, 1, 0, comp(909, 13));
    };
    switch (int9) {
        case -2: {
            script15595("Loading Friends List.<br><br>Please wait.", int6, int3, int7, int5, int4, int8);
            break;
        }
        case -1: {
            script15595("Connecting to server.<br><br>Please wait.", int6, int3, int7, int5, int4, int8);
            break;
        }
        case 0: {
            if ((int21 == false)) {
                script15595("You have not added any friends to your list.", int6, int3, int7, int5, int4, int8);
            } else {
                script15595("You have not added any friends yet.<br>Use the 'Add player' button below, and then enter their name to add them.", int6, int3, int7, int5, int4, int8);
            };
            break;
        }
        default: {
            if ((int9 > 0)) {
                IF_SETHIDE(true, int6);
                if ((int7 != comp(-1, 65535))) {
                    IF_SETHIDE(false, int7);
                };
                IF_SETTEXT(`Name (${inttostring(int9, 10)}/${inttostring(int18, 10)})`, int8);
                while ((int10 < int9)) {
                    [string0, string1] = FRIEND_GETNAME(int10);
                    int12 = FRIEND_GETWORLD(int10);
                    script14400(int3, 0, int19, 0, int11, 1, int10);
                    if ((CC_FIND(int3, int10) == 1)) {
                        if ((int21 == false)) {
                            script11464(int3, int10, string1);
                        } else {
                            script14990(0, `Last known as: ${string1}`);
                        };
                        CC_SETOPBASE(string0);
                        if ((int12 > 0)) {
                            if ((int21 == true)) {
                                CC_SETOP(1, "Select");
                                CC_SETOP(2, "Message");
                                script17124(int10);
                            } else {
                                CC_SETOP(1, "Message");
                                CC_SETOP(2, "Join");
                            };
                        };
                        CC_SETOP(10, "Delete");
                        CC_SETONOP(callback(script3039, int21, -2147483645, -2147483644, int12, string0, int10));
                    };
                    script2994(int1, int10, 5, (int11 + int20), 0, 0, 14, 14, 0, 0, -1 as graphic);
                    if ((strcmp(string1, "") != 0)) {
                        CC_SETGRAPHIC(2313 as graphic);
                        int15 = 20;
                    } else {
                        int15 = 5;
                    };
                    string2 = string0;
                    script2995(int0, int10, int15, int11, 0, 0, int15, int19, 1, 0, 2101 as dbrow, string2);
                    CC_SETCOLOUR(16777215);
                    CC_SETTEXTSHADOW(true);
                    CC_SETMAXLINES(1);
                    [int16, string2] = script17129(int12);
                    script2995(int2, int10, 5, int11, 0, 0, 5, int19, 1, 0, 2101 as dbrow, string2);
                    CC_SETCOLOUR(int16);
                    CC_SETTEXTSHADOW(true);
                    CC_SETMAXLINES(1);
                    int11 = (int11 + int19);
                    int10 = (int10 + 1);
                };
                int13 = ((IF_GETHEIGHT(int4) / int19) + 1);
                if ((int13 > int9)) {
                    while ((int10 < int13)) {
                        script14400(int3, 0, int19, 0, int11, 1, int10);
                        int11 = (int11 + int19);
                        int10 = (int10 + 1);
                    };
                    int14 = IF_GETHEIGHT(int4);
                } else {
                    int14 = int11;
                };
                script17128(int4, int5, int13, int9, int14);
            };
            break;
        }
    };
    return;
}