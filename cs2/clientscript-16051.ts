//
function script16051(): void {
    if ((varbitplayer_50129 == 1)) {
        IF_SETGRAPHIC(15198, 56688648);
        IF_SETGRAPHIC(15172, 56688641);
    } else {
        IF_SETGRAPHIC(15202, 56688648);
        IF_SETGRAPHIC(15173, 56688641);
    };
    if ((varbitplayer_50132 == 1)) {
        IF_SETGRAPHIC(15195, 56688649);
        IF_SETGRAPHIC(15172, 56688642);
    } else {
        IF_SETGRAPHIC(15196, 56688649);
        IF_SETGRAPHIC(15173, 56688642);
    };
    if ((varbitplayer_50128 == 1)) {
        IF_SETGRAPHIC(15185, 56688650);
        IF_SETGRAPHIC(15172, 56688643);
    } else {
        IF_SETGRAPHIC(15186, 56688650);
        IF_SETGRAPHIC(15173, 56688643);
    };
    if ((varbitplayer_50130 == 1)) {
        IF_SETGRAPHIC(15188, 56688651);
        IF_SETGRAPHIC(15172, 56688644);
    } else {
        IF_SETGRAPHIC(15189, 56688651);
        IF_SETGRAPHIC(15173, 56688644);
    };
    if ((varbitplayer_50131 == 1)) {
        IF_SETGRAPHIC(15191, 56688652);
        IF_SETGRAPHIC(15172, 56688645);
    } else {
        IF_SETGRAPHIC(15192, 56688652);
        IF_SETGRAPHIC(15173, 56688645);
    };
    if ((varbitplayer_50136 == 1)) {
        IF_SETTEXT("Enable Hardmode:", 56688669);
        IF_SETCOLOUR(11837586, 56688669);
        if ((varbitplayer_50127 == 1)) {
            IF_SETGRAPHIC(15168, 56688662);
        } else {
            IF_SETGRAPHIC(15166, 56688662);
        };
    } else {
        IF_SETTEXT("Hardmode locked", 56688669);
        IF_SETCOLOUR(9342606, 56688669);
        IF_SETGRAPHIC(15170, 56688662);
    };
    if ((varbitplayer_50178 > 0)) {
        IF_SETTEXT(`${inttostring(varbitplayer_50178, 10)}% Enrage`, 56688653);
    } else {
        IF_SETTEXT(`${inttostring(varbitplayer_50143, 10)} ${script4583(varbitplayer_50143, "Active Mechanic", "Active Mechanics")}`, 56688653);
    };
    return;
}