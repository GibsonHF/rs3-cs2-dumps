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
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script20455(varplayer_12583, varplayer_12584);
    var string1 = "";
    var string2 = "";
    var int3 = script20568(int0);
    if ((int3 == 2)) {
        string1 = "<col=FA3232>You cannot place Bonus XP in this skill as you have reached the 100m Bonus XP cap.</col>";
    } else if ((int3 == 0)) {
        string1 = "<col=FA3232>You cannot place Bonus XP in this skill.</col>";
    } else if ((int3 == 3)) {
        string1 = "<col=FA3232>You cannot place Bonus XP in this skill because it has reached the 200m XP cap.</col>";
    } else {
        if ((int2 == 1)) {
            string1 = "<col=FA3232>You are receiving less Bonus XP as this redemption will exceed the 100m Bonus XP cap.</col><br>";
        };
        string2 = `You will receive ${TOSTRING_LOCALISED(int1, 1)} Bonus XP in ${string0}.`;
    };
    script6046(`${string1}${string2}`, 97321028, 50);
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_12584, 1), comp(1485, 82));
    IF_SETTEXT(`You are using ${inttostring(varplayer_12584, 10)} Radiant ${script4583(varplayer_12584, "Star", "Stars")}.<br>You will receive ${TOSTRING_LOCALISED(int1, 1)} Bonus XP in ${string0}.`, comp(1485, 125));
    script20560();
    return;
}