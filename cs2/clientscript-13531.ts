//
function script13531(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    switch (int0) {
        case 0: {
            [int4, int5] = [comp(137, 213) /*chatdefault:legacy_chat_game*/, comp(137, 214) /*chatdefault:legacy_chat_game_icon*/];
            int7 = 0;
            break;
        }
        case 1: {
            [int4, int5] = [comp(137, 218) /*chatdefault:legacy_chat_public*/, comp(137, 219) /*chatdefault:legacy_chat_public_icon*/];
            int7 = 1;
            break;
        }
        case 2: {
            [int4, int5] = [comp(137, 223) /*chatdefault:legacy_chat_private*/, comp(137, 224) /*chatdefault:legacy_chat_private_icon*/];
            int7 = 2;
            break;
        }
        case 3: {
            [int4, int5] = [comp(137, 228) /*chatdefault:legacy_chat_friendschat*/, comp(137, 229) /*chatdefault:legacy_chat_friendschat_icon*/];
            int7 = 3;
            break;
        }
        case 4: {
            [int4, int5] = [comp(137, 233) /*chatdefault:legacy_chat_clan*/, comp(137, 234) /*chatdefault:legacy_chat_clan_icon*/];
            int7 = 4;
            break;
        }
        case 5: {
            [int4, int5] = [comp(137, 238) /*chatdefault:legacy_chat_guest*/, comp(137, 239) /*chatdefault:legacy_chat_guest_icon*/];
            int7 = 5;
            break;
        }
        case 6: {
            [int4, int5] = [comp(137, 243) /*chatdefault:legacy_chat_trade*/, comp(137, 244) /*chatdefault:legacy_chat_trade_icon*/];
            int7 = 6;
            break;
        }
        case 15: {
            [int4, int5] = [comp(137, 248) /*chatdefault:legacy_chat_group*/, comp(137, 249) /*chatdefault:legacy_chat_group_icon*/];
            int7 = 7;
            break;
        }
        case 16: {
            [int4, int5] = [comp(137, 253) /*chatdefault:legacy_chat_group_ironman*/, comp(137, 259) /*chatdefault:legacy_chat_group_ironman_icon*/];
            int7 = 8;
            IF_SETHIDE(script12585(int3), int4);
            break;
        }
        case 99: {
            [int4, int5] = [comp(137, 209) /*chatdefault:legacy_chat_all*/, comp(137, 210) /*chatdefault:legacy_chat_all_icon*/];
            int8 = 35;
            int9 = 0;
            break;
        }
        default: {
            return;
        }
    };
    if ((int0 != 99)) {
        if ((int3 == 1)) {
            int8 = 51;
        } else {
            int8 = 55;
        };
        if ((varbitplayer_27169 == 1)) {
            int8 = (int8 + 2);
        };
        int9 = (35 + (int7 * int8));
    };
    IF_SETSIZE(int8, 0, 0, 1, int4);
    IF_SETPOSITION(int9, 0, 0, 2, int4);
    if ((int0 == 1)) {
        if ((varbitplayer_36983 == 1)) {
            script9917(int0, 3);
        } else if ((int1 == 0)) {
            script9917(int0, 0);
        } else if ((int2 == 1)) {
            script9917(int0, 1);
        } else {
            script9917(int0, 2);
        };
    } else if ((int1 == 0)) {
        script9917(int0, 0);
    } else if ((int2 == 1)) {
        script9917(int0, 1);
    } else {
        script9917(int0, 2);
    };
    if ((varclient_41 != -1)) {
        if ((script9913(int0) == 1)) {
            IF_SETGRAPHIC(35463 as graphic, int5);
        } else {
            int6 = script9921(int0);
            if (((int6 == 0) || (MODULO((int6 / 25), 2) == 1))) {
                IF_SETGRAPHIC(35463 as graphic, int5);
            } else {
                IF_SETGRAPHIC(34645 as graphic, int5);
            };
        };
    } else {
        int6 = script9921(int0);
        if (((int6 == 0) || (MODULO((int6 / 25), 2) == 1))) {
            IF_SETGRAPHIC(35463 as graphic, int5);
        } else {
            IF_SETGRAPHIC(34645 as graphic, int5);
        };
    };
    IF_SETONOP(callback(script9915, -2147483644, 18, int0), int4);
    return;
}