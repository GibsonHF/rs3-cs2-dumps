//
function script20949(): void {
    if ((((varbitplayer_61512 + varbitplayer_61513) + varbitplayer_61514) == 0)) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if ((varbitplayer_61512 >= 2)) {
        stack(1);
        stack(0);
        stack(0);
        return;
    };
    if ((varbitplayer_61513 >= 2)) {
        stack(0);
        stack(1);
        stack(0);
        return;
    };
    if ((varbitplayer_61514 >= 2)) {
        stack(0);
        stack(0);
        stack(1);
        return;
    };
    if (((varbitplayer_61512 == 1) && ((varbitplayer_61513 + varbitplayer_61514) == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if (((varbitplayer_61513 == 1) && ((varbitplayer_61512 + varbitplayer_61514) == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if (((varbitplayer_61514 == 1) && ((varbitplayer_61512 + varbitplayer_61513) == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    if (((varbitplayer_61512 == 1) && (varbitplayer_61513 == 1))) {
        if ((varbitplayer_61514 == 1)) {
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
    if ((((varbitplayer_61513 == 1) && (varbitplayer_61514 == 1)) && (varbitplayer_61512 == 0))) {
        stack(0);
        stack(1);
        stack(1);
        return;
    };
    if ((((varbitplayer_61512 == 1) && (varbitplayer_61514 == 1)) && (varbitplayer_61513 == 0))) {
        stack(1);
        stack(1);
        stack(1);
        return;
    };
    unk11016(`Player God tier 1 alignment var evaluation could not find an appropriate evaluation for: Zamorak (${inttostring(varbitplayer_61512, 10)}); Guthix (${inttostring(varbitplayer_61513, 10)}); Saradomin (${inttostring(varbitplayer_61514, 10)})`);
    stack(0);
    stack(0);
    stack(0);
    return;
}