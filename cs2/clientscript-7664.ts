//
function script7664(int0: int, int1: unknown_int, int2: component, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    if ((script11370() == 0)) {
        printmessage("Chat is not available until your date of birth is recorded. Please enter your DOB above.");
        return;
    };
    switch (int0) {
        case 84: {
            if ((script13749() == false)) {
                script7666(varclient_2753, int2);
                script7665(varclient_2753);
            };
            return;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            script675();
            script7660();
            return;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if ((script13749() == true)) {
                return;
            };
            if ((((KEYHELD_SHIFT() == false) && (int0 != 102)) && (int0 != 103))) {
                return;
            };
            if ((varclient_2753 == 1)) {
                varclient_2749 = script7673(int0, varclient_2749, varclient_2758, int2);
                script7671(comp(1405, 12), comp(1405, 15), varclient_2758);
                return;
            };
            if ((varclient_2753 == 2)) {
                varclient_2750 = script7673(int0, varclient_2750, varclient_2759, int2);
                script7671(comp(1405, 26), comp(1405, 27), varclient_2759);
                return;
            };
            break;
        }
        default: {
            string0 = "";
            string0 = APPEND_CHAR(string0, int1);
            if ((((CHAR_ISPRINTABLE(int1) == 1) || (int0 == 85)) || (int0 == 101))) {
                if ((int1 == 60)) {
                    return;
                };
                if ((varclient_2753 == 1)) {
                    if ((((int0 != 85) && (int0 != 101)) && (STRING_LENGTH(REMOVETAGS(varclient_2758)) >= 500))) {
                        script7667(comp(1405, 14));
                        return;
                    };
                    [int4, int5] = IF_GETCHARPOSATINDEX(STRING_LENGTH(varclient_2758), int2);
                    if ((((int5 >= IF_GETHEIGHT(int2)) && (int0 != 85)) && (int0 != 101))) {
                        return;
                    };
                    [varclient_2758, varclient_2749] = script802(varclient_2749, varclient_2758, int3, int0, int1);
                    IF_SETTEXT(varclient_2758, int2);
                    if ((strcmp(IF_GETTEXT(int2), "Fox Mulder") == 0)) {
                        IF_SETTEXT("Keep searching for the Truth.", int2);
                    };
                    if ((strcmp(IF_GETTEXT(int2), "Zodalia") == 0)) {
                        IF_SETTEXT("By the axe of the emperor!", int2);
                    } else if ((strcmp(IF_GETTEXT(int2), "3.1415926535897932384626433832795028841971") == 0)) {
                        IF_SETTEXT("I'm hungry gimme that pie!", int2);
                    } else if ((strcmp(IF_GETTEXT(int2), "Fr33 st00f pl0x!") == 0)) {
                        IF_SETTEXT("Have you tried picking up ashes?", int2);
                    } else if ((strcmp(IF_GETTEXT(int2), "OMG bugs!") == 0)) {
                        varclient_2752 = 5000;
                    };
                    script7671(comp(1405, 12), comp(1405, 15), varclient_2758);
                } else if ((varclient_2753 == 2)) {
                    if ((((int0 != 85) && (int0 != 101)) && (STRING_LENGTH(REMOVETAGS(varclient_2759)) >= 500))) {
                        script7667(comp(1405, 29));
                        return;
                    };
                    [int4, int5] = IF_GETCHARPOSATINDEX(STRING_LENGTH(varclient_2759), int2);
                    if ((((int5 >= IF_GETHEIGHT(int2)) && (int0 != 85)) && (int0 != 101))) {
                        return;
                    };
                    [varclient_2759, varclient_2750] = script802(varclient_2750, varclient_2759, int3, int0, int1);
                    IF_SETTEXT(varclient_2759, int2);
                    script7671(comp(1405, 26), comp(1405, 27), varclient_2759);
                };
            };
            script7665(varclient_2753);
            script1733(92078094);
            script1733(92078109);
            IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2758))), 10), comp(1405, 14));
            IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2759))), 10), comp(1405, 29));
            return;
        }
    };
    return;
}