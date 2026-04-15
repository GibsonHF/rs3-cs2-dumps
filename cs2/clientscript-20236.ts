//
function script20236(): void {
    IF_SETTEXT("For Leagues: CATALYST we have worked with the RuneScape Wiki team to enable the automatic synchronisation of League progression.<br><br>This provides additional statistics around percentages of players completing tasks, and allows you to filter the task list on the RuneScape Wiki task list.", comp(1406, 6));
    if ((script6431() == true)) {
        IF_SETTEXT("", comp(1406, 9));
        IF_SETTEXT("", comp(1406, 10));
    } else {
        IF_SETTEXT("Interface sharing can be accessed from the Options Menu (Escape key) via the Edit Layout Mode button. You may load your main RuneScape interface layout by entering your own display name.", comp(1406, 10));
    };
    IF_SETTEXT("You can change this setting at any time in gameplay settings.", comp(1406, 8));
    if ((varbitplayer_58366 == 1)) {
        IF_SETENABLED(false, comp(1406, 11));
        IF_SETTEXT("Enabled", comp(1406, 11));
    } else {
        IF_SETENABLED(true, comp(1406, 11));
        IF_SETTEXT("Enable WikiSync", comp(1406, 11));
    };
    return;
}