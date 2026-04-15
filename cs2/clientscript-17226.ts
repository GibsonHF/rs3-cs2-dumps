//
function script17226(int0: component, int1: component, int2: component, int3: component, int4: int, int5: dbrow, int6: int, int7: int, int8: int, int9: int): int {
    if ((int5 == -1 as dbrow)) {
        return int7;
    };
    var int10 = ((int9 - 64) / 2);
    var int11 = int6;
    var int12 = int7;
    if ((int11 > 326)) {
        var int8 = (int8 - 15);
    };
    var int13 = ((int8 - 64) - (2 * int10));
    var int14 = script17209(int5);
    var int15 = false;
    var string0 = "";
    int15 = dbrow_getfield(int5, 901344, 0);
    if ((int15 == true)) {
        if ((int14 == true)) {
            string0 = "You have discovered this clue by linking evidence to it.";
        } else {
            string0 = "You need to link evidence to a crime scene to discover this clue.";
        };
    } else if ((int14 == true)) {
        string0 = "You have discovered this clue.";
    } else {
        string0 = "You have not yet discovered this clue.";
    };
    var string1 = dbrow_getfield(int5, 901136, 0);
    if ((STRING_LENGTH(string1) > 0)) {
        if ((int14 == false)) {
            if ((int15 == true)) {
                string1 = "Link clues to unlock";
            } else {
                string1 = "Not Found";
            };
        };
        script2995(int0, IF_GETNEXTSUBID(int0), int11, int12, 0, 0, int8, 16384, 0, 2, 2196 as dbrow, string1);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETCOLOUR(0);
        CC_SETTEXTSHADOW(false);
        int12 = (int12 + script7593(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS(), 0));
    };
    var string2 = "";
    if ((int14 == true)) {
        string2 = dbrow_getfield(int5, 901312, 0);
    };
    if ((STRING_LENGTH(string2) > 0)) {
        script2995(int0, IF_GETNEXTSUBID(int0), (int11 + int10), int12, 0, 0, int8, 16384, 0, 2, 2100 as dbrow, string2);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETCOLOUR(0);
        CC_SETTEXTSHADOW(false);
        int12 = (int12 + script7593(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS(), 0));
    };
    var string3 = dbrow_getfield(int5, 901152, 0);
    var string4 = dbrow_getfield(int5, 901168, 0);
    var string5 = "";
    if ((int14 == true)) {
        string5 = dbrow_getfield(int5, 901280, 0);
    };
    var int16 = dbrow_getfield(int5, 901184, 0);
    var int17 = dbrow_getfield(int5, 901200, 0);
    if (((STRING_LENGTH(string5) == 0) && (int16 != -1 as obj))) {
        string5 = OC_DESC(int16);
    };
    var int18 = dbrow_getfield(int5, 901216, 0);
    if ((int18 > -1)) {
        if ((varbitplayer_52689 >= int18)) {
            int18 = 1;
        } else {
            int18 = 0;
        };
    } else {
        int18 = 0;
    };
    var int19 = 10506 as graphic;
    switch (int4) {
        case 1: {
            int19 = 10502 as graphic;
            break;
        }
        case 2: {
            int19 = 10505 as graphic;
            break;
        }
    };
    var int20 = -1 as seq;
    var int21 = dbrow_getfield(int5, 901232, 0);
    var int22 = dbrow_getfield(int5, 901248, 0);
    var int23 = dbrow_getfield(int5, 901264, 0);
    var int24 = ((int11 + int10) + 64);
    var int25 = 0;
    if (((int16 != -1 as obj) || (int17 != -1 as npc))) {
        if ((int14 == true)) {
            if ((int16 != -1 as obj)) {
                script2994(int0, IF_GETNEXTSUBID(int0), (int11 + int10), int12, 0, 0, 64, 64, 0, 0, int19);
                script9802(int0, IF_GETNEXTSUBID(int0), (((int11 + int10) + int10) + int10), (int12 + int10), 0, 0, 55, 55, 0, 0, int16, 0, 3, 0);
                CC_SETASPECT(64, 64);
            };
            if ((int17 != -1 as npc)) {
                int24 = (int24 + (int10 + 64));
                script2994(int0, IF_GETNEXTSUBID(int0), (int11 + 64), int12, 0, 0, 64, 64, 0, 0, int19);
                script2997(int0, IF_GETNEXTSUBID(int0), ((((int11 + 64) + int10) + int10) + int10), (((int12 + int10) + int10) + int10), 0, 0, 55, 55, 0, 0);
                script16108(int17, int20, int22, (script7802(int17) + int23), 0, -512, 0, int21);
                script2994(int0, IF_GETNEXTSUBID(int0), (int11 + int10), int12, 0, 0, 64, 64, 0, 0, int19);
                script2997(int0, IF_GETNEXTSUBID(int0), (((int11 + int10) + int10) + 2), (((int12 + int10) + int10) + int10), 0, 0, 55, 55, 0, 0);
                script16108(int17, int20, 0, (script7802(int17) + int23), 0, 0, 0, int21);
                if ((int18 == 1)) {
                    script2994(int0, IF_GETNEXTSUBID(int0), ((int11 + 64) - int10), (int12 + (34 / 2)), 0, 0, 67, 34, 0, 0, 9134 as graphic);
                    CC_CLEAROPS();
                    script3537("This suspect is DECEASED.");
                    script2994(int0, IF_GETNEXTSUBID(int0), int11, (int12 + (34 / 2)), 0, 0, 67, 34, 0, 0, 9134 as graphic);
                    CC_CLEAROPS();
                    script3537("This suspect is DECEASED.");
                };
                if ((STRING_LENGTH(string3) > 0)) {
                    if ((int14 == false)) {
                        string3 = "";
                    };
                    if ((STRING_LENGTH(string4) > 0)) {
                        string3 = strconcat(string3, "<br>(");
                        string3 = strconcat(string3, string4);
                        string3 = strconcat(string3, ")");
                        script2995(int0, IF_GETNEXTSUBID(int0), int24, int12, 0, 0, (int13 - 64), 16384, 0, 2, 2100 as dbrow, string3);
                        CC_SETTEXTALIGN(0, 0, 0);
                        CC_SETCOLOUR(0);
                        CC_SETTEXTSHADOW(false);
                    };
                    int25 = script7593(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS(), 0);
                };
            };
            if (((int16 != -1 as obj) && (STRING_LENGTH(string5) > 0))) {
                script2995(int0, IF_GETNEXTSUBID(int0), int24, (int12 + int25), 0, 0, int13, 16384, 0, 2, 2100 as dbrow, string5);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETCOLOUR(0);
                CC_SETTEXTSHADOW(false);
            };
        } else if (((int16 != -1 as obj) || (int17 != -1 as npc))) {
            script2994(int0, IF_GETNEXTSUBID(int0), (int11 + int10), int12, 0, 0, 64, 64, 0, 0, 10507 as graphic);
            if ((int15 == false)) {
                script3537("Discover this clue by exploring and investigating your fort.");
            } else if (((int16 != -1 as obj) || (int17 != -1 as npc))) {
                script2994(int0, IF_GETNEXTSUBID(int0), (((int11 + 64) - 32) + 2), (((int12 + 64) - 32) - 4), 0, 0, 32, 32, 0, 0, 26605 as graphic);
                script3537("Discover this clue by linking another item of evidence to a suspect or scenery.");
            };
        };
        int12 = (int12 + 64);
    };
    var int26 = dbrow_getfield(int5, 901360, 0);
    var int27 = dbrow_getfield(int5, 901376, 0);
    if ((int14 == false)) {
        int27 = false;
    };
    var int28 = dbrow_getfield(int5, 901328, 0);
    var int29 = 0;
    if ((((int26 == true) || (int27 == true)) || (int28 != -1 as dbrow))) {
        int29 = dbrow_getfield(int5, 901120, 0);
        if ((int29 == -1)) {
            script12478(`$title=${string1} $desc=${string5} has discuss, replay and/or links and needs a button_id!`);
            return int7;
        };
    };
    var int30 = 0;
    if (((int26 == true) && (int14 == true))) {
        script7853(int1, int29, (int11 + int10), int12, 0, 0, (64 * 2), (64 / 2), 0, 0, 4476 as dbrow, "Discuss", true, 1, false, false);
        if ((int30 == 0)) {
            int30 = (CC_GETHEIGHT() + int10);
        };
        script10631("Discuss");
        CC_SETOPBASE(string1);
        CC_SETOPCURSOR(1, 44);
        script3537("Discuss this clue with your investigative assistant.");
    };
    var int31 = (int11 + int10);
    if ((int27 == true)) {
        if ((int30 > 0)) {
            int31 = ((int31 + int10) + (64 * 2));
        };
        script7853(int2, int29, int31, int12, 0, 0, (64 * 2), (64 / 2), 0, 0, 17062 as dbrow, "Replay", true, 1, false, false);
        if ((int30 == 0)) {
            int30 = (CC_GETHEIGHT() + int10);
        };
        script10631("Replay");
        CC_SETOPBASE(string1);
        CC_SETOPCURSOR(1, 44);
        script3537("Replay the conversation summarised in this testimony.");
    };
    var int32 = false;
    var string6 = "";
    var string7 = "";
    var int33 = 0;
    var int34 = DB_GETFIELDCOUNT(int5, 901328);
    var int35 = 0;
    if ((int34 > 0)) {
        while ((--int34 >= 0)) {
            if (((dbrow_getfield(int5, 901328, int34) != -1 as dbrow) && (script17209(dbrow_getfield(int5, 901328, int34)) == true))) {
                int35 = (int35 + 1);
            };
        };
    };
    int34 = DB_GETFIELDCOUNT(int5, 901328);
    if ((int27 == false)) {
        if ((int30 > 0)) {
            int31 = ((int31 + int10) + (64 * 2));
        };
        if (((int28 != -1 as dbrow) || (int15 == true))) {
            if ((int28 == -1 as dbrow)) {
                int28 = int5;
                if ((script17209(int28) == true)) {
                    int35 = (int35 + 1);
                };
            };
            if (((int15 == true) && (int14 == false))) {
                int32 = false;
                string6 = "Locked";
                string7 = "Discover this clue by linking another item of evidence to a suspect or scenery.";
            } else if ((int14 == false)) {
                int32 = false;
                string6 = "Not Found";
                string7 = "You must first discover this clue";
            } else if ((((varplayer_10788 != -1 as npc) && (int14 == true)) && (int35 < int34))) {
                int32 = true;
                string6 = "Link";
                string7 = "Show this evidence to this suspect.";
            } else if ((((varplayer_10789 != -1 as loc) && (int14 == true)) && (int35 < int34))) {
                int32 = true;
                string6 = "Link";
                string7 = "Use this evidence on this scenery.";
            } else if (((int14 == true) && (script17209(int28) == false))) {
                int32 = false;
                string6 = "Link";
                string7 = "Show this evidence to a suspect or use it on scenery to discover another clue.";
            } else if (((int15 == true) || ((int14 == true) && (script17209(int28) == true)))) {
                int32 = false;
                string6 = "Linked";
                string7 = "You have correctly linked this evidence to another item of evidence.";
            };
            if ((STRING_LENGTH(string6) > 0)) {
                script7853(int3, int29, int31, int12, 0, 0, (64 * 2), (64 / 2), 0, 0, 17062 as dbrow, string6, int32, 1, false, false);
                if ((int30 == 0)) {
                    int30 = (CC_GETHEIGHT() + int10);
                };
                if ((int32 == false)) {
                    CC_CLEAROPS();
                    script3537(string7);
                } else {
                    script10631(string6);
                    CC_SETOPBASE(string1);
                    CC_SETOPCURSOR(1, 176);
                    if ((script6431() == false)) {
                        script3537(string7);
                    };
                };
            };
        };
    };
    if ((int30 > 0)) {
        int12 = (int12 + int30);
    };
    if (((int16 == -1 as obj) && (STRING_LENGTH(string5) > 0))) {
        script2995(int0, IF_GETNEXTSUBID(int0), (int11 + int10), int12, 0, 0, int8, 16384, 0, 2, 2100 as dbrow, string5);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETCOLOUR(0);
        CC_SETTEXTSHADOW(false);
        int12 = (int12 + script7593(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS(), 0));
    };
    var int36 = DB_GETFIELDCOUNT(int5, 901296);
    var string8 = "";
    var int37 = -1;
    if (((int14 == true) && (int36 > 0))) {
        while ((++int37 < int36)) {
            string8 = dbrow_getfield(int5, 901296, int37);
            script2994(int0, IF_GETNEXTSUBID(int0), (int11 + int10), int12, 0, 0, 15, 15, 0, 0, 21341 as graphic);
            script2995(int0, IF_GETNEXTSUBID(int0), ((int11 + int10) + 20), int12, 0, 0, (int8 - 20), 16384, 0, 2, 2100 as dbrow, string8);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETCOLOUR(0);
            CC_SETTEXTSHADOW(false);
            int12 = (int12 + script7593(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS(), 0));
        };
    };
    return int12;
}