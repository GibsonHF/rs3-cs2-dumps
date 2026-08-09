//
function script14866(int0: number): void {
    var int1 = script14596(int0);
    if ((int1 == -1)) {
        return;
    };
    SOUND_VORBIS_VOLUME(47819 as vorbis, 1, 0, 255);
    IF_SETTEXT(dbrow_getfield(int1, 385040, 0), comp(691, 82));
    IF_SETGRAPHIC(dbrow_getfield(int1, 385152, 0), comp(691, 85));
    IF_SETTEXT(script14610(int1), comp(691, 83));
    var string0 = "";
    if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int1, 385072, 0) == 1))) {
        string0 = "You must be on a members' world to harness this.";
    };
    IF_SETTEXT(string0, comp(691, 84));
    script14870();
    IF_SETHIDE(false, comp(691, 73));
    IF_SETHIDE(false, comp(691, 77));
    return;
}