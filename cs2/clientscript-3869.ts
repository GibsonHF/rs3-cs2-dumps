//
function script3869(): void {
    IF_SETTEXT(`Closest lodestone: <col=FFFFFF>${struct_getparam(enum_getvalue(0, 73, 13200 as cs2enum, struct_getparam(varclient_4485, 1378)), 2794)}</col>`, comp(753, 121));
    IF_SETTEXT(struct_getparam(varclient_4485, 1348), comp(753, 11));
    IF_SETTEXT(`Recommended Combat Level: <col=FFFFFF>${inttostring(struct_getparam(varclient_4485, 1353), 10)}</col>`, comp(753, 16));
    IF_SETTEXT(`Recommended Group Size: <col=FFFFFF>${inttostring(struct_getparam(varclient_4485, 2237), 10)}</col>`, comp(753, 18));
    script11074();
    CC_DELETEALL(comp(753, 34));
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    var int6 = 1;
    var int7 = -1 as obj;
    var int8 = -1 as graphic;
    var int9 = -1 as struct;
    if (((struct_getparam(varclient_4485, 6415) != 1) && (MAP_MEMBERS() == 0))) {
        [int0, int1] = script3870(0, -1 as obj, 23835 as graphic, "To fight this boss, you must log into a members' world.", int0, int1);
    };
    while ((int2 < 12)) {
        [int6, int7, int8, int9] = [1, -1 as obj, -1 as graphic, -1 as struct];
        switch (int2) {
            case 0: {
                [int3, int4] = [struct_getparam(varclient_4485, 1294), struct_getparam(varclient_4485, 1295)];
                break;
            }
            case 1: {
                [int3, int4] = [struct_getparam(varclient_4485, 1296), struct_getparam(varclient_4485, 1297)];
                break;
            }
            case 2: {
                [int3, int4] = [struct_getparam(varclient_4485, 1298), struct_getparam(varclient_4485, 1299)];
                break;
            }
            case 3: {
                [int3, int4] = [struct_getparam(varclient_4485, 1300), struct_getparam(varclient_4485, 1301)];
                break;
            }
            case 4: {
                [int3, int4] = [struct_getparam(varclient_4485, 1302), struct_getparam(varclient_4485, 1303)];
                break;
            }
            case 5: {
                [int3, int4] = [struct_getparam(varclient_4485, 1304), struct_getparam(varclient_4485, 1305)];
                break;
            }
            case 6: {
                [int3, int4] = [struct_getparam(varclient_4485, 1306), struct_getparam(varclient_4485, 1307)];
                break;
            }
            case 7: {
                [int3, int4] = [struct_getparam(varclient_4485, 1308), struct_getparam(varclient_4485, 1309)];
                break;
            }
            case 8: {
                [int3, int4] = [struct_getparam(varclient_4485, 1310), struct_getparam(varclient_4485, 1311)];
                break;
            }
            case 9: {
                [int3, int4] = [struct_getparam(varclient_4485, 1312), struct_getparam(varclient_4485, 1313)];
                break;
            }
            case 10: {
                [int3, int4] = [struct_getparam(varclient_4485, 2227), struct_getparam(varclient_4485, 2228)];
                break;
            }
            case 11: {
                [int3, int4] = [struct_getparam(varclient_4485, 2229), struct_getparam(varclient_4485, 2230)];
                break;
            }
        };
        if (((int3 > 0) && (int3 < 60))) {
            stack(enum_getvalue(0, 23, 8548 as cs2enum, int3));
            stack(`You must have level ${inttostring(int4, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int3)}.`);
            [int8, string0] = stack();
            if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int3)) < int4)) {
                int6 = 0;
            };
        } else if ((int3 == 60)) {
            int9 = script5795(int4);
            if ((int9 != -1 as struct)) {
                if ((struct_getparam(int9, 1345) > 0)) {
                    int8 = script2107(enum_getvalue(0, 3, 2252 as cs2enum, struct_getparam(int9, 1345)));
                } else {
                    int8 = struct_getparam(int9, 1271);
                };
                string0 = `You must complete the task: '${struct_getparam(int9, 1266)}'.`;
                if ((script3227(struct_getparam(int9, 1268)) != 2)) {
                    int6 = 0;
                };
                int9 = -1 as struct;
            };
        } else if ((int3 == 61)) {
            int8 = script2107(enum_getvalue(0, 3, 2252 as cs2enum, int4));
            string0 = `You must complete the quest: '${script2103(enum_getvalue(0, 3, 2252 as cs2enum, int4))}'`;
            string0 = strconcat(string0, ".");
            if ((script1524(int4) == 0)) {
                int6 = 0;
            };
        } else if ((int3 == 66)) {
            int8 = 30108 as graphic;
            string0 = "You must complete the elite dungeon: ";
            switch (int4) {
                case 49: {
                    string0 = strconcat(string0, "The Temple of Aminishi");
                    break;
                }
                case 50: {
                    string0 = strconcat(string0, "The Dragonkin Laboratory");
                    break;
                }
                case 51: {
                    string0 = strconcat(string0, "The Shadow Reef");
                    break;
                }
                case 57: {
                    string0 = strconcat(string0, "The Zamorakian Undercity");
                    break;
                }
            };
        } else if ((int3 == 62)) {
            [int6, int7, int8, string0] = script16084(int4);
        };
        if ((int3 == 0)) {
            int2 = 12;
        } else {
            int2 = (int2 + 1);
        };
        if (((int8 != -1 as graphic) || (int7 != -1 as obj))) {
            [int0, int1] = script3870(int6, int7, int8, string0, int0, int1);
        };
    };
    CC_DELETEALL(comp(753, 35));
    IF_SETSCROLLPOS(0, 0, comp(753, 34));
    if (((int1 + 36) > IF_GETHEIGHT(comp(753, 34)))) {
        IF_SETSCROLLSIZE(0, (int1 + 36), comp(753, 34));
        script7791(comp(753, 35), comp(753, 34));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(753, 34));
    };
    if ((IF_GETNEXTSUBID(comp(753, 34)) == 0)) {
        CC_CREATE(comp(753, 34), 4, IF_GETNEXTSUBID(comp(753, 34)));
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETTEXT("There are no special requirements.");
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTALIGN(0, 1, 0);
    };
    if ((struct_getparam(varclient_4485, 3038) != -1 as graphic)) {
        stack(struct_getparam(varclient_4485, 3038));
        stack(49348647);
        IF_SETGRAPHIC();
    } else {
        stack(-1);
        stack(49348647);
        IF_SETGRAPHIC();
    };
    IF_SETNPCMODEL(struct_getparam(varclient_4485, 1347), comp(753, 40));
    IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4484), comp(753, 40));
    IF_SETMODELANGLE(0, struct_getparam(varclient_4485, 3041), 0, 0, 0, struct_getparam(varclient_4485, 3040), comp(753, 40));
    IF_SETTEXT(`Combat Level: <col=FFFFFF>${inttostring(struct_getparam(varclient_4485, 2238), 10)}</col>`, comp(753, 52));
    var string1 = "";
    script12274();
    IF_SETPOSITION(75, 0, 2, 1, comp(753, 54));
    IF_SETPOSITION(0, 0, 2, 1, comp(753, 58));
    IF_SETHIDE(true, comp(753, 62));
    var int10 = -1;
    var int11 = -1;
    [int10, int11] = script15912(varclient_4485);
    string0 = "Total kills: ";
    switch (int10) {
        case 2: {
            string0 = "Total solo mode kills: ";
            break;
        }
        case 3: {
            string0 = "Total duo mode kills: ";
            break;
        }
        case 4: {
            string0 = "Total group mode kills: ";
            break;
        }
        case 5: {
            string0 = "Total enrage mode kills: ";
            break;
        }
    };
    if ((varclient_4486 == 60000)) {
        string1 = "<col=FF0000>Lots!</col>";
    } else {
        string1 = TOSTRING_LOCALISED(varclient_4486, 1);
    };
    string0 = strconcat(string0, string1);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, 49348669, -1), 49348666);
    IF_SETTEXT(string1, 49348668);
    var int12 = -1;
    if ((varclient_4487 != -1)) {
        int12 = script15909(varclient_4485);
        switch (int11) {
            case 1: {
                string0 = "Total hard mode kills: ";
                break;
            }
            case 2: {
                string0 = "Total solo mode kills: ";
                break;
            }
            case 3: {
                string0 = "Total duo mode kills: ";
                break;
            }
            case 4: {
                string0 = "Total group mode kills: ";
                break;
            }
            case 5: {
                string0 = "Total enrage mode kills: ";
                break;
            }
        };
        if ((varclient_4487 == 60000)) {
            string1 = "<col=FF0000>Lots!</col>";
        } else {
            string1 = TOSTRING_LOCALISED(varclient_4487, 1);
        };
        string0 = strconcat(string0, string1);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, 49348669, -1), 49348670);
        IF_SETTEXT(string1, 49348672);
        IF_SETPOSITION(0, 0, 0, 1, 49348662);
        IF_SETPOSITION(75, 0, 2, 1, 49348666);
        IF_SETHIDE(0, 49348670);
        stack(int12);
        stack(49348673);
        IF_SETGRAPHIC();
    };
    CC_DELETEALL(comp(753, 94));
    script10498(comp(753, 94), comp(753, 95), comp(753, 93), varclient_4485, 0, 0, 0);
    IF_SETHIDE(false, comp(753, 7));
    return;
}