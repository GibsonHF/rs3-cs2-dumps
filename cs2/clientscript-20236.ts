//
function script20236(): void {
    IF_SETTEXT("For Leagues: CATALYST we have worked with the RuneScape Wiki team to enable the automatic synchronisation of League progression.<br><br>This provides additional statistics around percentages of players completing tasks, and allows you to filter the task list on the RuneScape Wiki task list.", 92143622);
    if ((script6431() == 1)) {
        IF_SETTEXT("", 92143625);
        IF_SETTEXT("", 92143626);
    } else {
        IF_SETTEXT("Interface sharing can be accessed from the Options Menu (Escape key) via the Edit Layout Mode button. You may load your main RuneScape interface layout by entering your own display name.", 92143626);
    };
    IF_SETTEXT("You can change this setting at any time in gameplay settings.", 92143624);
    if ((varbitplayer_58366 == 1)) {
        IF_SETENABLED(0, 92143627);
        IF_SETTEXT("Enabled", 92143627);
    } else {
        IF_SETENABLED(1, 92143627);
        IF_SETTEXT("Enable WikiSync", 92143627);
    };
    return;
}