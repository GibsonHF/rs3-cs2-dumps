//
function script10320(int0: component): void {
    var int1 = script10293(int0);
    var int2 = script10304(int0);
    var int3 = script10305(int0);
    var int4 = script10310(int0);
    var int5 = script10306(int0);
    var int6 = script4244(int0);
    var int7 = script10309(int0);
    PLAYER_GROUP_BANNED_COUNT();
    var int8 = stack();
    var int9 = IF_GETHEIGHT(int1);
    var int10 = IF_GETWIDTH(int1);
    var int11 = 17;
    var int12 = 0;
    var string0 = "";
    CC_DELETEALL(int1);
    CC_DELETEALL(int3);
    CC_DELETEALL(int7);
    IF_SETHIDE(1, int2);
    IF_SETHIDE(1, int6);
    IF_SETHIDE(0, int3);
    IF_SETHIDE(1, int5);
    IF_SETSIZE(20, 33, 1, 1, int4);
    IF_SETSIZE(IF_GETWIDTH(int7), 33, 0, 1, int7);
    script10629(int1, 0, int10, 15, 0, 0, "Banned List", 15777401, 28, 1, 1, 13, 1);
    var int13 = script10275();
    var int14 = 0;
    if ((int13 != -1)) {
        int14 = script10279(int13);
    };
    while ((int12 < int8)) {
        string0 = PLAYER_GROUP_BANNED_GET_DISPLAYNAME(int12);
        script10629(int3, int12, (int10 - 10), 13, 5, int11, string0, 7705248, 26 as fontmetrics, 0, 1, 13, true);
        CC_SETLINKPLAYERGROUP(int12, 0);
        if ((int14 == 1)) {
            CC_SETOP(6, `Unban ${string0}`);
        };
        int11 = (int11 + 14);
        int12 = (int12 + 1);
    };
    if ((int11 > int9)) {
        IF_SETSIZE(20, 33, 1, 1, int4);
        IF_SETSCROLLSIZE(0, int11, int4);
        script31(int7, int4, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSIZE(0, 33, 1, 1, int4);
        IF_SETSCROLLPOS(0, 0, int4);
        IF_SETSCROLLSIZE(0, 0, int4);
    };
    return;
}