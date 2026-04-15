//
function script7170(int0: int, int1: unknown_int, int2: int, int3: unknown_int, int4: int, string0: string): [string, int] {
    var int5 = STRING_LENGTH(string0);
    if ((int0 <= -1)) {
        var int0 = int5;
    } else {
        int0 = MIN(int0, int5);
    };
    var string1 = "";
    if ((int0 > 0)) {
        string1 = SUBSTRING(string0, 0, int0);
    };
    var string2 = "";
    if ((int0 < int5)) {
        string2 = SUBSTRING(string0, int0, int5);
    };
    var int6 = 0;
    switch (int2) {
        case 85: {
            int6 = STRING_LENGTH(string1);
            if ((int6 > 1)) {
                if (((varclient_2751 == true) && (STRING_INDEXOF_CHAR(string1, 62, (STRING_LENGTH(string1) - 1)) == (STRING_LENGTH(string1) - 1)))) {
                    if ((STRING_INDEXOF_CHAR(string1, 60, (STRING_LENGTH(string1) - 4)) == (STRING_LENGTH(string1) - 4))) {
                        string1 = SUBSTRING(string1, 0, STRING_INDEXOF_CHAR(string1, 60, (STRING_LENGTH(string1) - 4)));
                        int0 = (int0 - 3);
                    };
                } else {
                    string1 = SUBSTRING(string1, 0, (int6 - 1));
                };
            } else {
                string1 = "";
            };
            var string0 = strconcat(string1, string2);
            int0 = MAX((int0 - 1), 0);
            break;
        }
        case 101: {
            int6 = STRING_LENGTH(string2);
            if ((int6 > 1)) {
                if ((((varclient_2751 == true) && (STRING_INDEXOF_CHAR(string2, 60, 0) == 0)) && (STRING_INDEXOF_CHAR(string2, 62, 0) == 3))) {
                    string2 = SUBSTRING(string2, 4, int6);
                } else {
                    string2 = SUBSTRING(string2, 1, int6);
                };
            } else {
                string2 = "";
            };
            string0 = strconcat(string1, string2);
            break;
        }
        default: {
            if ((CHAR_ISPRINTABLE(int3) == 1)) {
                switch (int1) {
                    case 0: {
                        if ((int4 <= 0)) {
                            var int4 = 80;
                            if (((script8550(varclient_2231) == 100) || ((IF_GETTOP() == 906) && (varclient_1650 == true)))) {
                                int4 = 255;
                            } else if ((varclient_2751 == true)) {
                                int4 = 2000;
                            };
                        };
                        if ((int5 < int4)) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 1: {
                        if ((int4 <= 0)) {
                            int4 = 10;
                        };
                        if (((CHAR_ISNUMERIC(int3) == 1) && (int5 < int4))) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 2: {
                        if ((int4 <= 0)) {
                            int4 = 12;
                        };
                        if ((int5 < int4)) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 3: {
                        if ((int4 <= 0)) {
                            int4 = 320;
                        };
                        if ((int5 < int4)) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 4: {
                        if ((int4 <= 0)) {
                            int4 = 50;
                        };
                        if ((((CHAR_ISALPHANUMERIC(int3) == 1) || (STRING_INDEXOF_CHAR(" '&,.!-àÀáÁâÂãÃäÄåÅçÇèÈéÉêÊëËìÌíÍîÎïÏñÑòÒóÓôÔõÕöÖùÙúÚûÛüÜýÝÿ", int3, 0) != -1)) && (int5 < int4))) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 5: {
                        if ((int4 <= 0)) {
                            int4 = 50;
                        };
                        if ((int5 < int4)) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 6: {
                        if ((int4 <= 0)) {
                            int4 = 10;
                        };
                        if ((int5 < int4)) {
                            if ((CHAR_ISNUMERIC(int3) == 1)) {
                            } else if (((((((STRING_INDEXOF_CHAR("KkMm", int3, 0) != -1) && (int5 > 0)) && (STRING_INDEXOF_STRING(string0, "K", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "k", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "M", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "m", 0) == -1))) {
                                string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                                int0 = (int0 + 1);
                            };
                        };
                        break;
                    }
                    case 10: {
                        if ((int4 <= 0)) {
                            int4 = 19;
                        };
                        if ((int5 < int4)) {
                            if ((CHAR_ISNUMERIC(int3) == 1)) {
                            } else if (((((((((((((STRING_INDEXOF_CHAR("KkMmBbTtQq", int3, 0) != -1) && (int5 > 0)) && (STRING_INDEXOF_STRING(string0, "K", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "k", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "M", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "m", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "B", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "b", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "T", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "t", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "Q", 0) == -1)) && (STRING_INDEXOF_STRING(string0, "q", 0) == -1))) {
                                string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                                int0 = (int0 + 1);
                            };
                        };
                        break;
                    }
                    case 7: {
                        if ((int4 <= 0)) {
                            int4 = 30;
                        };
                        if ((int5 < int4)) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 8: {
                        if ((int5 < int4)) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                    case 9: {
                        if ((int4 <= 0)) {
                            int4 = 12;
                        };
                        if ((((CHAR_ISALPHANUMERIC(int3) == 1) || (STRING_INDEXOF_CHAR(" _-àÀáÁâÂãÃäÄåÅçÇèÈéÉêÊëËìÌíÍîÎïÏñÑòÒóÓôÔõÕöÖùÙúÚûÛüÜýÝÿ", int3, 0) != -1)) && (int5 < int4))) {
                            string0 = strconcat(APPEND_CHAR(string1, int3), string2);
                            int0 = (int0 + 1);
                        };
                        break;
                    }
                };
            };
            break;
        }
    };
    return [string0, int0];
}