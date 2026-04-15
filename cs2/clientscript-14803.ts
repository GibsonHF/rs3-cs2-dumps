//
function script14803(): void {
    IF_SETTEXT(inttostring(STAT_BASE(27 as stat), 10), comp(685, 62));
    IF_SETOPCURSOR(1, 210 as cursor, comp(685, 39));
    if ((varplayer_9309 == -1)) {
        script14807(0);
        script14811(0);
    } else {
        script14807(varplayer_9309);
        script14811(varplayer_9310);
    };
    script14821();
    script14823();
    return;
}