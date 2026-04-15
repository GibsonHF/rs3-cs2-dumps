//[clientscript,notes_update]
function script2443(int0: unknown_int): void {
    if ((varplayer_97 == false)) {
        return;
    };
    var int1 = script7799(int0, comp(34, 12));
    var int2 = script7799(int0, comp(34, 5));
    var int3 = script7799(int0, comp(34, 13));
    var int4 = script7799(int0, comp(34, 4));
    var int5 = script7799(int0, comp(34, 14));
    var int6 = script7799(int0, comp(34, 11));
    var int7 = script7799(int0, comp(34, 9));
    var int8 = script7799(int0, comp(34, 2));
    var int9 = script7799(int0, comp(34, 16));
    if ((IF_GETHIDE(int3) == false)) {
        IF_SETONTIMER(callback(script2443, int0), int1);
        return;
    };
    IF_SETONTIMER(callback(), int1);
    var int10 = 33;
    if ((script6431() == true)) {
        int10 = 42;
    };
    IF_SETSIZE(0, int10, 1, 0, int7);
    IF_SETSIZE(0, int10, 1, 1, int8);
    script1548(13);
    script16547();
    varclient_821 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var string0 = "";
    CC_DELETEALL(int1);
    IF_SETSIZE(24, 8, 1, 1, int2);
    if ((USERDETAIL_QUICKCHAT() == 1)) {
        IF_SETTEXT("The notes system is not available for users restricted to quick-chat.", int4);
        IF_SETHIDE(false, int4);
        return;
    };
    IF_SETTEXT("", int4);
    IF_SETHIDE(true, int4);
    while ((int12 < 30)) {
        string0 = script2452(int12);
        if ((strcmp(string0, "") != 0)) {
            int11 = script2445(int0, string0, int11, int13, script2453(int12));
            int13 = (int13 + 1);
        };
        int12 = (int12 + 1);
    };
    if ((int13 <= 0)) {
        IF_SETTEXT("No notes", int4);
        IF_SETHIDE(false, int4);
    } else if ((int11 < IF_GETHEIGHT(int1))) {
        if ((CC_FINDBYCATEGORY(int1, (int13 - 1), 0) == 1)) {
            IF_SETSIZE(CC_GETWIDTH(), (IF_GETHEIGHT(int1) - (CC_GETY() + CC_GETHEIGHT())), 0, 0, int5);
            IF_SETPOSITION(CC_GETX(), (CC_GETY() + CC_GETHEIGHT()), 0, 0, int5);
            IF_SETHIDE(false, int5);
        };
    } else {
        IF_SETHIDE(true, int5);
    };
    script6944(int0, int11);
    IF_SETHIDE(true, int6);
    script16559(int9, 11);
    return;
}