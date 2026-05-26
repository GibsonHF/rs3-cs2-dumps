//
function script16051(): void {
    if ((varbitplayer_50129 == 1)) {
        IF_SETGRAPHIC(15198 as graphic, comp(865, 8));
        IF_SETGRAPHIC(15172 as graphic, comp(865, 1));
    } else {
        IF_SETGRAPHIC(15202 as graphic, comp(865, 8));
        IF_SETGRAPHIC(15173 as graphic, comp(865, 1));
    };
    if ((varbitplayer_50132 == 1)) {
        IF_SETGRAPHIC(15195 as graphic, comp(865, 9));
        IF_SETGRAPHIC(15172 as graphic, comp(865, 2));
    } else {
        IF_SETGRAPHIC(15196 as graphic, comp(865, 9));
        IF_SETGRAPHIC(15173 as graphic, comp(865, 2));
    };
    if ((varbitplayer_50128 == 1)) {
        IF_SETGRAPHIC(15185 as graphic, comp(865, 10));
        IF_SETGRAPHIC(15172 as graphic, comp(865, 3));
    } else {
        IF_SETGRAPHIC(15186 as graphic, comp(865, 10));
        IF_SETGRAPHIC(15173 as graphic, comp(865, 3));
    };
    if ((varbitplayer_50130 == 1)) {
        IF_SETGRAPHIC(15188 as graphic, comp(865, 11));
        IF_SETGRAPHIC(15172 as graphic, comp(865, 4));
    } else {
        IF_SETGRAPHIC(15189 as graphic, comp(865, 11));
        IF_SETGRAPHIC(15173 as graphic, comp(865, 4));
    };
    if ((varbitplayer_50131 == 1)) {
        IF_SETGRAPHIC(15191 as graphic, comp(865, 12));
        IF_SETGRAPHIC(15172 as graphic, comp(865, 5));
    } else {
        IF_SETGRAPHIC(15192 as graphic, comp(865, 12));
        IF_SETGRAPHIC(15173 as graphic, comp(865, 5));
    };
    if ((varbitplayer_50136 == 1)) {
        IF_SETTEXT("Enable Hardmode:", comp(865, 29));
        IF_SETCOLOUR(11837586, comp(865, 29));
        if ((varbitplayer_50127 == 1)) {
            IF_SETGRAPHIC(15168 as graphic, comp(865, 22));
        } else {
            IF_SETGRAPHIC(15166 as graphic, comp(865, 22));
        };
    } else {
        IF_SETTEXT("Hardmode locked", comp(865, 29));
        IF_SETCOLOUR(9342606, comp(865, 29));
        IF_SETGRAPHIC(15170 as graphic, comp(865, 22));
    };
    if ((varbitplayer_50178 > 0)) {
        IF_SETTEXT(`${inttostring(varbitplayer_50178, 10)}% Enrage`, comp(865, 13));
    } else {
        IF_SETTEXT(`${inttostring(varbitplayer_50143, 10)} ${script4583(varbitplayer_50143, "Active Mechanic", "Active Mechanics")}`, comp(865, 13));
    };
    return;
}