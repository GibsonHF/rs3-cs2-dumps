//
function script15432(int0: component, int1: int): void {
    var int2 = script11948(int1);
    var string0 = "";
    if ((int2 == 0)) {
        string0 = "Rewards you with a choice of two random <col=FF00>Curio Bonuses</col>!";
    } else if ((int2 == 1)) {
        string0 = "Awards a single prize.";
    } else if (((int2 >= 2) && (int2 <= 10))) {
        string0 = `Awards <col=FF00>x${inttostring(int2, 10)}</col> prizes!`;
    };
    if ((int1 > 1)) {
        string0 = strconcat(string0, `<br>Active in ${inttostring(int1, 10)} keys.`);
    } else {
        string0 = strconcat(string0, "<br>Active on your next key.");
    };
    SOUND_VORBIS_VOLUME(36956 as vorbis, 1, 0, 180);
    script426(string0, int0, -1, 0);
    return;
}