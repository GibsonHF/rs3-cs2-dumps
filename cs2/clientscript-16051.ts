//
function script16051(): void {
    if ((varbitplayer_50129 == 1)) {
        stack(15198);
        stack(56688648);
        IF_SETGRAPHIC();
        stack(15172);
        stack(56688641);
        IF_SETGRAPHIC();
    } else {
        stack(15202);
        stack(56688648);
        IF_SETGRAPHIC();
        stack(15173);
        stack(56688641);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_50132 == 1)) {
        stack(15195);
        stack(56688649);
        IF_SETGRAPHIC();
        stack(15172);
        stack(56688642);
        IF_SETGRAPHIC();
    } else {
        stack(15196);
        stack(56688649);
        IF_SETGRAPHIC();
        stack(15173);
        stack(56688642);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_50128 == 1)) {
        stack(15185);
        stack(56688650);
        IF_SETGRAPHIC();
        stack(15172);
        stack(56688643);
        IF_SETGRAPHIC();
    } else {
        stack(15186);
        stack(56688650);
        IF_SETGRAPHIC();
        stack(15173);
        stack(56688643);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_50130 == 1)) {
        stack(15188);
        stack(56688651);
        IF_SETGRAPHIC();
        stack(15172);
        stack(56688644);
        IF_SETGRAPHIC();
    } else {
        stack(15189);
        stack(56688651);
        IF_SETGRAPHIC();
        stack(15173);
        stack(56688644);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_50131 == 1)) {
        stack(15191);
        stack(56688652);
        IF_SETGRAPHIC();
        stack(15172);
        stack(56688645);
        IF_SETGRAPHIC();
    } else {
        stack(15192);
        stack(56688652);
        IF_SETGRAPHIC();
        stack(15173);
        stack(56688645);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_50136 == 1)) {
        IF_SETTEXT("Enable Hardmode:", 56688669);
        IF_SETCOLOUR(11837586, 56688669);
        if ((varbitplayer_50127 == 1)) {
            stack(15168);
            stack(56688662);
            IF_SETGRAPHIC();
        } else {
            stack(15166);
            stack(56688662);
            IF_SETGRAPHIC();
        };
    } else {
        IF_SETTEXT("Hardmode locked", 56688669);
        IF_SETCOLOUR(9342606, 56688669);
        stack(15170);
        stack(56688662);
        IF_SETGRAPHIC();
    };
    if ((varbitplayer_50178 > 0)) {
        IF_SETTEXT(`${inttostring(varbitplayer_50178, 10)}% Enrage`, 56688653);
    } else {
        IF_SETTEXT(`${inttostring(varbitplayer_50143, 10)} ${script4583(varbitplayer_50143, "Active Mechanic", "Active Mechanics")}`, 56688653);
    };
    return;
}