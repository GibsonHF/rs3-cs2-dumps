//
function script7359(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_17458, 1), comp(944, 128));
    var int0 = 0;
    if ((varbitplayer_16995 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_16999 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_17003 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_17008 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_17012 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_17016 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_21307 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_21311 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_21315 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_26836 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_26840 > 0)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_26844 > 0)) {
        int0 = (int0 + 1);
    };
    IF_SETTEXT(inttostring(int0, 10), comp(944, 121));
    var int1 = (((((((((((((((varbitplayer_16994 + varbitplayer_16998) + varbitplayer_17002) + varbitplayer_17007) + varbitplayer_17011) + varbitplayer_17015) + varbitplayer_21306) + varbitplayer_21310) + varbitplayer_21314) + varbitplayer_26835) + varbitplayer_26839) + varbitplayer_26843) + varbitplayer_17006) + varbitplayer_17019) + varbitplayer_21318) + varbitplayer_26847);
    IF_SETTEXT(inttostring(int1, 10), comp(944, 123));
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if ((varbitplayer_21314 > 0)) {
        string0 = strconcat(string0, "Architect<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_21314 + varbitplayer_21318), 10)}<br>`);
        string2 = strconcat(string2, "n/a<br>");
    };
    if ((varbitplayer_17007 > 0)) {
        string0 = strconcat(string0, "Assassin<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_17007 + varbitplayer_17019), 10)}<br>`);
        string2 = strconcat(string2, "n/a<br>");
    };
    if ((varbitplayer_16998 > 0)) {
        string0 = strconcat(string0, "Biologist<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_16998 + varbitplayer_17006), 10)}<br>`);
        string2 = strconcat(string2, "n/a<br>");
    };
    if ((varbitplayer_21310 > 0)) {
        string0 = strconcat(string0, "Chef<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_21310 + varbitplayer_21318), 10)}<br>`);
        string2 = strconcat(string2, `${inttostring(varbitplayer_26786, 10)}<br>`);
    };
    if ((varbitplayer_17011 > 0)) {
        string0 = strconcat(string0, "Convict<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_17011 + varbitplayer_17006), 10)}<br>`);
        string2 = strconcat(string2, "n/a<br>");
    };
    if ((varbitplayer_26835 > 0)) {
        string0 = strconcat(string0, "Exile<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_26835 + varbitplayer_26847), 10)}<br>`);
        string2 = strconcat(string2, `${inttostring(varbitplayer_26789, 10)}<br>`);
    };
    if ((varbitplayer_26839 > 0)) {
        string0 = strconcat(string0, "Memory<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_26839 + varbitplayer_26847), 10)}<br>`);
        string2 = strconcat(string2, `${inttostring(varbitplayer_26790, 10)}<br>`);
    };
    if ((varbitplayer_17015 > 0)) {
        string0 = strconcat(string0, "Missionary<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_17015 + varbitplayer_17006), 10)}<br>`);
        string2 = strconcat(string2, "n/a<br>");
    };
    if ((varbitplayer_17002 > 0)) {
        string0 = strconcat(string0, "Occultist<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_17002 + varbitplayer_17019), 10)}<br>`);
        string2 = strconcat(string2, "n/a<br>");
    };
    if ((varbitplayer_26843 > 0)) {
        string0 = strconcat(string0, "Tengu<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_26843 + varbitplayer_26847), 10)}<br>`);
        string2 = strconcat(string2, `${inttostring(varbitplayer_26791, 10)}<br>`);
    };
    if ((varbitplayer_21306 > 0)) {
        string0 = strconcat(string0, "Trapper<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_21306 + varbitplayer_21318), 10)}<br>`);
        string2 = strconcat(string2, `${inttostring(varbitplayer_26787, 10)}<br>`);
    };
    if ((varbitplayer_16994 > 0)) {
        string0 = strconcat(string0, "Whaler<br>");
        string1 = strconcat(string1, `${inttostring((varbitplayer_16994 + varbitplayer_17019), 10)}<br>`);
        string2 = strconcat(string2, `${inttostring(varbitplayer_26788, 10)}<br>`);
    };
    IF_SETTEXT(string0, comp(944, 108));
    IF_SETTEXT(string1, comp(944, 109));
    IF_SETTEXT(string2, comp(944, 110));
    var int2 = (((((((((((((((((((((((((((((((((varbitplayer_17465 + varbitplayer_17466) + varbitplayer_17467) + varbitplayer_17468) + varbitplayer_17469) + varbitplayer_17470) + varbitplayer_17471) + varbitplayer_17472) + varbitplayer_17473) + varbitplayer_17474) + varbitplayer_17477) + varbitplayer_17478) + varbitplayer_17479) + varbitplayer_17480) + varbitplayer_17481) + varbitplayer_17482) + varbitplayer_17483) + varbitplayer_17484) + varbitplayer_17485) + varbitplayer_17486) + varbitplayer_17488) + varbitplayer_17489) + varbitplayer_17490) + varbitplayer_17491) + varbitplayer_17492) + varbitplayer_17493) + varbitplayer_17494) + varbitplayer_21319) + varbitplayer_21320) + varbitplayer_21321) + varbitplayer_26782) + varbitplayer_26783) + varbitplayer_26784) + varbitplayer_26785);
    IF_SETTEXT(inttostring(int2, 10), comp(944, 126));
    var int3 = (((((varbitplayer_26786 + varbitplayer_26787) + varbitplayer_26788) + varbitplayer_26789) + varbitplayer_26790) + varbitplayer_26791);
    IF_SETTEXT(inttostring(int3, 10), comp(944, 116));
    var int4 = 0;
    switch (varbitplayer_26825) {
        case 0: {
            int4 = (int4 + 1);
            break;
        }
        case 1: {
            int4 = (int4 + 2);
            break;
        }
        case 2: {
            int4 = (int4 + 3);
            break;
        }
        case 3: {
            int4 = (int4 + 4);
            break;
        }
        case 4:
        case 5:
        case 6: {
            int4 = (int4 + 5);
            break;
        }
        case 7: {
            int4 = (int4 + 6);
            break;
        }
        case 8:
        case 9:
        case 10: {
            int4 = (int4 + 7);
            break;
        }
    };
    switch (varbitplayer_26828) {
        case 0: {
            int4 = (int4 + 1);
            break;
        }
        case 1: {
            int4 = (int4 + 2);
            break;
        }
        case 2: {
            int4 = (int4 + 3);
            break;
        }
        case 3: {
            int4 = (int4 + 4);
            break;
        }
        case 4:
        case 5:
        case 6: {
            int4 = (int4 + 5);
            break;
        }
        case 7:
        case 8:
        case 9: {
            int4 = (int4 + 6);
            break;
        }
    };
    switch (varbitplayer_26829) {
        case 0: {
            int4 = (int4 + 1);
            break;
        }
        case 1: {
            int4 = (int4 + 2);
            break;
        }
        case 2: {
            int4 = (int4 + 3);
            break;
        }
        case 3: {
            int4 = (int4 + 4);
            break;
        }
        case 4: {
            int4 = (int4 + 5);
            break;
        }
        case 5: {
            int4 = (int4 + 6);
            break;
        }
        case 6: {
            int4 = (int4 + 7);
            break;
        }
        case 7: {
            int4 = (int4 + 8);
            break;
        }
        case 8: {
            int4 = (int4 + 9);
            break;
        }
    };
    switch (varbitplayer_17398) {
        case 0: {
            int4 = (int4 + 1);
            break;
        }
        case 1: {
            int4 = (int4 + 2);
            break;
        }
        case 2: {
            int4 = (int4 + 3);
            break;
        }
        case 3: {
            int4 = (int4 + 4);
            break;
        }
    };
    switch (varbitplayer_17399) {
        case 0: {
            int4 = (int4 + 1);
            break;
        }
        case 1: {
            int4 = (int4 + 2);
            break;
        }
        case 2: {
            int4 = (int4 + 3);
            break;
        }
        case 3: {
            int4 = (int4 + 4);
            break;
        }
        case 4: {
            int4 = (int4 + 5);
            break;
        }
    };
    switch (varbitplayer_26830) {
        case 0: {
            int4 = (int4 + 1);
            break;
        }
        case 1: {
            int4 = (int4 + 2);
            break;
        }
        case 2: {
            int4 = (int4 + 3);
            break;
        }
        case 3: {
            int4 = (int4 + 4);
            break;
        }
        case 4:
        case 5:
        case 6: {
            int4 = (int4 + 5);
            break;
        }
        case 7:
        case 8:
        case 9: {
            int4 = (int4 + 6);
            break;
        }
    };
    IF_SETTEXT(inttostring(int4, 10), comp(944, 124));
    var int5 = 0;
    var int6 = 0;
    while ((int5 < 16)) {
        int6 = (int6 + TESTBIT(varplayer_3378, int5));
        int6 = (int6 + TESTBIT(varplayer_3379, int5));
        int6 = (int6 + TESTBIT(varbitplayer_17033, int5));
        int6 = (int6 + TESTBIT(varbitplayer_17034, int5));
        int5 = (int5 + 1);
    };
    while ((int5 < 32)) {
        int6 = (int6 + TESTBIT(varplayer_3378, int5));
        int6 = (int6 + TESTBIT(varplayer_3379, int5));
        int5 = (int5 + 1);
    };
    IF_SETTEXT(inttostring(int6, 10), comp(944, 119));
    var int7 = (((((((varbitplayer_17458 / 5000) + (int0 * 50)) + (int1 * 20)) + (int2 * 3)) + (int3 * 10)) + (int4 * 10)) + (int6 * 5));
    IF_SETTEXT(inttostring(int7, 10), comp(944, 133));
    var string3 = "";
    if ((int7 < 400)) {
        if ((GENDER() == 0)) {
            string3 = "Cabin Boy";
        } else if ((GENDER() == 1)) {
            string3 = "Cabin Girl";
        } else {
            string3 = "Cabin Individual";
        };
    } else if ((int7 < 800)) {
        string3 = "Bo'sun";
    } else if ((int7 < 1200)) {
        string3 = "First Officer";
    } else if ((int7 < 1600)) {
        string3 = "Cap'n";
    } else if ((int7 < 2000)) {
        string3 = "Commodore";
    } else if ((int7 < 3500)) {
        string3 = "Admiral";
    } else if ((int7 < 4500)) {
        string3 = "Admiral of the Fleet";
    } else {
        string3 = "Portmaster";
    };
    IF_SETTEXT(string3, comp(944, 135));
    return;
}