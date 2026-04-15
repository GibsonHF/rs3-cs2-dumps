//
function script11403(int0: obj): obj {
    var int1 = 0;
    switch (int0) {
        case 4315: {
            return enum_getvalue(0, 33, 27 as cs2enum, varbitplayer_1223);
        }
        case 15435: {
            if ((varbitplayer_1224 == 1)) {
                return 15435 as obj;
            };
            if ((varbitplayer_1224 == 2)) {
                return 15434 as obj;
            };
            break;
        }
        case 19787: {
            if ((varbitplayer_13126 == 1)) {
                return 19789 as obj;
            };
            if ((varbitplayer_13126 == 2)) {
                return 19787 as obj;
            };
            return 19785 as obj;
        }
        case 19788: {
            if ((varbitplayer_13126 == 1)) {
                return 19790 as obj;
            };
            if ((varbitplayer_13126 == 2)) {
                return 19788 as obj;
            };
            return 19786 as obj;
        }
        case 6186: {
            if ((GENDER() == 1)) {
                return 6186 as obj;
            };
            return 6184 as obj;
        }
        case 4069: {
            if ((varbitplayer_1250 == 1)) {
                return enum_getvalue(0, 33, 29 as cs2enum, 4);
            };
            return enum_getvalue(0, 33, 29 as cs2enum, varbitplayer_1240);
        }
        case 31649: {
            if ((varbitplayer_13126 == 1)) {
                return 31651 as obj;
            };
            if ((varbitplayer_13126 == 2)) {
                return 31649 as obj;
            };
            return 31647 as obj;
        }
        case 31650: {
            if ((varbitplayer_13126 == 1)) {
                return 31648 as obj;
            };
            if ((varbitplayer_13126 == 2)) {
                return 31650 as obj;
            };
            return 31652 as obj;
        }
        case 32380: {
            if ((STAT_BASE(1 as stat) < 50)) {
                return 32380 as obj;
            };
            if (((STAT_BASE(1 as stat) < 70) || (MAP_MEMBERS() == 0))) {
                return 32381 as obj;
            };
            return 32382 as obj;
        }
        case 32389: {
            if ((STAT_BASE(1 as stat) < 50)) {
                return 32389 as obj;
            };
            if (((STAT_BASE(1 as stat) < 70) || (MAP_MEMBERS() == 0))) {
                return 32390 as obj;
            };
            return 32391 as obj;
        }
        case 32386: {
            if ((STAT_BASE(1 as stat) < 50)) {
                return 32386 as obj;
            };
            if (((STAT_BASE(1 as stat) < 70) || (MAP_MEMBERS() == 0))) {
                return 32387 as obj;
            };
            return 32388 as obj;
        }
        case 32383: {
            if ((STAT_BASE(1 as stat) < 50)) {
                return 32383 as obj;
            };
            if (((STAT_BASE(1 as stat) < 70) || (MAP_MEMBERS() == 0))) {
                return 32384 as obj;
            };
            return 32385 as obj;
        }
        case 20769:
        case 20771: {
            int1 = 1;
            if ((varbitplayer_1453 == 1)) {
                var int0 = 20769 as obj;
            } else if ((varbitplayer_1453 == 2)) {
                int0 = 20771 as obj;
            };
            break;
        }
    };
    switch (OC_CATEGORY(int0)) {
        case 2262: {
            return int0;
        }
        case 2264: {
            return int0;
        }
        case 2263: {
            return int0;
        }
        case 2265: {
            return int0;
        }
    };
    var int2 = -1 as obj;
    if ((script10622() > 1)) {
        int2 = enum_getvalue(33, 33, 378 as cs2enum, int0);
        if ((int2 != -1 as obj)) {
            if ((TESTBIT(varplayer_5146, enum_getvalue(33, 0, 9809 as cs2enum, int2)) == 1)) {
                return enum_getvalue(33, 33, 9808 as cs2enum, int2);
            };
            return int2;
        };
    };
    if ((enum_getvalue(33, 33, 9808 as cs2enum, int0) != -1 as obj)) {
        if ((TESTBIT(varplayer_5146, enum_getvalue(33, 0, 9809 as cs2enum, int0)) == 1)) {
            return enum_getvalue(33, 33, 9808 as cs2enum, int0);
        };
        if ((TESTBIT(varplayer_8051, enum_getvalue(33, 0, 9809 as cs2enum, int0)) == 1)) {
            return enum_getvalue(33, 33, 9808 as cs2enum, int0);
        };
    };
    if (((GENDER() == 1) && (enum_getvalue(33, 33, 83 as cs2enum, int0) != -1 as obj))) {
        return enum_getvalue(33, 33, 83 as cs2enum, int0);
    };
    if ((int1 == 1)) {
        return int0;
    };
    return -1 as obj;
}