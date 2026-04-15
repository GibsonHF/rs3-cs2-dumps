//
function script14028(): void {
    var int0 = comp(1935, 2);
    CC_DELETEALL(int0);
    var int1 = -1;
    var int2 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int3 = script3864();
    var int4 = 3;
    while ((++int1 < 5)) {
        switch (int1) {
            case 0: {
                string0 = "Easy Treasure Trails";
                string1 = `Clues completed: ${TOSTRING_LOCALISED(varplayer_7802, 1)}`;
                string2 = `Rerolls available: ${inttostring(varbitplayer_39450, 10)}/${inttostring(int3, 10)}`;
                string3 = `Progress to reroll: ${inttostring(varbitplayer_39443, 10)}/${inttostring(int4, 10)}`;
                break;
            }
            case 1: {
                string0 = "Medium Treasure Trails";
                string1 = `Clues completed: ${TOSTRING_LOCALISED(varplayer_7803, 1)}`;
                string2 = `Rerolls available: ${inttostring(varbitplayer_39451, 10)}/${inttostring(int3, 10)}`;
                string3 = `Progress to reroll: ${inttostring(varbitplayer_39444, 10)}/${inttostring(int4, 10)}`;
                break;
            }
            case 2: {
                string0 = "Hard Treasure Trails";
                string1 = `Clues completed: ${TOSTRING_LOCALISED(varplayer_7804, 1)}`;
                string2 = `Rerolls available: ${inttostring(varbitplayer_39452, 10)}/${inttostring(int3, 10)}`;
                string3 = `Progress to reroll: ${inttostring(varbitplayer_39445, 10)}/${inttostring(int4, 10)}`;
                break;
            }
            case 3: {
                string0 = "Elite Treasure Trails";
                string1 = `Clues completed: ${TOSTRING_LOCALISED(varplayer_7805, 1)}`;
                string2 = `Rerolls available: ${inttostring(varbitplayer_39453, 10)}/${inttostring(int3, 10)}`;
                string3 = `Progress to reroll: ${inttostring(varbitplayer_39446, 10)}/${inttostring(int4, 10)}`;
                break;
            }
            case 4: {
                string0 = "Master Treasure Trails";
                string1 = `Clues completed: ${TOSTRING_LOCALISED(varplayer_7806, 1)}`;
                string2 = `Rerolls available: ${inttostring(varbitplayer_39454, 10)}/${inttostring(int3, 10)}`;
                string3 = `Progress to reroll: ${inttostring(varbitplayer_39455, 10)}/${inttostring(int4, 10)}`;
                break;
            }
        };
        int2 = (5 + (int1 * 70));
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(0, 18, 1, 0);
        CC_SETPOSITION(0, int2, 1, 0);
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETCOLOUR(script10495(1));
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(0, 15, 1, 0);
        CC_SETPOSITION(0, (int2 + 18), 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXT(string1);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(0, 15, 1, 0);
        CC_SETPOSITION(0, (int2 + 33), 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXT(string2);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(0, 15, 1, 0);
        CC_SETPOSITION(0, (int2 + 48), 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXT(string3);
        CC_SETTEXTALIGN(1, 1, 0);
    };
    return;
}