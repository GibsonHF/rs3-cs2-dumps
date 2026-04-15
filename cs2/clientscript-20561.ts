//
function script20561(int0: int): void {
    switch (RANDOM(4)) {
        case 0: {
            SOUND_VORBIS_RATE(59083 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 1: {
            SOUND_VORBIS_RATE(59084 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 2: {
            SOUND_VORBIS_RATE(59085 as vorbis, 1, 0, 150, 350);
            break;
        }
        case 3: {
            SOUND_VORBIS_RATE(59086 as vorbis, 1, 0, 150, 350);
            break;
        }
    };
    if ((varplayer_12583 < 1)) {
        script1296("Please select a skill.");
        return;
    };
    var int1 = enum_getvalue(0, 17, 681 as cs2enum, varplayer_12583);
    var int2 = script20456(int1);
    if (((varplayer_12584 + int0) < int2)) {
        varplayer_12584 = (varplayer_12584 + int0);
    } else {
        varplayer_12584 = int2;
    };
    script20576();
    return;
}