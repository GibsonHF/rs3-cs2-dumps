//
function script5662(int0: unknown_int, int1: unknown_int): void {
    if ((varbitplayer_228 == 1)) {
        if ((int1 == 1)) {
            script5653();
        };
        return;
    };
    if ((int0 == 0)) {
        if ((script12082() == 1)) {
            IF_SETONSTATTRANSMIT(callback(script5661, 1), 79495235);
            IF_SETONVARCTRANSMIT(callback(script5661, 1, 2695, 1), 79495235);
        } else {
            script5659();
            return;
        };
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as stat;
    var int5 = -1;
    var int6 = 0;
    while ((int6 < ENUM_GETOUTPUTCOUNT(681 as cs2enum))) {
        int6 = (int6 + 1);
        int4 = enum_getvalue(0, 17, 681 as cs2enum, int6);
        if ((int4 != -1 as stat)) {
            int5 = (STAT_VISIBLE_XP(int4) - script5664(int6));
            if ((int5 != 0)) {
                int2 = (int2 + 1);
                if (((script11891(int4, enum_getvalue(17, 0, 10865 as cs2enum, int4)) == 0) || (script10888(int6) == 0))) {
                    script12083(int6);
                };
                int3 = (int3 + int5);
            };
        };
    };
    var int7 = ((varclient_2695 - varclient_2694) / 10);
    if ((int7 != 0)) {
        int2 = (int2 + 1);
        script12083(100);
    };
    if ((int2 == 0)) {
        return;
    };
    var string0 = "";
    var int8 = 0;
    var int9 = 0;
    var string1 = "0";
    if ((IF_GETHIDE(comp(1477, 636)) == false)) {
        if (((varplayer_95 > 0) && ((int7 == 0) || (int2 > 1)))) {
            int9 = MODULO(varplayer_95, 10);
            if ((int9 > 0)) {
                string0 = `(${TOSTRING_LOCALISED((varplayer_95 / 10), 1)}${script8002()}${inttostring(int9, 10)} bonus xp)`;
            } else {
                string0 = `(${TOSTRING_LOCALISED((varplayer_95 / 10), 1)} bonus xp)`;
            };
        };
        if ((((int7 != 0) && (varbitplayer_17640 > 0)) && (int2 == 1))) {
            int9 = MODULO(varbitplayer_17640, 10);
            if ((int9 > 0)) {
                string1 = `(${TOSTRING_LOCALISED((varbitplayer_17640 / 10), 1)}${script8002()}${inttostring(int9, 10)} bonus)`;
            } else {
                string0 = `( bonus)`;
            };
        };
        CC_CREATE(comp(1477, 637), 4, IF_GETNEXTSUBID(comp(1477, 637)));
        if (((int7 != 0) && (int2 == 1))) {
            if ((int7 == 1)) {
                CC_SETTEXT(`+${TOSTRING_LOCALISED(1, 1)} pet point ${string0}`);
            } else {
                CC_SETTEXT(`+${TOSTRING_LOCALISED(int7, 1)} pet points ${string0}`);
            };
        } else {
            CC_SETTEXT(`+${TOSTRING_LOCALISED((int3 + int7), 1)} xp ${string0}`);
        };
        CC_SETONTIMER(callback(script5657, -2147483645, CC_GETID(), 0));
        CC_SETSIZE(200, 25, 0, 0);
        CC_SETTEXTFONT(212);
        CC_SETCOLOUR(16101953);
        CC_SETTEXTSHADOW(1);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETPOSITION(0, 0, 1, 2);
    } else {
        CC_DELETEALL(comp(1477, 637));
    };
    if ((int1 == 1)) {
        script5653();
    };
    return;
}