//
function script10354(int0: cs2enum, int1: int, int2: int, int3: int): [int, int] {
    if ((int0 == -1 as cs2enum)) {
        return [int1, int3];
    };
    var int1 = (int1 + 10);
    var int4 = 13;
    var int5 = 0;
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(int0);
    var int8 = -1 as struct;
    var int9 = 0;
    var int10 = struct_getparam(enum_getvalue(0, 73, 10016 as cs2enum, varplayer_5420), 1268);
    var int11 = ((MODULO(DATE_RUNEDAY(), 3) + 49) - 1);
    var int12 = 0;
    var string0 = "This minigame is currently in the Spotlight and will give thaler at 500% of the normal rate.<br>Find Stanley Limelight near the minigame to learn about thaler.";
    var string1 = "This Elite Dungeon is currently in the Spotlight:<br><br>+25% Dungeoneering experience.<br>An additional miniboss will spawn.<br>20% reduction of death reclaim costs.";
    while ((int5 < int7)) {
        int6 = enum_getvalue(0, 0, int0, int5);
        int8 = enum_getvalue(0, 73, 888 as cs2enum, int6);
        if ((int6 != -1)) {
            int6 = enum_getreverseindex(0, 0, 887 as cs2enum, int6, 0);
        };
        if ((((int8 != -1 as struct) && (int6 != -1)) && (CC_FIND[1](comp(1524, 11), int6) == 1))) {
            int12 = struct_getparam(int8, 1268);
            if ((int5 != 0)) {
                if (((int4 + 210) >= int2)) {
                    [int4, int1] = [13, (int1 + 55)];
                } else {
                    int4 = (int4 + 115);
                };
            };
            script10410(comp(1524, 10), comp(-1, 65535), 28557 as struct, int4, int1, 110, 40, 0, false, struct_getparam(int8, 1266));
            if ((int12 != -1)) {
                if ((int12 == int10)) {
                    CC_CREATE(comp(1524, 10), 5, IF_GETNEXTSUBID(comp(1524, 10)));
                    CC_SETGRAPHIC(20680 as graphic);
                    CC_SETSIZE(16, 16, 0, 0);
                    CC_SETPOSITION((int4 + 96), (int1 - 4), 0, 0);
                    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
                };
                if ((int6 == int11)) {
                    CC_CREATE(comp(1524, 10), 5, IF_GETNEXTSUBID(comp(1524, 10)));
                    CC_SETGRAPHIC(22477 as graphic);
                    CC_SETSIZE(16, 16, 0, 0);
                    CC_SETPOSITION((int4 + 96), (int1 - 4), 0, 0);
                    CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
                };
            };
            if ((int6 == varplayer_4696)) {
                CC_CREATE(comp(1524, 10), 3, IF_GETNEXTSUBID(comp(1524, 10)));
                CC_SETSIZE(110, 40, 0, 0);
                CC_SETPOSITION(int4, int1, 0, 0);
                CC_SETFILL(0);
                CC_SETCOLOUR(15777401);
                var int3 = int1;
            };
            CC_SETPOSITION[1](int4, int1, 0, 0);
            CC_SETSIZE[1](110, 40, 0, 0);
            CC_SETHIDE[1](false);
            int9 = 1;
        };
        int5 = (int5 + 1);
    };
    if ((int9 == 1)) {
        int1 = (int1 + 55);
    };
    return [int1, int3];
}