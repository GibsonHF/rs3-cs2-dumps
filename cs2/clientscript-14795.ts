//
function script14795(int0: number, int1: number): void {
    if ((int1 != 1)) {
        return;
    };
    script9554(43712528, 43712536, 43712529, dbrow_getfield(int0, 352288, 0), 21217);
    IF_SETHIDE(false, comp(667, 13));
    var string0 = `${dbrow_getfield(int0, 352304, 0)}<br><br>Requires level ${inttostring(dbrow_getfield(int0, 352352, 0), 10)} Archaeology.`;
    var string1 = "Fast travel";
    var int2 = 0;
    if ((MAP_MEMBERS() == 0)) {
        if ((dbrow_getfield(int0, 352320, 0) == 1)) {
            if ((PLAYERMEMBER() == 0)) {
                string0 = `${string0}<br>Members' only dig site.`;
                string1 = "Subscribe";
            } else {
                string0 = `${string0}<br>This dig site is unavailable on free worlds.`;
                int2 = 1;
            };
        } else if ((script6431() == 0)) {
            string0 = `${string0}<br>Keyboard Shortcut : ${script14802(int0)}`;
        };
    } else if ((script6431() == 0)) {
        string0 = `${string0}<br>Keyboard Shortcut : ${script14802(int0)}`;
    };
    IF_SETTEXT(string0, comp(667, 20));
    SOUND_VORBIS_VOLUME(41269 as vorbis, 1, 0, 150);
    script13971(43712534, 43712535, 28553, string1, int2);
    return;
}