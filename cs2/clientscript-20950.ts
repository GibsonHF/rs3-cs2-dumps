//
function script20950(): void {
    if ((((varbitplayer_61515 + varbitplayer_61516) + varbitplayer_61517) == 0)) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if ((varbitplayer_61515 >= 2)) {
        stack(1);
        stack(0);
        stack(0);
        return;
    };
    if ((varbitplayer_61516 >= 2)) {
        stack(0);
        stack(1);
        stack(0);
        return;
    };
    if ((varbitplayer_61517 >= 2)) {
        stack(0);
        stack(0);
        stack(1);
        return;
    };
    if (((varbitplayer_61515 == 1) && ((varbitplayer_61516 + varbitplayer_61517) == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if (((varbitplayer_61516 == 1) && ((varbitplayer_61515 + varbitplayer_61517) == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if (((varbitplayer_61517 == 1) && ((varbitplayer_61515 + varbitplayer_61516) == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if (((varbitplayer_61515 == 1) && (varbitplayer_61516 == 1))) {
        if ((varbitplayer_61517 == 1)) {
            stack(0);
            stack(1);
            stack(0);
            return;
        };
        stack(1);
        stack(1);
        stack(0);
        return;
    };
    if ((((varbitplayer_61516 == 1) && (varbitplayer_61517 == 1)) && (varbitplayer_61515 == 0))) {
        stack(0);
        stack(1);
        stack(1);
        return;
    };
    if ((((varbitplayer_61515 == 1) && (varbitplayer_61517 == 1)) && (varbitplayer_61516 == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    unk11016(`Player God tier 2 alignment var evaluation could not find an appropriate evaluation for: Zamorak (${inttostring(varbitplayer_61515, 10)}); Guthix (${inttostring(varbitplayer_61516, 10)}); Saradomin (${inttostring(varbitplayer_61517, 10)})`);
    stack(0);
    stack(0);
    stack(0);
    return;
}