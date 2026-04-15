//
function script4063(int0: component, int1: unknown_int): void {
    var int2 = 1;
    switch (int1) {
        case 0: {
            int2 = script12422(varplayer_6808, 200, 65536);
            break;
        }
        case 1: {
            int2 = script12422(varbitplayer_5161, MAX(1, varbitplayer_5162), 65536);
            break;
        }
        case 10: {
            int2 = script12422(varplayer_7152, MAX(1, varplayer_7240), 65536);
            break;
        }
        case 11: {
            int2 = script12422(varplayer_7157, MAX(1, varplayer_7158), 65536);
            break;
        }
        case 12: {
            int2 = script12422(varplayer_9632, MAX(1, varplayer_9633), 65536);
            break;
        }
        case 13: {
            int2 = script12422(varplayer_9634, MAX(1, varplayer_9635), 65536);
            break;
        }
        case 14: {
            int2 = script12422(varplayer_7161, MAX(1, varplayer_7162), 65536);
            break;
        }
        case 15: {
            int2 = script12422(varplayer_9636, MAX(1, varplayer_9637), 65536);
            break;
        }
        case 16: {
            int2 = script12422(varplayer_9638, MAX(1, varplayer_9639), 65536);
            break;
        }
        case 21: {
            int2 = script12422(varbitplayer_35812, 100, 65536);
            break;
        }
        case 22: {
            int2 = script2291(1);
            break;
        }
        case 23: {
            int2 = script2291(4);
            break;
        }
        case 25: {
            int2 = script2291(3);
            break;
        }
        case 24: {
            int2 = script2291(2);
            break;
        }
        case 26: {
            int2 = script2291(5);
            break;
        }
        case 29: {
            script13673(int0, int1, 1, -1, 0);
            return;
        }
        case 30: {
            script13673(int0, int1, 2, -1, 0);
            return;
        }
        case 32: {
            int2 = script2244();
            break;
        }
        case 33: {
            int2 = script12422(script12377(varbitplayer_42027, 1, 16), 16, 65536);
            break;
        }
        case 34: {
            int2 = script12422(script12377(varplayer_8195, 1, 1410000), 1410000, 65536);
            break;
        }
        case 35: {
            int2 = script12422(varbitclient_44281, script2072(), 65536);
            break;
        }
        case 36: {
            int2 = script12422(varbitclient_44282, script2072(), 65536);
            break;
        }
        case 37: {
            int2 = script12422(varbitclient_44283, script2072(), 65536);
            break;
        }
        case 38: {
            int2 = script12422(varbitclient_44284, script2072(), 65536);
            break;
        }
        case 39: {
            int2 = script12422(varbitclient_44285, script2072(), 65536);
            break;
        }
        case 40: {
            int2 = script12422(varbitclient_44286, script2072(), 65536);
            break;
        }
        case 49: {
            int2 = script12422(varplayer_10947, MAX(1, varplayer_10948), 65536);
            break;
        }
        case 61: {
            int2 = script12422(varplayer_11843, MAX(1, varplayer_11844), 65536);
            break;
        }
        case 50: {
            int2 = script12422(varbitplayer_50392, 12, 65536);
            IF_SETTEXT(`${inttostring(varbitplayer_50392, 10)}/${inttostring(12, 10)}`, comp(886, 53));
            break;
        }
        case 52: {
            int2 = script12422(varbitplayer_29996, 12, 65536);
            IF_SETTEXT(`${inttostring(varbitplayer_29996, 10)}/${inttostring(12, 10)}`, comp(935, 47));
            break;
        }
        case 53: {
            int2 = script12422(varbitplayer_51024, 6, 65536);
            IF_SETTEXT(`${inttostring(varbitplayer_51024, 10)}/${inttostring(6, 10)}`, comp(669, 22));
            break;
        }
        case 54: {
            int2 = script12422(varbitplayer_51270, 12, 65536);
            IF_SETTEXT(`${inttostring(varbitplayer_51270, 10)}/${inttostring(12, 10)}`, comp(300, 26));
            break;
        }
        case 58: {
            if (((varclient_7219 == -1) || (varclient_7221 >= varclient_7222))) {
                int2 = 65536;
                IF_SETTEXT("MAX", comp(1222, 20));
            } else {
                int2 = script12422(varclient_7218, varclient_7219, 65536);
                switch (varplayer_11091) {
                    case 7599: {
                        IF_SETTEXT(`${TOSTRING_LOCALISED((varclient_7218 / 10), 1)}/${TOSTRING_LOCALISED((varclient_7219 / 10), 1)} XP`, comp(1222, 20));
                        break;
                    }
                };
            };
            break;
        }
        case 60: {
            int2 = script12422(varbitplayer_54404, 6, 65536);
            IF_SETTEXT(`${inttostring(varbitplayer_54404, 10)}/${inttostring(6, 10)}`, comp(631, 21));
            break;
        }
        case 59: {
            int2 = script18039();
            int2 = script12422(int2, 100, 65536);
            break;
        }
        case 62: {
            int2 = script12422(varbitplayer_57145, 6, 65536);
            IF_SETTEXT(`${inttostring(varbitplayer_57145, 10)}/${inttostring(6, 10)}`, comp(1320, 12));
            break;
        }
        case 63: {
            int2 = script12422(script19768(), script19767(0), 65536);
            IF_SETTEXT(`${inttostring(script19768(), 10)}/${inttostring(script19767(0), 10)}`, comp(1320, 20));
            break;
        }
    };
    script13313(int0, -1, int2);
    return;
}