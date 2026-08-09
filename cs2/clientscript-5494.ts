//
function script5494(int0: number): void {
    var int1 = -1 as cs2enum;
    var int2 = -1;
    var int3 = -1;
    [int1, int2, int3] = script7386();
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    [int4, int5, int6, int7] = script7387();
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var string0 = enum_getvalue(0, 36, int1, varbitplayer_17030);
    var string1 = enum_getvalue(0, 36, int2, varbitplayer_17031);
    var string2 = enum_getvalue(0, 36, int3, varbitplayer_17032);
    if ((strcmp(string0, "") == 0)) {
        string0 = "    ";
    };
    string0 = strconcat(" ", string0);
    IF_SETTEXT(string0, comp(1072, 6));
    if ((strcmp(string1, "") == 0)) {
        string1 = "    ";
    };
    string1 = strconcat(" ", string1);
    IF_SETTEXT(string1, comp(1072, 9));
    string2 = strconcat(" ", strconcat(string2, " "));
    IF_SETTEXT(string2, comp(1072, 12));
    var int11 = 0;
    var int12 = 0;
    switch (varplayer_3375) {
        case 1: {
            int11 = varbitplayer_17030;
            int12 = varplayer_3376;
            break;
        }
        case 2: {
            int11 = varbitplayer_17031;
            int12 = enum_getvalue(0, 0, int4, int11);
            break;
        }
        case 3: {
            int11 = varbitplayer_17032;
            int12 = enum_getvalue(0, 0, int6, int11);
            break;
        }
    };
    if ((((int12 == varplayer_3376) && (CC_FIND(comp(1072, 18), int11) == 1)) && (CC_GETHIDE() == 0))) {
        CC_SETCOLOUR(16239152);
        CC_SETONMOUSEOVER(callback(script5645, int11, 1, 1));
        CC_SETONMOUSELEAVE(callback(script5645, int11, 0, 1));
        IF_SETHIDE(false, comp(1072, 19));
        IF_SETPOSITION(CC_GETX(), (CC_GETY() - 2), 0, 0, comp(1072, 19));
    };
    script13971(70254621, -1, 28553, "Save", 1);
    script13971(70254622, -1, 28554, "Revert", 1);
    IF_SETTEXT(inttostring(varplayer_3374, 10), comp(1072, 13));
    switch (varplayer_3374) {
        case 1: {
            if ((varplayer_3377 != varplayer_3382)) {
                script13971(70254621, -1, 28553, "Save", 0);
                script13971(70254622, -1, 28554, "Revert", 0);
            };
            break;
        }
        case 2: {
            if ((varplayer_3377 != varplayer_3384)) {
                script13971(70254621, -1, 28553, "Save", 0);
                script13971(70254622, -1, 28554, "Revert", 0);
            };
            break;
        }
        case 3: {
            if ((varplayer_3377 != varplayer_3386)) {
                script13971(70254621, -1, 28553, "Save", 0);
                script13971(70254622, -1, 28554, "Revert", 0);
            };
            break;
        }
        case 4: {
            if ((varplayer_3377 != varplayer_3388)) {
                script13971(70254621, -1, 28553, "Save", 0);
                script13971(70254622, -1, 28554, "Revert", 0);
            };
            break;
        }
    };
    if ((script4186() < 2)) {
        IF_SETHIDE(true, comp(1072, 2));
        IF_SETHIDE(true, comp(1072, 3));
    } else {
        IF_SETHIDE(false, comp(1072, 2));
        IF_SETHIDE(false, comp(1072, 3));
    };
    return;
}