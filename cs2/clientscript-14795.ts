//
function script14795(int0: dbrow, int1: unknown_int): void {
    if ((int1 != 1)) {
        return;
    };
    script9554(comp(667, 16), comp(667, 24), comp(667, 17), dbrow_getfield(int0, 352288, 0), 21217 as struct);
    IF_SETHIDE(false, comp(667, 13));
    var string0 = `${dbrow_getfield(int0, 352304, 0)}<br><br>Requires level ${inttostring(dbrow_getfield(int0, 352352, 0), 10)} Archaeology.`;
    var string1 = "Fast travel";
    var int2 = false;
    if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int0, 352320, 0) == true))) {
        if ((PLAYERMEMBER() == false)) {
            string0 = `${string0}<br>Members' only dig site.`;
            string1 = "Subscribe";
        } else {
            string0 = `${string0}<br>This dig site is unavailable on free worlds.`;
            int2 = true;
        };
    } else if ((script6431() == false)) {
        string0 = `${string0}<br>Keyboard Shortcut : ${script14802(int0)}`;
    };
    IF_SETTEXT(string0, comp(667, 20));
    SOUND_VORBIS_VOLUME(41269 as vorbis, 1, 0, 150);
    script13971(comp(667, 22), comp(667, 23), 28553 as struct, string1, int2);
    return;
}