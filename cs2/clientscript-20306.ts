//
function script20306(int0: number, int1: number, string0: string): number {
    var int2 = varbitclient_58401;
    if ((int0 != 96927764)) {
        int2 = 1;
    } else if (((STRING_LENGTH(varclient_8333) > 0) && (STRING_INDEXOF_STRING(LOWERCASE(string0), varclient_8333, 0) == -1))) {
        return 0;
    };
    switch (int2) {
        case 0: {
            return 1;
        }
        case 1: {
            if ((script20300(int1) == 0)) {
                return 0;
            };
            if ((ACHIEVEMENT_REQSTATE(int1) != -1)) {
                return 1;
            };
            return 0;
        }
        case 2: {
            if ((script20300(int1) == 1)) {
                return 0;
            };
            if ((ACHIEVEMENT_REQSTATE(int1) == -1)) {
                return 1;
            };
            return 0;
        }
    };
    return 1;
}