//[clientscript,worldmap_key_toggle]
function script286(int0: unknown_int, int1: component, int2: int, int3: int, int4: int, int5: unknown_int, string0: string): void {
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
            CC_SETHIDE(false);
        } else {
            CC_SETHIDE(true);
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