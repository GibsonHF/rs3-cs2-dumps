//
function script5808(int0: component, int1: unknown_int): void {
    var int2 = comp(1457, 21);
    var int3 = comp(1457, 22);
    var int4 = comp(1457, 20);
    var int5 = comp(1457, 23);
    if ((int0 == comp(1458, 9))) {
        int2 = comp(1458, 13);
        int3 = comp(1458, 14);
        int4 = comp(1458, 12);
        int5 = comp(1458, 15);
    };
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((varbitplayer_38915 != 0)) {
        [int7, int8] = script5817(int2, int3, inttostring(varbitplayer_38915, 10), "Prayer Drain", int7, int8);
    };
    if ((varplayer_1029 != 0)) {
        [int7, int8] = script5817(int2, int3, script6494(varplayer_1029), "Melee Accuracy", int7, int8);
    };
    if ((varplayer_1030 != 0)) {
        [int7, int8] = script5817(int2, int3, script6493(varplayer_1030), "Melee Strength", int7, int8);
    };
    if ((varplayer_1031 != 0)) {
        [int7, int8] = script5817(int2, int3, script6494(varplayer_1031), "Ranged Accuracy", int7, int8);
    };
    if ((varplayer_1032 != 0)) {
        [int7, int8] = script5817(int2, int3, script6493(varplayer_1032), "Ranged Strength", int7, int8);
    };
    if ((varplayer_1033 != 0)) {
        [int7, int8] = script5817(int2, int3, script6494(varplayer_1033), "Magic Accuracy", int7, int8);
    };
    if ((varplayer_1034 != 0)) {
        [int7, int8] = script5817(int2, int3, script6493(varplayer_1034), "Magic Strength", int7, int8);
    };
    if ((varplayer_11306 != 0)) {
        [int7, int8] = script5817(int2, int3, script6494(varplayer_11306), "Necromancy Accuracy", int7, int8);
    };
    if ((varplayer_11307 != 0)) {
        [int7, int8] = script5817(int2, int3, script6493(varplayer_11307), "Necromancy Strength", int7, int8);
    };
    if ((varplayer_1035 != 0)) {
        [int7, int8] = script5817(int2, int3, script6494(varplayer_1035), "Defence", int7, int8);
    };
    if ((int7 == 0)) {
        IF_SETHIDE(true, int5);
        CC_CREATE(int4, 4, int8);
        CC_SETPOSITION(0, int7, 1, 0);
        CC_SETSIZE(IF_GETWIDTH(int4), (14 * 6), 0, 0);
        CC_SETMAXLINES(1);
        CC_SETTEXTFONT(169 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        script2731(int4, int8, 3);
        CC_SETTEXT("No stat changes!");
        int7 = (int7 + CC_GETHEIGHT());
        int8 = (int8 + 1);
    } else {
        IF_SETHIDE(false, int5);
    };
    int7 = ((14 * 6) + 1);
    if ((int1 == 1)) {
        script11991(int0, int7, int7);
    };
    return;
}