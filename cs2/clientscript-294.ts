//[clientscript,worldmap_choosemap]
function script294(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    SOUND_SYNTH(31334, 1, 0);
    var int0 = script2785(int0);
    if ((int0 == WORLDMAP_GETCURRENTMAP())) {
        script291(0, int1, int2, int3, int4, int5);
        return;
    };
    varclient_2545 = "";
    script308(int4);
    script2046(int5);
    script41(93192266);
    WORLDMAP_SETMAP(int0);
    if ((HAS_HTML5() == 1)) {
        script7953(int0);
        script8102(int0);
    };
    script1372(WORLDMAP_GETCONFIGZOOM(int0), 1);
    script307();
    script291(0, int1, int2, int3, int4, int5);
    return;
}