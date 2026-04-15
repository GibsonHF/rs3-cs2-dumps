//
function script6228(int0: int): void {
    var int1 = comp(1043, 149);
    var int2 = comp(1043, 2);
    var int3 = comp(1043, 0);
    var int4 = comp(1043, 168);
    var int5 = comp(1043, 174);
    var int6 = 0;
    var int7 = -1 as struct;
    CC_DELETEALL(int1);
    CC_DELETEALL(int3);
    if ((varplayer_4381 != -1)) {
        int6 = varplayer_4381;
        var int0 = enum_getvalue(0, 0, 8678 as cs2enum, varplayer_4381);
        int7 = enum_getvalue(0, 73, 8677 as cs2enum, int0);
        if ((script5858(int7) == 1)) {
            IF_SETHIDE(false, int4);
            if (((int7 != -1 as struct) && (varbitplayer_22200 < struct_getparam(int7, 4210)))) {
                IF_SETHIDE(false, int5);
            } else {
                IF_SETHIDE(true, int5);
            };
        } else {
            IF_SETHIDE(true, int4);
        };
        if ((CC_FIND(int2, int6) == 1)) {
            script10066(int3, IF_GETNEXTSUBID(int3), (CC_GETWIDTH() + 6), (CC_GETHEIGHT() + 6), (CC_GETX() - 3), (CC_GETY() - 3), 15777401, 0, 0);
        };
    } else {
        IF_SETHIDE(true, int4);
    };
    if ((varclient_4146 != -1)) {
        int6 = varclient_4146;
        if ((CC_FIND(int2, int6) == 1)) {
            script10066(int3, IF_GETNEXTSUBID(int3), (CC_GETWIDTH() + 6), (CC_GETHEIGHT() + 6), (CC_GETX() - 3), (CC_GETY() - 3), 16777215, 0, 0);
        };
    };
    var int8 = -1;
    var int9 = -1 as struct;
    var int10 = IF_GETWIDTH(int1);
    var int11 = IF_GETHEIGHT(int1);
    var int12 = 0;
    var string0 = "";
    int8 = enum_getvalue(0, 0, 8678 as cs2enum, int6);
    int9 = enum_getvalue(0, 73, 8677 as cs2enum, int8);
    if ((int9 == -1 as struct)) {
        return;
    };
    script7924(int1, 0, 32, 32, 5, 5, struct_getparam(int9, 4208), false, false, false, 0);
    script10629(int1, 1, (int10 - 40), 32, 40, 5, struct_getparam(int9, 4206), 7705248, 34 as fontmetrics, 0, 1, 20, false);
    int12 = (PARAHEIGHT(struct_getparam(int9, 4207), (int10 - 20), 206 as fontmetrics) * 13);
    script10629(int1, 2, (int10 - 5), int12, 5, 40, struct_getparam(int9, 4207), 7705248, 206 as fontmetrics, 0, 0, 13, false);
    switch (struct_getparam(int9, 4219)) {
        case 1: {
            string0 = "Self cast - has immediate effect.";
            break;
        }
        case 2: {
            string0 = "Requires another competitor nearby.";
            break;
        }
        case 3: {
            string0 = "Requires a gorilla or monkey nearby.";
            break;
        }
        default: {
            string0 = "Passive ability - always on.";
            break;
        }
    };
    if ((struct_getparam(int9, 4213) > 0)) {
        string0 = strconcat(string0, `<br>Limited casts: ${inttostring(struct_getparam(int9, 4213), 10)} uses per game.`);
    } else if ((struct_getparam(int9, 4212) > 0)) {
        string0 = strconcat(string0, `<br>Cooldown: ${inttostring(SCALE(struct_getparam(int9, 4212), 100, 60), 10)} seconds.`);
    };
    int12 = (PARAHEIGHT(string0, (int10 - 10), 26 as fontmetrics) * 13);
    script10629(int1, 3, (int10 - 10), int12, 5, ((int11 - 6) - int12), string0, 7705248, 206 as fontmetrics, 0, 0, 13, false);
    if ((script5858(int9) == 1)) {
        string0 = `Cost to unlock: ${inttostring(struct_getparam(int9, 4210), 10)}`;
        script10629(int1, 4, (int10 - 10), 13, 5, ((int11 - 21) - int12), string0, 11456736, 26 as fontmetrics, 0, 0, 13, false);
    };
    return;
}