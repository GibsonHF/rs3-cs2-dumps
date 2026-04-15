//
function script10760(int0: component, int1: component, string0: string): int {
    var int2 = cc_getparam(4009);
    var int3 = cc_getparam(4680);
    var int4 = cc_getparam(6319);
    var int5 = cc_getparam(4145);
    var int6 = cc_getparam(4146);
    var int7 = cc_getparam(4261);
    var int8 = cc_getparam(6169);
    var int9 = cc_getparam(6402);
    if (((int2 == -1 as obj) && (int3 == -1 as obj))) {
        return 0;
    };
    var string1 = OC_NAME(int2);
    switch (int2) {
        case 996:
        case 997:
        case 998:
        case 999:
        case 1000:
        case 1001:
        case 1002:
        case 1003:
        case 1004: {
            string1 = "Coins";
            break;
        }
        case 6530:
        case 6531:
        case 6532:
        case 6533:
        case 6534: {
            string1 = "Tokkul";
            break;
        }
        case 48424: {
            string1 = "Cremation ability";
            break;
        }
        case 52611: {
            if ((varbitplayer_52723 == 1)) {
                string1 = "Tier 1 Returner Reward Chest";
            };
            break;
        }
        case 52613: {
            if ((varbitplayer_52723 == 1)) {
                string1 = "Tier 2 Returner Reward Chest";
            };
            break;
        }
        case 52615: {
            if ((varbitplayer_52723 == 1)) {
                string1 = "Tier 3 Returner Reward Chest";
            };
            break;
        }
        case 52617: {
            if ((varbitplayer_52723 == 1)) {
                string1 = "Tier 4 Returner Reward Chest";
            };
            break;
        }
        case 52619: {
            if ((varbitplayer_52723 == 1)) {
                string1 = "Tier 5 Returner Reward Chest";
            };
            break;
        }
        case 52621: {
            if ((varbitplayer_52723 == 1)) {
                string1 = "Tier 6 Returner Reward Chest";
            };
            break;
        }
        case 52623: {
            if ((varbitplayer_52723 == 1)) {
                string1 = "Tier 7 Returner Reward Chest";
            };
            break;
        }
        case 58550: {
            string1 = "'the Time Mage' title";
            break;
        }
        case 59428: {
            string1 = "'the Bee-rilliant' title";
            break;
        }
        case 60422:
        case 60423:
        case 60424: {
            string1 = "Antisanguine?";
            break;
        }
    };
    var int10 = script5828(string1, int2, 28977 as struct, 27825 as struct, int0, int1, int3, int4);
    if ((STRING_LENGTH(string0) > 0)) {
        int10 = script7235(string0, "", 27825 as struct, int0, int1, int10);
    };
    switch (int5) {
        case 4: {
            if ((int6 != -1 as struct)) {
                int10 = script12892(int6, int2, int7, int8, 27825 as struct, int0, int1, int10);
            };
            break;
        }
        case 13: {
            if ((int6 != -1 as struct)) {
                int10 = script16244(int2, int7, int8, 27825 as struct, int0, int1, int10);
            };
            break;
        }
    };
    if (((int9 != 1) || (int3 == int2))) {
        int3 = -1 as obj;
    };
    if ((script13262(int3) == 1)) {
        int10 = script13258(125, 155, int0, int1, int10);
    };
    return int10;
}