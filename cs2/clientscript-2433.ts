//
function script2433(int0: unknown_int, int1: unknown_int, int2: int): void {
    var int3 = script8599(int2);
    var int4 = script8602(int2);
    var int5 = 0;
    var int6 = enum_getvalue(0, 9, int4, int5);
    while (((int6 != comp(-1, 65535)) && (IF_GETHIDE(int6) == false))) {
        int5 = (int5 + 1);
        int6 = enum_getvalue(0, 9, int4, int5);
    };
    int5 = MAX(0, (int5 - 1));
    int6 = enum_getvalue(0, 9, int4, int5);
    var int7 = IF_GETNEXTSUBID(int6);
    var int8 = -1 as chatcat;
    var int9 = -1 as chatphrase;
    if ((IF_FIND(int6) == 1)) {
        int8 = cc_getparam(3647);
        int9 = cc_getparam(3648);
    };
    var int10 = enum_getvalue(0, 9, script8603(int2), int5);
    var int11 = 0;
    var int12 = 0;
    switch (int0) {
        case 104: {
            if ((int7 == 0)) {
                return;
            };
            if ((CC_FIND(int10, script8617(int2)) == 1)) {
                CC_SETHIDE(true);
            };
            if ((script8617(int2) <= 0)) {
                script8618(int2, (int7 - 1));
            } else {
                script8618(int2, (script8617(int2) - 1));
            };
            if (((CC_FIND(int10, script8617(int2)) == 1) && (CC_GETHIDE() == true))) {
                CC_SETHIDE(false);
                CC_SETCOLOUR(5733957);
            };
            return;
        }
        case 105: {
            if ((int7 == 0)) {
                return;
            };
            if ((CC_FIND(int10, script8617(int2)) == 1)) {
                CC_SETHIDE(true);
            };
            if ((script8617(int2) == (int7 - 1))) {
                script8618(int2, 0);
            } else {
                script8618(int2, (script8617(int2) + 1));
            };
            if (((CC_FIND(int10, script8617(int2)) == 1) && (CC_GETHIDE() == true))) {
                CC_SETHIDE(false);
                CC_SETCOLOUR(5733957);
            };
            return;
        }
        case 84: {
            if ((script8617(int2) < 0)) {
                if ((int5 == 0)) {
                    script1900(int6, enum_getvalue(0, 9, script8603(int2), int5), script8617(int2), (int5 + 1), int2);
                };
            } else if ((int8 != -1 as chatcat)) {
                CHATCAT_GETSUBCATCOUNT(int8);
                int11 = stack();
                stack(int8);
                int12 = CHATCAT_GETPHRASECOUNT();
                if ((script8617(int2) == (int11 + int12))) {
                    if ((((int5 == 0) && (script1036() != -1 as chatcat)) && (CC_FIND(int6, script8617(int2)) == 1))) {
                        script1061(int6, enum_getvalue(0, 9, script8603(int2), int5), script8617(int2), int3, (int5 + 1), script1036(), int2);
                    };
                } else if ((script8617(int2) < int11)) {
                    script1061(int6, enum_getvalue(0, 9, script8603(int2), int5), script8617(int2), int3, (int5 + 1), CHATCAT_GETSUBCAT(int8, script8617(int2)), int2);
                } else if ((script8617(int2) < (int11 + int12))) {
                    script1071(int3, CHATCAT_GETPHRASE(int8, (script8617(int2) - int11)), int5, int2);
                } else {
                    script1900(int6, enum_getvalue(0, 9, script8603(int2), int5), script8617(int2), (int5 + 1), int2);
                };
            } else if ((int9 != -1 as chatphrase)) {
                int11 = 0;
                int12 = CHATPHRASE_GETAUTORESPONSECOUNT(int9);
                script1071(int3, CHATPHRASE_GETAUTORESPONSE(int9, script8617(int2)), int5, int2);
            };
            return;
        }
        case 102: {
            script1050(script8613(int2), script8605(int2), int2);
            return;
        }
        case 13: {
            script1054(int2);
            return;
        }
        case 85: {
            if ((int5 > 0)) {
                script1068(int3, (int5 - 1), int2);
                return;
            };
            break;
        }
    };
    if ((CHAR_ISALPHANUMERIC(int1) == 0)) {
        return;
    };
    var int1 = CHAR_TOUPPERCASE(int1);
    var int13 = 0;
    var int14 = 0;
    var int15 = -1;
    if ((int8 != -1 as chatcat)) {
        CHATCAT_GETSUBCATCOUNT(int8);
        int11 = stack();
        stack(int8);
        int12 = CHATCAT_GETPHRASECOUNT();
        if ((((int5 == 0) && (strcmp("X", APPEND_CHAR("", int1)) == 0)) && (script1036() != -1 as chatcat))) {
            int13 = (int11 + int12);
            if ((CC_FIND(enum_getvalue(0, 9, script8602(int2), int5), int13) == 1)) {
                script1061(enum_getvalue(0, 9, script8602(int2), int5), enum_getvalue(0, 9, script8603(int2), int5), int13, int3, (int5 + 1), script1036(), int2);
            };
            return;
        };
        int13 = 0;
        while ((int14 < int11)) {
            int15 = CHAR_TOUPPERCASE(CHATCAT_GETSUBCATSHORTCUT(int8, int14));
            if ((int15 == int1)) {
                script1061(enum_getvalue(0, 9, script8602(int2), int5), enum_getvalue(0, 9, script8603(int2), int5), int13, int3, (int5 + 1), CHATCAT_GETSUBCAT(int8, int13), int2);
                return;
            };
            int13 = (int13 + 1);
            int14 = (int14 + 1);
        };
    } else {
        int11 = 0;
        int12 = CHATPHRASE_GETAUTORESPONSECOUNT(int9);
    };
    if ((CHAR_ISNUMERIC(int1) == 0)) {
        return;
    };
    var int16 = STRING_INDEXOF_CHAR("0123456789", int1, 0);
    if ((int16 == 0)) {
        int16 = 10;
    };
    if ((int16 > int12)) {
        return;
    };
    int13 = (int16 - 1);
    if ((int8 != -1 as chatcat)) {
        script1071(int3, CHATCAT_GETPHRASE(int8, int13), int5, int2);
    } else if ((int9 != -1 as chatphrase)) {
        script1071(int3, CHATPHRASE_GETAUTORESPONSE(int9, int13), int5, int2);
    };
    return;
}