//[proc,quickchat_phrase_send]
function script1077(int0: chatphrase, int1: int): void {
    var int2 = int0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = DATE_RUNEDAY_TODATE(varplayer_3079);
    switch (int0) {
        case 105: {
            if (((varbitplayer_525 != 0) || (varbitplayer_24968 == 1))) {
                var int0 = 1021 as chatphrase;
            } else if ((varplayer_183 == 0)) {
                int0 = 561 as chatphrase;
            };
            break;
        }
        case 1712: {
            if (((int3 == 1) && (int4 == 3))) {
                int0 = 1714 as chatphrase;
            };
            if ((script4148() == false)) {
                script3686("You cannot send this message as you are not an Ironman.");
                return;
            };
            break;
        }
        case 1713: {
            if (((int3 == 1) && (int4 == 3))) {
                int0 = 1715 as chatphrase;
            };
            if ((script10628() == 0)) {
                script3686("You cannot send this message as you are not a Hardcore Ironman.");
                return;
            };
            break;
        }
        case 1716:
        case 1717: {
            if ((script10628() == 0)) {
                script3686("You cannot send this message as you are not a Hardcore Ironman.");
                return;
            };
            break;
        }
        case 2983: {
            if ((script19316() == false)) {
                script3686("You cannot send this message as you are not a Group Ironman.");
                return;
            };
            if ((script19320() == 1)) {
                int0 = 2984 as chatphrase;
            };
            break;
        }
        case 1728: {
            int0 = enum_getvalue(0, 24, 13490 as cs2enum, (script8633(int1) + 1));
            break;
        }
        case 1729: {
            int0 = enum_getvalue(0, 24, 13492 as cs2enum, (script8633(int1) + 1));
            break;
        }
        case 1730: {
            int0 = enum_getvalue(0, 24, 13494 as cs2enum, (script8633(int1) + 1));
            break;
        }
        case 1731: {
            int0 = enum_getvalue(0, 24, 13496 as cs2enum, (script8633(int1) + 1));
            break;
        }
        case 1732: {
            int0 = enum_getvalue(0, 24, 13498 as cs2enum, (script8633(int1) + 1));
            break;
        }
        case 1733: {
            int0 = enum_getvalue(0, 24, 13500 as cs2enum, (script8633(int1) + 1));
            break;
        }
        case 2306: {
            if ((varbitplayer_44252 == 0)) {
                script3686("You cannot send this message as you have not yet completed a suitable lap time.");
                return;
            };
            break;
        }
        case 2307: {
            if ((script6061(1) == 0)) {
                int0 = 2314 as chatphrase;
            };
            break;
        }
        case 2308: {
            if ((script6061(2) == 0)) {
                int0 = 2315 as chatphrase;
            };
            break;
        }
        case 2309: {
            if ((script6061(3) == 0)) {
                int0 = 2316 as chatphrase;
            };
            break;
        }
        case 2310: {
            if ((script6061(4) == 0)) {
                int0 = 2317 as chatphrase;
            };
            break;
        }
        case 2311: {
            if ((script6061(5) == 0)) {
                int0 = 2318 as chatphrase;
            };
            break;
        }
        case 2312: {
            if ((script6061(6) == 0)) {
                int0 = 2319 as chatphrase;
            };
            break;
        }
        case 2313: {
            if ((script6061(7) == 0)) {
                int0 = 2320 as chatphrase;
            };
            break;
        }
        case 2622: {
            int0 = enum_getvalue(0, 24, 15377 as cs2enum, script8633(int1));
            break;
        }
        case 2623: {
            int0 = enum_getvalue(0, 24, 15872 as cs2enum, script8633(int1));
            break;
        }
        case 2785: {
            int0 = enum_getvalue(0, 24, 10577 as cs2enum, script8633(int1));
            break;
        }
        case 2624: {
            int0 = enum_getvalue(0, 24, 15874 as cs2enum, script8633(int1));
            break;
        }
        case 2625: {
            int0 = enum_getvalue(0, 24, 15876 as cs2enum, script8633(int1));
            break;
        }
        case 2626: {
            int0 = enum_getvalue(0, 24, 15878 as cs2enum, script8633(int1));
            break;
        }
        case 2627: {
            int0 = enum_getvalue(0, 24, 15880 as cs2enum, script8633(int1));
            break;
        }
    };
    if ((int0 == -1 as chatphrase)) {
        return;
    };
    unk11056(int0);
    var int6 = 0;
    var int7 = CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0);
    var int8 = -1;
    var string0 = "";
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    while (((int6 < int7) && (int6 < 10))) {
        switch (CHATPHRASE_GETDYNAMICCOMMAND(int0, int6)) {
            case 0: {
                script1078(int6, int1);
                break;
            }
            case 1: {
                script1079(int6, int1);
                break;
            }
            case 10: {
                script1079(int6, int1);
                break;
            }
            case 2: {
                script1078(int6, int1);
                break;
            }
        };
        int6 = (int6 + 1);
    };
    switch (script8613(int1)) {
        case 0:
        case 4: {
            stack(0);
            CHAT_SETMODE();
            unk11055();
            break;
        }
        case 1: {
            string0 = script8605(int1);
            int8 = script1090(string0);
            if ((int8 == 1)) {
                unk11128(REMOVETAGS(string0));
                script1089();
            } else if ((int8 == -1)) {
                printmessage("Sorry, this user is not on your Friends List.");
            } else {
                printmessage("Sorry, your friend is no longer playing RuneScape.");
            };
            break;
        }
        case 5: {
            unk11128(REMOVETAGS(script8605(int1)));
            script1089();
            break;
        }
        case 2:
        case 6: {
            stack(1);
            CHAT_SETMODE();
            unk11055();
            break;
        }
        case 8:
        case 9: {
            [int9, int10, int11, int12, int13, int14, int15] = script4590();
            if (((((int9 >= 0) && (int10 >= int11)) && (int12 != 1)) && (unk10993(0) == 1))) {
                stack(0);
                CHAT_SETMODE();
                unk11055();
            };
            break;
        }
        case 10:
        case 11: {
            if ((ACTIVECLANCHANNEL_FIND_LISTENED() == 1)) {
                stack(3);
                CHAT_SETMODE();
                unk11055();
            };
            break;
        }
        case 13:
        case 14: {
            if ((PLAYER_GROUP_FIND() == 1)) {
                stack(4);
                CHAT_SETMODE();
                unk11055();
            };
            break;
        }
        case 15:
        case 16: {
            if ((PLAYER_GROUP_FIND() == 1)) {
                stack(5);
                CHAT_SETMODE();
                unk11055();
            };
            break;
        }
        case 17:
        case 18: {
            if ((unk10993(1) == 1)) {
                stack(1);
                CHAT_SETMODE();
                unk11055();
            };
            break;
        }
    };
    script8624(int1, int2);
    script8626(int1, script8613(int1));
    script8608(int1, script8605(int1));
    script1054(int1);
    return;
}