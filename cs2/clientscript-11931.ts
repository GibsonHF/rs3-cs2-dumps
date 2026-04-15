//
function script11931(int0: int, int1: unknown_int): void {
    if ((int1 != 1)) {
        return;
    };
    script9554(comp(71, 21), comp(71, 29), comp(71, 22), enum_getvalue(0, 36, 10582 as cs2enum, int0), 21217 as struct);
    IF_SETHIDE(false, comp(71, 18));
    var string0 = `${enum_getvalue(0, 36, 16062 as cs2enum, int0)}<br><br>Requires level ${inttostring(enum_getvalue(0, 0, 16061 as cs2enum, int0), 10)} Archaeology.`;
    var string1 = "Fast travel";
    var int2 = false;
    if ((MAP_MEMBERS() == 0)) {
        if ((PLAYERMEMBER() == false)) {
            string0 = `${string0}<br>Members' only location.`;
            string1 = "Subscribe";
        } else {
            string0 = `${string0}<br>This location is unavailable on free worlds.`;
            int2 = true;
        };
    } else if ((script6431() == false)) {
        string0 = `${string0}<br>Keyboard Shortcut : ${script13398(int0)}`;
    };
    IF_SETTEXT(string0, comp(71, 25));
    SOUND_VORBIS_VOLUME(41269 as vorbis, 1, 0, 150);
    script13971(comp(71, 27), comp(71, 28), 28553 as struct, string1, int2);
    return;
}