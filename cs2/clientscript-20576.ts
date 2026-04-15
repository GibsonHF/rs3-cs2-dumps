//
function script20576(): void {
    if ((varplayer_12583 == 0)) {
        return;
    };
    switch (RANDOM(6)) {
        case 0: {
            SOUND_VORBIS_RATE(59077 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(59078 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(59079 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(59080 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 4: {
            SOUND_VORBIS_RATE(59081 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 5: {
            SOUND_VORBIS_RATE(59082 as vorbis, 1, 0, 150, 350);
            break;
        }
    };
    var int0 = enum_getvalue(0, 17, 681 as cs2enum, varplayer_12583);
    var string0 = enum_getvalue(17, 36, 680 as cs2enum, int0);
    var int1 = script11151(int0);
    var string1 = `Current ${string0} Bonus XP : ${TOSTRING_LOCALISED((int1 / 10), 1)} / ${TOSTRING_LOCALISED((50000000 / 10), 1)}.<br>`;
    var string2 = "";
    var int2 = script20568(int0);
    if ((int2 == 2)) {
        string2 = `<col=FF0000>You have reached the Bonus XP cap in ${string0}.</col>`;
    } else if ((int2 == 0)) {
        string1 = "";
        string2 = "<col=FF0000>You cannot place Bonus XP in this skill.</col>";
    } else if ((int2 == 3)) {
        string1 = "";
        string2 = "<col=FF0000>You cannot place Bonus XP in this skill because it has reached the 200m cap.</col>";
    } else {
        string2 = `You will receive ${TOSTRING_LOCALISED(script20455(varplayer_12583, varplayer_12584), 1)} Bonus XP in ${string0}.`;
    };
    script6046(`${string1}${string2}`, comp(1485, 68), 50);
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_12584, 1), comp(1485, 82));
    IF_SETTEXT(`You are using ${inttostring(varplayer_12584, 10)} Radiant ${script4583(varplayer_12584, "Star", "Stars")}.<br>You will receive ${TOSTRING_LOCALISED(script20455(varplayer_12583, varplayer_12584), 1)} Bonus XP in ${string0}.`, comp(1485, 125));
    script20560();
    return;
}