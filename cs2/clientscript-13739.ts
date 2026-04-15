//
function script13739(int0: int, int1: cs2enum, int2: int): void {
    var int3 = 0;
    switch (IF_GETTOP()) {
        case 1477: {
            int3 = 1;
            break;
        }
        case 906: {
            int3 = 2;
            break;
        }
        default: {
            int3 = 0;
            break;
        }
    };
    var int4 = -1 as struct;
    if ((int1 == 13254 as cs2enum)) {
        int4 = 845 as struct;
    } else {
        int4 = enum_getvalue(0, 73, int1, int2);
    };
    if ((int4 == -1 as struct)) {
        return;
    };
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    var int5 = script2582(int4, int0, int3);
    if ((int5 == 0)) {
        if ((int4 == 845 as struct)) {
            GETDEFAULTWINDOWMODE();
            SETWINDOWMODE(stack());
            script2694(int3, 0, "RuneScape was unable to change to that resolution.<br><br>Please visit our website for more information.");
        } else {
            script2694(int3, 1, "RuneScape was unable to implement that setting.<br><br>Please visit our website for more information.");
        };
    } else if (((int4 != 845 as struct) && (AUTOSETUP_GETLEVEL() != 0))) {
        AUTOSETUP_SETCUSTOM();
    };
    script2596(GETWINDOWMODE(), script2692(), int3);
    return;
}