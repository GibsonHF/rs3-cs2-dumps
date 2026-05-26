//[clientscript,worldmap_key_toggle]
function script286(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): void {
    if ((int0 != 1)) {
        return;
    };
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETOP(1, string0);
    };
    if ((CC_FIND(int1, int3) == 1)) {
        CC_SETOP(1, string0);
    };
    if ((CC_FIND(int1, int4) == 1)) {
        if ((int5 == 1)) {
            CC_SETHIDE(0);
        } else {
            CC_SETHIDE(1);
        };
    };
    if ((int2 == 11)) {
        WORLDMAP_DISABLEELEMENTCATEGORY(950, int5);
    };
    SOUND_SYNTH(31334, 1, 0);
    if ((int2 == 20)) {
        if ((int5 == 1)) {
            WORLDMAP_DISABLETYPE(1, 0);
            WORLDMAP_DISABLETYPE(2, 0);
            WORLDMAP_DISABLETEXTSIZE(0, 0);
            WORLDMAP_DISABLETEXTSIZE(1, 0);
            WORLDMAP_DISABLETEXTSIZE(2, 0);
        } else {
            script8104();
        };
    };
    return;
}