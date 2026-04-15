//
function script2134(int0: quest, string0: string, string1: string): string {
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as obj;
    var int15 = -1 as obj;
    var int16 = -1 as obj;
    var int17 = -1 as obj;
    var int18 = -1 as obj;
    var int19 = -1 as obj;
    var int20 = -1 as obj;
    var int21 = -1 as obj;
    var int22 = -1 as obj;
    var int23 = -1 as obj;
    var int24 = -1 as obj;
    var int25 = -1 as obj;
    var string8 = "";
    var string9 = "";
    var string10 = "";
    var string11 = "";
    var string12 = "";
    var string13 = "";
    var string14 = "";
    var string15 = "";
    var string16 = "";
    var string17 = "";
    var string18 = "";
    var string19 = "";
    var string20 = "";
    var string21 = "";
    var int26 = 0;
    if ((int0 != -1 as quest)) {
        [string2, int1] = script2133(int0);
        int26 = script3980(int0);
        int2 = quest_getparam(int0, 6864);
        int14 = quest_getparam(int0, 6852);
        string8 = quest_getparam(int0, 7875);
        int3 = quest_getparam(int0, 7705);
        int15 = quest_getparam(int0, 6853);
        string9 = quest_getparam(int0, 7876);
        int4 = quest_getparam(int0, 7817);
        int16 = quest_getparam(int0, 6854);
        string10 = quest_getparam(int0, 7877);
        int5 = quest_getparam(int0, 7866);
        int17 = quest_getparam(int0, 6855);
        string11 = quest_getparam(int0, 7878);
        int6 = quest_getparam(int0, 7867);
        int18 = quest_getparam(int0, 6856);
        string12 = quest_getparam(int0, 7879);
        int7 = quest_getparam(int0, 7868);
        int19 = quest_getparam(int0, 6857);
        string13 = quest_getparam(int0, 7880);
        int8 = quest_getparam(int0, 7869);
        int20 = quest_getparam(int0, 6858);
        string14 = quest_getparam(int0, 7881);
        int9 = quest_getparam(int0, 7870);
        int21 = quest_getparam(int0, 6859);
        string15 = quest_getparam(int0, 7882);
        int10 = quest_getparam(int0, 7871);
        int22 = quest_getparam(int0, 6860);
        string16 = quest_getparam(int0, 7883);
        int11 = quest_getparam(int0, 7872);
        int23 = quest_getparam(int0, 6861);
        string17 = quest_getparam(int0, 7884);
        int12 = quest_getparam(int0, 7873);
        int24 = quest_getparam(int0, 6862);
        string18 = quest_getparam(int0, 7885);
        int13 = quest_getparam(int0, 7874);
        int25 = quest_getparam(int0, 6863);
        string19 = quest_getparam(int0, 7886);
        if ((int26 == 0)) {
            if ((STRING_LENGTH(quest_getparam(int0, 7818)) > 0)) {
                string3 = quest_getparam(int0, 7818);
            };
            if ((STRING_LENGTH(quest_getparam(int0, 7820)) > 0)) {
                string4 = quest_getparam(int0, 7820);
            };
            if ((STRING_LENGTH(quest_getparam(int0, 7819)) > 0)) {
                string5 = quest_getparam(int0, 7819);
            };
            if ((STRING_LENGTH(quest_getparam(int0, 7821)) > 0)) {
                string6 = quest_getparam(int0, 7821);
            };
            if ((STRING_LENGTH(quest_getparam(int0, 7822)) > 0)) {
                string7 = quest_getparam(int0, 7822);
                if ((varbitplayer_30223 < 105)) {
                    string7 = strconcat(string7, " (You must complete the Invention tutorial before you can claim this reward.)");
                };
            };
        } else {
            if ((varbitplayer_25277 == 1)) {
                if ((STRING_LENGTH(quest_getparam(int0, 7820)) > 0)) {
                    string4 = quest_getparam(int0, 7820);
                } else {
                    if ((((int14 != -1 as obj) && (item_getparam(int14, 4242) != -1 as stat)) && (item_getparam(int14, 4242) != 3 as stat))) {
                        int14 = -1 as obj;
                    };
                    if ((((int15 != -1 as obj) && (item_getparam(int15, 4242) != -1 as stat)) && (item_getparam(int15, 4242) != 3 as stat))) {
                        int15 = -1 as obj;
                    };
                    if ((((int16 != -1 as obj) && (item_getparam(int16, 4242) != -1 as stat)) && (item_getparam(int16, 4242) != 3 as stat))) {
                        int16 = -1 as obj;
                    };
                    if ((((int17 != -1 as obj) && (item_getparam(int17, 4242) != -1 as stat)) && (item_getparam(int17, 4242) != 3 as stat))) {
                        int17 = -1 as obj;
                    };
                    if ((((int18 != -1 as obj) && (item_getparam(int18, 4242) != -1 as stat)) && (item_getparam(int18, 4242) != 3 as stat))) {
                        int18 = -1 as obj;
                    };
                    if ((((int19 != -1 as obj) && (item_getparam(int19, 4242) != -1 as stat)) && (item_getparam(int19, 4242) != 3 as stat))) {
                        int19 = -1 as obj;
                    };
                    if ((((int20 != -1 as obj) && (item_getparam(int20, 4242) != -1 as stat)) && (item_getparam(int20, 4242) != 3 as stat))) {
                        int20 = -1 as obj;
                    };
                    if ((((int21 != -1 as obj) && (item_getparam(int21, 4242) != -1 as stat)) && (item_getparam(int21, 4242) != 3 as stat))) {
                        int21 = -1 as obj;
                    };
                    if ((((int22 != -1 as obj) && (item_getparam(int22, 4242) != -1 as stat)) && (item_getparam(int22, 4242) != 3 as stat))) {
                        int22 = -1 as obj;
                    };
                    if ((((int23 != -1 as obj) && (item_getparam(int23, 4242) != -1 as stat)) && (item_getparam(int23, 4242) != 3 as stat))) {
                        int23 = -1 as obj;
                    };
                    if ((((int24 != -1 as obj) && (item_getparam(int24, 4242) != -1 as stat)) && (item_getparam(int24, 4242) != 3 as stat))) {
                        int24 = -1 as obj;
                    };
                    if ((((int25 != -1 as obj) && (item_getparam(int25, 4242) != -1 as stat)) && (item_getparam(int25, 4242) != 3 as stat))) {
                        int25 = -1 as obj;
                    };
                };
            };
            if ((varbitplayer_25276 == 1)) {
                if ((STRING_LENGTH(quest_getparam(int0, 7819)) > 0)) {
                    string5 = quest_getparam(int0, 7819);
                } else {
                    if ((((int14 != -1 as obj) && (item_getparam(int14, 4242) != -1 as stat)) && (item_getparam(int14, 4242) != 1 as stat))) {
                        int14 = -1 as obj;
                    };
                    if ((((int15 != -1 as obj) && (item_getparam(int15, 4242) != -1 as stat)) && (item_getparam(int15, 4242) != 1 as stat))) {
                        int15 = -1 as obj;
                    };
                    if ((((int16 != -1 as obj) && (item_getparam(int16, 4242) != -1 as stat)) && (item_getparam(int16, 4242) != 1 as stat))) {
                        int16 = -1 as obj;
                    };
                    if ((((int17 != -1 as obj) && (item_getparam(int17, 4242) != -1 as stat)) && (item_getparam(int17, 4242) != 1 as stat))) {
                        int17 = -1 as obj;
                    };
                    if ((((int18 != -1 as obj) && (item_getparam(int18, 4242) != -1 as stat)) && (item_getparam(int18, 4242) != 1 as stat))) {
                        int18 = -1 as obj;
                    };
                    if ((((int19 != -1 as obj) && (item_getparam(int19, 4242) != -1 as stat)) && (item_getparam(int19, 4242) != 1 as stat))) {
                        int19 = -1 as obj;
                    };
                    if ((((int20 != -1 as obj) && (item_getparam(int20, 4242) != -1 as stat)) && (item_getparam(int20, 4242) != 1 as stat))) {
                        int20 = -1 as obj;
                    };
                    if ((((int21 != -1 as obj) && (item_getparam(int21, 4242) != -1 as stat)) && (item_getparam(int21, 4242) != 1 as stat))) {
                        int21 = -1 as obj;
                    };
                    if ((((int22 != -1 as obj) && (item_getparam(int22, 4242) != -1 as stat)) && (item_getparam(int22, 4242) != 1 as stat))) {
                        int22 = -1 as obj;
                    };
                    if ((((int23 != -1 as obj) && (item_getparam(int23, 4242) != -1 as stat)) && (item_getparam(int23, 4242) != 1 as stat))) {
                        int23 = -1 as obj;
                    };
                    if ((((int24 != -1 as obj) && (item_getparam(int24, 4242) != -1 as stat)) && (item_getparam(int24, 4242) != 1 as stat))) {
                        int24 = -1 as obj;
                    };
                    if ((((int25 != -1 as obj) && (item_getparam(int25, 4242) != -1 as stat)) && (item_getparam(int25, 4242) != 1 as stat))) {
                        int25 = -1 as obj;
                    };
                };
            };
        };
        if (((STRING_LENGTH(quest_getparam(int0, 7826)) > 0) && (STRING_LENGTH(string1) == 0))) {
            var string1 = quest_getparam(int0, 7826);
        };
        if ((STRING_LENGTH(string0) == 0)) {
            var string0 = script6392(int2, int14, string8, int3, int15, string9, int4, int16, string10, int5, int17, string11, int6, int18, string12, int7, int19, string13, int8, int20, string14, int9, int21, string15, int10, int22, string16, int11, int23, string17, int12, int24, string18, int13, int25, string19, quest_getparam(int0, 7823), "", "<br>");
        };
        string21 = script16835(int0);
        string20 = script3977(quest_getparam(int0, 1345));
    };
    var string22 = "";
    if ((STRING_LENGTH(string2) > 0)) {
        string22 = strconcat(string22, string2);
        string22 = strconcat(string22, "<br>");
    };
    if ((STRING_LENGTH(string3) > 0)) {
        string22 = strconcat(string22, string3);
        string22 = strconcat(string22, "<br>");
    };
    if ((STRING_LENGTH(string4) > 0)) {
        string22 = strconcat(string22, string4);
        string22 = strconcat(string22, "<br>");
    };
    if ((STRING_LENGTH(string5) > 0)) {
        string22 = strconcat(string22, string5);
        string22 = strconcat(string22, "<br>");
    };
    if ((STRING_LENGTH(string6) > 0)) {
        string22 = strconcat(string22, string6);
        string22 = strconcat(string22, "<br>");
    };
    if ((STRING_LENGTH(string7) > 0)) {
        string22 = strconcat(string22, string7);
        string22 = strconcat(string22, "<br>");
    };
    if (((int26 == 1) && (STRING_LENGTH(string1) > 0))) {
        string22 = strconcat(string22, string1);
        string22 = strconcat(string22, "<br>");
    } else if ((STRING_LENGTH(string0) > 0)) {
        if ((int0 == 371 as quest)) {
            string22 = strconcat(string22, inttostring(script2135(), 10));
        };
        string22 = strconcat(string22, string0);
        string22 = strconcat(string22, "<br>");
    };
    if ((STRING_LENGTH(string21) > 0)) {
        string22 = strconcat(string22, string21);
        string22 = strconcat(string22, "<br>");
    };
    if ((STRING_LENGTH(string20) > 0)) {
        string22 = strconcat(string22, string20);
    };
    return string22;
}