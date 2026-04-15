//
function script1368(): void {
    IF_SETTEXT(inttostring(varbitplayer_4196, 10), comp(59, 9));
    IF_SETTEXT(inttostring(varbitplayer_4186, 10), comp(59, 4));
    if ((varplayer_1417 == 1)) {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Min`, comp(59, 12));
    } else {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Mins`, comp(59, 12));
    };
    IF_SETTEXT("", comp(59, 6));
    if ((varbitplayer_4184 == 0)) {
        IF_SETTEXT("Safe", comp(59, 5));
        IF_SETCOLOUR(65280, comp(59, 5));
        IF_SETTEXT("", comp(59, 6));
    } else if ((varbitplayer_4184 == 1)) {
        IF_SETTEXT("Taken", comp(59, 5));
        IF_SETCOLOUR(16711680, comp(59, 5));
    } else if ((varbitplayer_4184 == 2)) {
        IF_SETTEXT("Dropped", comp(59, 5));
        IF_SETCOLOUR(16776960, comp(59, 5));
        IF_SETTEXT("", comp(59, 6));
    };
    IF_SETTEXT("", comp(59, 11));
    if ((varbitplayer_4194 == 0)) {
        IF_SETTEXT("Safe", comp(59, 10));
        IF_SETCOLOUR(65280, comp(59, 10));
    } else if ((varbitplayer_4194 == 1)) {
        IF_SETTEXT("Taken", comp(59, 10));
        IF_SETCOLOUR(16711680, comp(59, 10));
        IF_SETTEXT(`by ${varclient_2731}`, comp(59, 11));
    } else if ((varbitplayer_4194 == 2)) {
        IF_SETTEXT("Dropped", comp(59, 10));
        IF_SETCOLOUR(16776960, comp(59, 10));
    };
    if ((varbitplayer_4187 == 0)) {
        IF_SETTEXT(`Health: ${inttostring(varbitplayer_4187, 10)}%`, comp(59, 18));
        IF_SETCOLOUR(16711680, comp(59, 18));
        stack(16874);
        stack(3866647);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT(`Health ${inttostring(varbitplayer_4187, 10)}%`, comp(59, 18));
        IF_SETCOLOUR(65280, comp(59, 18));
        stack(16875);
        stack(3866647);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_4188 == 1)) {
        IF_SETTEXT("Unlocked", comp(59, 19));
        IF_SETCOLOUR(16711680, comp(59, 19));
        stack(16873);
        stack(3866648);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT("Locked", comp(59, 19));
        IF_SETCOLOUR(65280, comp(59, 19));
        stack(16872);
        stack(3866648);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_4189 == 1)) {
        IF_SETTEXT("Cleared", comp(59, 20));
        IF_SETCOLOUR(16711680, comp(59, 20));
    } else {
        IF_SETTEXT("Collapsed", comp(59, 20));
        IF_SETCOLOUR(65280, comp(59, 20));
    };
    if ((varbitplayer_4190 == 1)) {
        IF_SETTEXT("Cleared", comp(59, 21));
        IF_SETCOLOUR(16711680, comp(59, 21));
    } else {
        IF_SETTEXT("Collapsed", comp(59, 21));
        IF_SETCOLOUR(65280, comp(59, 21));
    };
    stack(16870);
    stack(3866649);
    IF_SETGRAPHIC();
    stack(16870);
    stack(3866650);
    IF_SETGRAPHIC();
    if ((varbitplayer_4191 == 1)) {
        IF_SETTEXT("Destroyed", comp(59, 22));
        IF_SETCOLOUR(16711680, comp(59, 22));
    } else {
        IF_SETTEXT("Operational", comp(59, 22));
        IF_SETCOLOUR(65280, comp(59, 22));
    };
    stack(16871);
    stack(3866651);
    IF_SETGRAPHIC();
    return;
}