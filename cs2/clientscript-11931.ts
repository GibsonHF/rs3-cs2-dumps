//
function script11931(int0: number, int1: number): void {
    if ((int1 != 1)) {
        return;
    };
    script9554(4653077, 4653085, 4653078, enum_getvalue(0, 36, 10582 as cs2enum, int0), 21217);
    IF_SETHIDE(false, comp(71, 18));  // arch_orthen_site_map:popup_window
    var string0 = `${enum_getvalue(0, 36, 16062, int0)}<br><br>Requires level ${inttostring(enum_getvalue(0, 0, 16061, int0), 10)} Archaeology.`;
    var string1 = "Fast travel";
    var int2 = 0;
    if ((MAP_MEMBERS() == 0)) {
        if ((PLAYERMEMBER() == 0)) {
            string0 = `${string0}<br>Members' only location.`;
            string1 = "Subscribe";
        } else {
            string0 = `${string0}<br>This location is unavailable on free worlds.`;
            int2 = 1;
        };
    } else if ((script6431() == 0)) {
        string0 = `${string0}<br>Keyboard Shortcut : ${script13398(int0)}`;
    };
    IF_SETTEXT(string0, comp(71, 25));  // arch_orthen_site_map:site_info_text
    SOUND_VORBIS_VOLUME(41269 as vorbis, 1, 0, 150);
    script13971(4653083, 4653084, 28553, string1, int2);
    return;
}