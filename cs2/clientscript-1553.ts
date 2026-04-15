//
function script1553(int0: int, int1: int, string0: string): int {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    switch (int0) {
        case 96: {
            return MAX((int1 - 1), 0);
        }
        case 97: {
            return MIN((int1 + 1), STRING_LENGTH(string0));
        }
        case 98: {
            int2 = (int1 - 1);
            if (((int1 > 0) && (STRING_INDEXOF_STRING(string0, " ", int2) == int2))) {
                return int2;
            };
            int2 = -1;
            int3 = -1;
            while ((int4 != 1)) {
                int2 = STRING_INDEXOF_STRING(string0, " ", (int2 + 1));
                if (((int2 == -1) || (int2 >= (int1 - 1)))) {
                    int4 = 1;
                } else {
                    int3 = int2;
                };
            };
            return MIN((int3 + 1), STRING_LENGTH(string0));
        }
        case 99: {
            if ((STRING_INDEXOF_STRING(string0, " ", int1) == int1)) {
                return MIN((int1 + 1), STRING_LENGTH(string0));
            };
            int2 = STRING_LENGTH(string0);
            if ((int1 < int2)) {
                int3 = STRING_INDEXOF_STRING(string0, " ", (int1 + 1));
                if ((int3 != -1)) {
                    return int3;
                };
                return int2;
            };
            break;
        }
        case 102: {
            return 0;
        }
    };
    return STRING_LENGTH(string0);
}