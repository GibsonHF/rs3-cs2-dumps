//
function script7673(int0: int, int1: int, int2: component, string0: string): int {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 12;
    var int7 = -1;
    if ((int2 == comp(1405, 12))) {
        int7 = 92078095;
    } else if ((int2 == comp(1405, 26))) {
        int7 = 92078107;
    };
    int3 = STRING_INDEXOF_CHAR(string0, 62, (int1 - 1));
    switch (int0) {
        case 96: {
            varclient_2757 = -1;
            if (((STRING_INDEXOF_CHAR(string0, 62, (int1 - 1)) == (int1 - 1)) && (STRING_INDEXOF_CHAR(string0, 60, (int1 - 4)) == (int1 - 4)))) {
                return (int1 - 4);
            };
            return MAX((int1 - 1), 0);
        }
        case 97: {
            varclient_2757 = -1;
            if (((STRING_INDEXOF_CHAR(string0, 60, int1) == int1) && (STRING_INDEXOF_CHAR(string0, 62, (int1 + 3)) == (int1 + 3)))) {
                return (int1 + 4);
            };
            return MIN((int1 + 1), STRING_LENGTH(string0));
        }
        case 98: {
            if (((varclient_2757 != -1) && (varclient_2757 < int1))) {
                int3 = varclient_2757;
                varclient_2757 = int1;
                return int3;
            };
            [int3, int4] = IF_GETCHARPOSATINDEX(int1, int2);
            int4 = (int4 - (int6 * 2));
            if ((int4 >= 0)) {
                int5 = IF_GETCHARINDEXATPOS(int3, int4, int2);
                return int5;
            };
            return 0;
        }
        case 99: {
            if (((varclient_2757 != -1) && (varclient_2757 > int1))) {
                int3 = varclient_2757;
                varclient_2757 = int1;
                return int3;
            };
            [int3, int4] = IF_GETCHARPOSATINDEX(int1, int2);
            if (((int4 + int6) <= (PARAHEIGHT(string0, IF_GETWIDTH(int2), 26 as fontmetrics) * 12))) {
                int5 = IF_GETCHARINDEXATPOS(int3, int4, int2);
                return int5;
            };
            return STRING_LENGTH(string0);
        }
        case 102: {
            return 0;
        }
    };
    return STRING_LENGTH(string0);
}