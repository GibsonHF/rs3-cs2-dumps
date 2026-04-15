//
function script9029(int0: struct, int1: quest, int2: achievement): string {
    if ((((int0 == -1 as struct) && (int1 == -1 as quest)) && (int2 == -1 as achievement))) {
        return "";
    };
    var string0 = "";
    var int3 = script13749();
    var int4 = 0;
    if ((int1 != -1 as quest)) {
        return script2108(int1);
    };
    if ((int2 != -1 as achievement)) {
        return "";
    };
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 4253) != -1 as struct)) {
            var int0 = struct_getparam(int0, 4253);
        };
        if ((struct_getparam(int0, 1345) > 0)) {
            var int1 = enum_getvalue(0, 3, 2252 as cs2enum, struct_getparam(int0, 1345));
            if ((int1 != -1 as quest)) {
                return script2108(int1);
            };
        } else {
            if (((int0 == 11585 as struct) && (varplayer_183 == 0))) {
                int4 = script7155();
                if ((varbitplayer_9072 == 0)) {
                    if ((strcmp(string0, "") != 0)) {
                        string0 = strconcat(string0, "<br>");
                    };
                    string0 = strconcat(string0, `Talk to ${script10500()} in Burthorpe for your first assignment.`);
                } else if ((int4 != varbitplayer_9072)) {
                    if ((strcmp(string0, "") != 0)) {
                        string0 = strconcat(string0, "<br>");
                    };
                    string0 = strconcat(string0, `Task from ${script10499(varbitplayer_9072)} complete. Why not get a new assignment from ${script10499(int4)}?`);
                } else {
                    if ((strcmp(string0, "") != 0)) {
                        string0 = strconcat(string0, "<br>");
                    };
                    string0 = strconcat(string0, `Task complete. Return to ${script10499(varbitplayer_9072)} for a new assignment.`);
                };
            };
            if ((((strcmp(struct_getparam(int0, 1274), "") != 0) || (strcmp(struct_getparam(int0, 8082), "") != 0)) && ((strcmp(struct_getparam(int0, 1275), "") != 0) || (strcmp(struct_getparam(int0, 8083), "") != 0)))) {
                if ((strcmp(string0, "") != 0)) {
                    string0 = strconcat(string0, "<br>");
                };
                if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<img=7> ${struct_getparam(int0, 8082)}`);
                } else if ((strcmp(struct_getparam(int0, 1274), "") != 0)) {
                    string0 = strconcat(string0, `<img=7> ${struct_getparam(int0, 1274)}`);
                };
                if (((strcmp(struct_getparam(int0, 8083), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8083)}`);
                } else if ((strcmp(struct_getparam(int0, 1275), "") != 0)) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1275)}`);
                };
                if (((strcmp(struct_getparam(int0, 8084), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8084)}`);
                } else if ((strcmp(struct_getparam(int0, 1276), "") != 0)) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1276)}`);
                };
                if (((strcmp(struct_getparam(int0, 8085), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8085)}`);
                } else if ((strcmp(struct_getparam(int0, 1277), "") != 0)) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1277)}`);
                };
                if (((strcmp(struct_getparam(int0, 8086), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8086)}`);
                } else if ((strcmp(struct_getparam(int0, 1278), "") != 0)) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1278)}`);
                };
                if (((strcmp(struct_getparam(int0, 8087), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8087)}`);
                } else if ((strcmp(struct_getparam(int0, 1279), "") != 0)) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1279)}`);
                };
                if (((strcmp(struct_getparam(int0, 8088), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8088)}`);
                } else if ((strcmp(struct_getparam(int0, 1280), "") != 0)) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1280)}`);
                };
                if (((strcmp(struct_getparam(int0, 8089), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 8089)}`);
                } else if ((strcmp(struct_getparam(int0, 1281), "") != 0)) {
                    string0 = strconcat(string0, `<br><img=7> ${struct_getparam(int0, 1281)}`);
                };
            } else if (((strcmp(struct_getparam(int0, 1274), "") != 0) || (strcmp(struct_getparam(int0, 8082), "") != 0))) {
                if ((strcmp(string0, "") != 0)) {
                    string0 = strconcat(string0, "<br>");
                };
                if (((strcmp(struct_getparam(int0, 8082), "") != 0) && (int3 == true))) {
                    string0 = strconcat(string0, struct_getparam(int0, 8082));
                } else if ((strcmp(struct_getparam(int0, 1274), "") != 0)) {
                    string0 = strconcat(string0, struct_getparam(int0, 1274));
                };
            };
            if (((strcmp(struct_getparam(int0, 8081), "") != 0) && (int3 == true))) {
                if ((strcmp(string0, "") != 0)) {
                    string0 = strconcat(string0, "<br><br>");
                };
                string0 = strconcat(string0, `Tip: ${struct_getparam(int0, 8081)}`);
            } else if ((strcmp(struct_getparam(int0, 2225), "") != 0)) {
                if ((strcmp(string0, "") != 0)) {
                    string0 = strconcat(string0, "<br><br>");
                };
                string0 = strconcat(string0, `Tip: ${struct_getparam(int0, 2225)}`);
            };
        };
    };
    return string0;
}