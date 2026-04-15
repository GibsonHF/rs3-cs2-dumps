//
function script3740(int0: component, int1: component, int2: component): void {
    CC_DELETEALL(int0);
    if (((varclient_6410 == 0) && (varclient_6409 == 0))) {
        IF_SETHIDE(false, int1);
        script3743("Choose a skill, column, row or corner...", int2, 50);
        return;
    };
    IF_SETHIDE(true, int1);
    var int3 = 0;
    var string0 = "null";
    if ((varclient_6409 != 0)) {
        while ((int3 < varclient_6409)) {
            CC_CREATE(int0, 3, int3);
            CC_SETHIDE(true);
            int3 = (int3 + 1);
        };
        CC_CREATE(int0, 3, int3);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETTRANS(255);
        string0 = `Confirm: ${enum_getvalue(0, 36, 108 as cs2enum, varclient_6409)}`;
    } else {
        while ((int3 < varclient_6410)) {
            CC_CREATE(int0, 3, int3);
            CC_SETHIDE(true);
            int3 = (int3 + 1);
        };
        CC_CREATE(int0, 3, int3);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETTRANS(255);
        switch (varclient_6410) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9: {
                string0 = `Confirm: Column ${inttostring(varclient_6410, 10)} selected.`;
                SOUND_VORBIS_VOLUME(2341 as vorbis, 1, 0, 130);
                break;
            }
            case 10:
            case 11:
            case 12:
            case 13: {
                string0 = `Confirm: Row ${inttostring((varclient_6410 - 9), 10)} selected.`;
                SOUND_VORBIS_VOLUME(2341 as vorbis, 1, 0, 130);
                break;
            }
            case 20:
            case 21:
            case 22:
            case 23: {
                string0 = "Confirm: Corner selected.";
                SOUND_VORBIS_VOLUME(2341 as vorbis, 1, 0, 130);
                break;
            }
        };
    };
    script3743(string0, int2, 50);
    return;
}