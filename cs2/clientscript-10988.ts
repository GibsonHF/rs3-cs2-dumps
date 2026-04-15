//
function script10988(int0: achievement): string {
    var string0 = "";
    var string1 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 1;
    var int5 = 0;
    if ((ACHIEVEMENT_ALLPREREQMET(int0) == 0)) {
        int4 = unk11037(int0);
        while ((int3 < int4)) {
            unk11153(int0, int3);
            int1 = stack();
            stack(int0);
            stack(int3);
            int5 = unk11152();
            int2 = 0;
            while ((int2 < int1)) {
                unk11151(int0, int3, int2);
                string0 = stack();
                if ((strcmp(string0, "") != 0)) {
                    if (((int5 == 1) || (unk11150(int0, int3, int2) == 1))) {
                        string1 = strconcat(string1, `<str>${string0}</str>`);
                    } else {
                        string1 = strconcat(string1, string0);
                    };
                    string1 = strconcat(string1, "<br>");
                };
                int2 = (int2 + 1);
            };
            int2 = 0;
            int1 = unk11149(int0, int3);
            while ((int2 < int1)) {
                unk11148(int0, int3, int2);
                string0 = stack();
                if ((strcmp(string0, "") != 0)) {
                    if (((int5 == 1) || (unk11147(int0, int3, int2) == 1))) {
                        string1 = strconcat(string1, `<str>${string0}</str>`);
                    } else {
                        string1 = strconcat(string1, string0);
                    };
                    string1 = strconcat(string1, "<br>");
                };
                int2 = (int2 + 1);
            };
            int2 = 0;
            int1 = unk11146(int0, int3);
            while ((int2 < int1)) {
                unk11145(int0, int3, int2);
                string0 = stack();
                if ((strcmp(string0, "") != 0)) {
                    if (((int5 == 1) || (unk11144(int0, int3, int2) == 1))) {
                        string1 = strconcat(string1, `<str>${string0}</str>`);
                    } else {
                        string1 = strconcat(string1, string0);
                    };
                    string1 = strconcat(string1, "<br>");
                };
                int2 = (int2 + 1);
            };
            int2 = 0;
            int1 = unk11143(int0, int3);
            while ((int2 < int1)) {
                unk11142(int0, int3, int2);
                string0 = stack();
                if ((strcmp(string0, "") != 0)) {
                    if (((int5 == 1) || (unk11141(int0, int3, int2) == 1))) {
                        string1 = strconcat(string1, `<str>${string0}</str>`);
                    } else {
                        string1 = strconcat(string1, string0);
                    };
                    string1 = strconcat(string1, "<br>");
                };
                int2 = (int2 + 1);
            };
            int2 = 0;
            int1 = unk11140(int0, int3);
            while ((int2 < int1)) {
                unk11139(int0, int3, int2);
                string0 = stack();
                if ((strcmp(string0, "") != 0)) {
                    if (((int5 == 1) || (unk11138(int0, int3, int2) == 1))) {
                        string1 = strconcat(string1, `<str>${string0}</str>`);
                    } else {
                        string1 = strconcat(string1, string0);
                    };
                    string1 = strconcat(string1, "<br>");
                };
                int2 = (int2 + 1);
            };
            int2 = 0;
            int1 = unk11069(int0, int3);
            while ((int2 < int1)) {
                string0 = `Quest: ${QUEST_GETNAME(unk11073(int0, int3, int2))}`;
                if ((strcmp(string0, "") != 0)) {
                    if (((int5 == 1) || (unk11137(int0, int3, int2) == 1))) {
                        string1 = strconcat(string1, `<str>${string0}</str>`);
                    } else {
                        string1 = strconcat(string1, string0);
                    };
                    string1 = strconcat(string1, "<br>");
                };
                int2 = (int2 + 1);
            };
            int2 = 0;
            int1 = unk11036(int0, int3);
            while ((int2 < int1)) {
                if ((ACHIEVEMENT_CATEGORY(int0) == 5619 as category)) {
                    string0 = script15321(unk11035(int0, int3, int2));
                } else {
                    string0 = ACHIEVEMENT_GETNAME(unk11035(int0, int3, int2));
                };
                if ((strcmp(string0, "") != 0)) {
                    string1 = strconcat(string1, "Achievement: ");
                    if (((int5 == 1) || (unk11034(int0, int3, int2) == 1))) {
                        string1 = strconcat(string1, `<str>${string0}</str>`);
                    } else {
                        string1 = strconcat(string1, string0);
                    };
                    string1 = strconcat(string1, "<br>");
                };
                int2 = (int2 + 1);
            };
            int3 = (int3 + 1);
        };
        if ((strcmp(string1, "") != 0)) {
            string1 = SUBSTRING(string1, 0, (STRING_LENGTH(string1) - STRING_LENGTH("<br>")));
            string1 = strconcat("Requirements to Unlock:<br>", string1);
        };
    } else if ((((int0 == 1837 as achievement) || (int0 == 1835 as achievement)) || (int0 == 1836 as achievement))) {
        int1 = unk11074(int0);
        while ((int2 < int1)) {
            if ((unk11089(int0, int2) == false)) {
                string1 = strconcat(string1, "Quest Start:<br>");
                string1 = strconcat(string1, `${quest_getparam(unk10999(int0, int2), 7814)}<br><br>`);
                string1 = strconcat(string1, "Description:<br>");
                string1 = strconcat(string1, quest_getparam(unk10999(int0, int2), 5968));
            };
            if ((((int2 + 1) < int1) && (strcmp(string1, "") != 0))) {
                string1 = strconcat(string1, "<br>");
            };
            int2 = (int2 + 1);
        };
        int1 = ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0);
        while ((int2 < int1)) {
            if ((unk11088(int0, int2) == false)) {
                string1 = strconcat(string1, "Achievement: ");
                string1 = strconcat(string1, `${ACHIEVEMENT_GETNAME(unk11032(int0, int2))}<br>`);
            };
            if ((((int2 + 1) < int1) && (strcmp(string1, "") != 0))) {
                string1 = strconcat(string1, "<br>");
            };
            int2 = (int2 + 1);
        };
        if ((strcmp(string1, "") != 0)) {
            string1 = SUBSTRING(string1, 0, (STRING_LENGTH(string1) - STRING_LENGTH("<br>")));
            string1 = strconcat("Requirements to Complete:<br>", string1);
        };
    };
    return string1;
}