//
function script304(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    SOUND_SYNTH(31334, 1, 0);
    var int1 = WORLDMAP_GETMAP(int0);
    int1 = script2785(int1);
    if ((int1 == -1)) {
        return;
    };
    script2046(93192193);
    varclient_2545 = "";
    script308(93192292);
    IF_SETTEXT(WORLDMAP_GETMAPNAME(int1), 93192286);
    script41(93192266);
    WORLDMAP_SETMAP_COORD_OVERRIDE(int1, int0);
    if ((HAS_HTML5() == 1)) {
        script8102(int1);
        script7954(int0);
    } else {
        WORLDMAP_JUMPTOSOURCECOORD(int0);
    };
    script1372(WORLDMAP_GETCONFIGZOOM(int1), 1);
    script307();
    return;
}