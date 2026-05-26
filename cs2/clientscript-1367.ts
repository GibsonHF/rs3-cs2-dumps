//
function script1367(): void {
    IF_SETTEXT(inttostring(varbitplayer_4196, 10), comp(58, 15));
    IF_SETTEXT(inttostring(varbitplayer_4186, 10), comp(58, 11));
    if ((varplayer_1417 == 1)) {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Min`, comp(58, 20));
    } else {
        IF_SETTEXT(`${inttostring(varplayer_1417, 10)} Mins`, comp(58, 20));
    };
    IF_SETTEXT("", comp(58, 13));
    if ((varbitplayer_4184 == 0)) {
        IF_SETTEXT("Safe", comp(58, 12));
        IF_SETCOLOUR(65280, comp(58, 12));
        IF_SETTEXT("", comp(58, 13));
    } else if ((varbitplayer_4184 == 1)) {
        IF_SETTEXT("Taken", comp(58, 12));
        IF_SETCOLOUR(16711680, comp(58, 12));
        IF_SETTEXT(`by ${varclient_2731}`, comp(58, 13));
    } else if ((varbitplayer_4184 == 2)) {
        IF_SETTEXT("Dropped", comp(58, 12));
        IF_SETCOLOUR(16776960, comp(58, 12));
        IF_SETTEXT("", comp(58, 13));
    };
    IF_SETTEXT("", comp(58, 17));
    if ((varbitplayer_4194 == 0)) {
        IF_SETTEXT("Safe", comp(58, 16));
        IF_SETCOLOUR(65280, comp(58, 16));
    } else if ((varbitplayer_4194 == 1)) {
        IF_SETTEXT("Taken", comp(58, 16));
        IF_SETCOLOUR(16711680, comp(58, 16));
    } else if ((varbitplayer_4194 == 2)) {
        IF_SETTEXT("Dropped", comp(58, 16));
        IF_SETCOLOUR(16776960, comp(58, 16));
    };
    if ((varbitplayer_4177 == 0)) {
        IF_SETTEXT(`Health: ${inttostring(varbitplayer_4177, 10)}%`, comp(58, 0));
        IF_SETCOLOUR(16711680, comp(58, 0));
        IF_SETGRAPHIC(16874 as graphic, comp(58, 5));
    } else {
        IF_SETTEXT(`Health ${inttostring(varbitplayer_4177, 10)}%`, comp(58, 0));
        IF_SETCOLOUR(65280, comp(58, 0));
        IF_SETGRAPHIC(16875 as graphic, comp(58, 5));
    };
    if ((varbitplayer_4178 == 1)) {
        IF_SETTEXT("Unlocked", comp(58, 1));
        IF_SETCOLOUR(16711680, comp(58, 1));
        IF_SETGRAPHIC(16873 as graphic, comp(58, 6));
    } else {
        IF_SETTEXT("Locked", comp(58, 1));
        IF_SETCOLOUR(65280, comp(58, 1));
        IF_SETGRAPHIC(16872 as graphic, comp(58, 6));
    };
    if ((varbitplayer_4179 == 1)) {
        IF_SETTEXT("Cleared", comp(58, 2));
        IF_SETCOLOUR(16711680, comp(58, 2));
    } else {
        IF_SETTEXT("Collapsed", comp(58, 2));
        IF_SETCOLOUR(65280, comp(58, 2));
    };
    if ((varbitplayer_4180 == 1)) {
        IF_SETTEXT("Cleared", comp(58, 3));
        IF_SETCOLOUR(16711680, comp(58, 3));
    } else {
        IF_SETTEXT("Collapsed", comp(58, 3));
        IF_SETCOLOUR(65280, comp(58, 3));
    };
    IF_SETGRAPHIC(16870 as graphic, comp(58, 7));
    IF_SETGRAPHIC(16870 as graphic, comp(58, 8));
    if ((varbitplayer_4181 == 1)) {
        IF_SETTEXT("Destroyed", comp(58, 4));
        IF_SETCOLOUR(16711680, comp(58, 4));
    } else {
        IF_SETTEXT("Operational", comp(58, 4));
        IF_SETCOLOUR(65280, comp(58, 4));
    };
    IF_SETGRAPHIC(16871 as graphic, comp(58, 9));
    return;
}