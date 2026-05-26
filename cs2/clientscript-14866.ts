//
function script14866(int0: number): void {
    var int1 = script14596(int0);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    SOUND_VORBIS_VOLUME(47819, 1, 0, 255);
    IF_SETTEXT(dbrow_getfield(int1, 385040, 0), 45285458);
    IF_SETGRAPHIC(dbrow_getfield(int1, 385152, 0), 45285461);
    IF_SETTEXT(script14610(int1), 45285459);
    var string0 = "";
    if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int1, 385072, 0) == true))) {
        string0 = "You must be on a members' world to harness this.";
    };
    IF_SETTEXT(string0, 45285460);
    script14870();
    IF_SETHIDE(0, 45285449);
    IF_SETHIDE(0, 45285453);
    return;
}