//
function script10881(int0: struct): int {
    var int1 = struct_getparam(int0, 8684);
    if ((int1 != -1 as quest)) {
        return script42(script2156(int1));
    };
    var int2 = struct_getparam(int0, 823);
    if ((int2 != -1 as achievement)) {
        if ((ACHIEVEMENT_REQSTATE(int2) == -2)) {
            return 1;
        };
        return 0;
    };
    var int3 = struct_getparam(int0, 4744);
    if ((int3 < 0)) {
        return 1;
    };
    var int4 = MODULO(int3, 32);
    var int5 = (int3 / 32);
    switch (int5) {
        case 0: {
            return TESTBIT(varplayer_5050, int4);
        }
        case 1: {
            return TESTBIT(varplayer_5051, int4);
        }
        case 2: {
            return TESTBIT(varplayer_5052, int4);
        }
        case 3: {
            return TESTBIT(varplayer_5053, int4);
        }
        case 4: {
            return TESTBIT(varplayer_5054, int4);
        }
        case 5: {
            return TESTBIT(varplayer_6537, int4);
        }
        case 6: {
            return TESTBIT(varplayer_6538, int4);
        }
        case 7: {
            return TESTBIT(varplayer_6762, int4);
        }
        case 8: {
            return TESTBIT(varplayer_6763, int4);
        }
        case 9: {
            return TESTBIT(varplayer_7105, int4);
        }
        case 10: {
            return TESTBIT(varplayer_7106, int4);
        }
        case 11: {
            return TESTBIT(varplayer_7645, int4);
        }
        case 12: {
            return TESTBIT(varplayer_7646, int4);
        }
        case 13: {
            return TESTBIT(varplayer_7849, int4);
        }
        case 14: {
            return TESTBIT(varplayer_7850, int4);
        }
        case 15: {
            return TESTBIT(varplayer_7851, int4);
        }
        case 16: {
            return TESTBIT(varplayer_7852, int4);
        }
        case 17: {
            return TESTBIT(varplayer_8170, int4);
        }
        case 18: {
            return TESTBIT(varplayer_8228, int4);
        }
        case 19: {
            return TESTBIT(varplayer_8353, int4);
        }
        case 20: {
            return TESTBIT(varplayer_8550, int4);
        }
        case 21: {
            return TESTBIT(varplayer_8692, int4);
        }
        case 22: {
            return TESTBIT(varplayer_9014, int4);
        }
        case 23: {
            return TESTBIT(varplayer_9111, int4);
        }
        case 24: {
            return TESTBIT(varplayer_9112, int4);
        }
        case 25: {
            return TESTBIT(varplayer_9202, int4);
        }
        case 26: {
            return TESTBIT(varplayer_9203, int4);
        }
        case 27: {
            return TESTBIT(varplayer_9461, int4);
        }
        case 28: {
            return TESTBIT(varplayer_9549, int4);
        }
        case 29: {
            return TESTBIT(varplayer_9550, int4);
        }
        case 30: {
            return TESTBIT(varplayer_9718, int4);
        }
        case 31: {
            return TESTBIT(varplayer_9743, int4);
        }
        case 32: {
            return TESTBIT(varplayer_9780, int4);
        }
        case 33: {
            return TESTBIT(varplayer_9846, int4);
        }
        case 34: {
            return TESTBIT(varplayer_9872, int4);
        }
        case 35: {
            return TESTBIT(varplayer_9873, int4);
        }
        case 36: {
            return TESTBIT(varplayer_10162, int4);
        }
        case 37: {
            return TESTBIT(varplayer_10301, int4);
        }
        case 38: {
            return TESTBIT(varplayer_10312, int4);
        }
        case 39: {
            return TESTBIT(varplayer_10379, int4);
        }
        case 40: {
            return TESTBIT(varplayer_10398, int4);
        }
        case 41: {
            return TESTBIT(varplayer_10399, int4);
        }
        case 42: {
            return TESTBIT(varplayer_10622, int4);
        }
        case 43: {
            return TESTBIT(varplayer_10639, int4);
        }
        case 44: {
            return TESTBIT(varplayer_10640, int4);
        }
        case 45: {
            return TESTBIT(varplayer_10641, int4);
        }
        case 46: {
            return TESTBIT(varplayer_10779, int4);
        }
        case 47: {
            return TESTBIT(varplayer_10780, int4);
        }
        case 48: {
            return TESTBIT(varplayer_11327, int4);
        }
        case 49: {
            return TESTBIT(varplayer_11453, int4);
        }
        case 50: {
            return TESTBIT(varplayer_11454, int4);
        }
        case 51: {
            return TESTBIT(varplayer_11455, int4);
        }
        case 52: {
            return TESTBIT(varplayer_11456, int4);
        }
        case 53: {
            return TESTBIT(varplayer_11471, int4);
        }
        case 54: {
            return TESTBIT(varplayer_11580, int4);
        }
        case 55: {
            return TESTBIT(varplayer_11586, int4);
        }
        case 56: {
            return TESTBIT(varplayer_11587, int4);
        }
        case 57: {
            return TESTBIT(varplayer_11696, int4);
        }
        case 58: {
            return TESTBIT(varplayer_11697, int4);
        }
        case 59: {
            return TESTBIT(varplayer_11698, int4);
        }
        case 60: {
            return TESTBIT(varplayer_11699, int4);
        }
        case 61: {
            return TESTBIT(varplayer_11905, int4);
        }
        case 62: {
            return TESTBIT(varplayer_11976, int4);
        }
        case 63: {
            return TESTBIT(varplayer_11988, int4);
        }
        case 64: {
            return TESTBIT(varplayer_12029, int4);
        }
        case 65: {
            return TESTBIT(varplayer_12085, int4);
        }
        case 66: {
            return TESTBIT(varplayer_12177, int4);
        }
        case 67: {
            return TESTBIT(varplayer_12178, int4);
        }
        case 68: {
            return TESTBIT(varplayer_12209, int4);
        }
        case 69: {
            return TESTBIT(varplayer_12228, int4);
        }
        case 70: {
            return TESTBIT(varplayer_12429, int4);
        }
        case 71: {
            return TESTBIT(varplayer_12436, int4);
        }
        case 72: {
            return TESTBIT(varplayer_12527, int4);
        }
        case 73: {
            return TESTBIT(varplayer_12528, int4);
        }
        case 74: {
            return TESTBIT(varplayer_12796, int4);
        }
    };
    script12478(`Unable to get unlocked parent struct ${struct_getparam(int0, 2533)} with ID ${inttostring(int3, 10)} | Var no. ${inttostring(int5, 10)}`);
    return 1;
}