//
function script1368(): void {
    IF_SETTEXT(inttostring(varbitplayer_4196, 10), 3866633);
    IF_SETTEXT(inttostring(varbitplayer_4186, 10), 3866628);
    if ((varplayer_1417 == 1)) {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Min`, 3866636);
    } else {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Mins`, 3866636);
    };
    IF_SETTEXT("", 3866630);
    if ((varbitplayer_4184 == 0)) {
        IF_SETTEXT("Safe", 3866629);
        IF_SETCOLOUR(65280, 3866629);
        IF_SETTEXT("", 3866630);
    } else if ((varbitplayer_4184 == 1)) {
        IF_SETTEXT("Taken", 3866629);
        IF_SETCOLOUR(16711680, 3866629);
    } else if ((varbitplayer_4184 == 2)) {
        IF_SETTEXT("Dropped", 3866629);
        IF_SETCOLOUR(16776960, 3866629);
        IF_SETTEXT("", 3866630);
    };
    IF_SETTEXT("", 3866635);
    if ((varbitplayer_4194 == 0)) {
        IF_SETTEXT("Safe", 3866634);
        IF_SETCOLOUR(65280, 3866634);
    } else if ((varbitplayer_4194 == 1)) {
        IF_SETTEXT("Taken", 3866634);
        IF_SETCOLOUR(16711680, 3866634);
        IF_SETTEXT(`by ${varclient_2731}`, 3866635);
    } else if ((varbitplayer_4194 == 2)) {
        IF_SETTEXT("Dropped", 3866634);
        IF_SETCOLOUR(16776960, 3866634);
    };
    if ((varbitplayer_4187 == 0)) {
        IF_SETTEXT(`Health: ${inttostring(varbitplayer_4187, 10)}%`, 3866642);
        IF_SETCOLOUR(16711680, 3866642);
        IF_SETGRAPHIC(16874, 3866647);
    } else {
        IF_SETTEXT(`Health ${inttostring(varbitplayer_4187, 10)}%`, 3866642);
        IF_SETCOLOUR(65280, 3866642);
        IF_SETGRAPHIC(16875, 3866647);
    };
    if ((varbitplayer_4188 == 1)) {
        IF_SETTEXT("Unlocked", 3866643);
        IF_SETCOLOUR(16711680, 3866643);
        IF_SETGRAPHIC(16873, 3866648);
    } else {
        IF_SETTEXT("Locked", 3866643);
        IF_SETCOLOUR(65280, 3866643);
        IF_SETGRAPHIC(16872, 3866648);
    };
    if ((varbitplayer_4189 == 1)) {
        IF_SETTEXT("Cleared", 3866644);
        IF_SETCOLOUR(16711680, 3866644);
    } else {
        IF_SETTEXT("Collapsed", 3866644);
        IF_SETCOLOUR(65280, 3866644);
    };
    if ((varbitplayer_4190 == 1)) {
        IF_SETTEXT("Cleared", 3866645);
        IF_SETCOLOUR(16711680, 3866645);
    } else {
        IF_SETTEXT("Collapsed", 3866645);
        IF_SETCOLOUR(65280, 3866645);
    };
    IF_SETGRAPHIC(16870, 3866649);
    IF_SETGRAPHIC(16870, 3866650);
    if ((varbitplayer_4191 == 1)) {
        IF_SETTEXT("Destroyed", 3866646);
        IF_SETCOLOUR(16711680, 3866646);
    } else {
        IF_SETTEXT("Operational", 3866646);
        IF_SETCOLOUR(65280, 3866646);
    };
    IF_SETGRAPHIC(16871, 3866651);
    return;
}