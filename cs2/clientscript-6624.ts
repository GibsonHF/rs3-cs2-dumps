//
function script6624(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 86;
    if ((varbitplayer_3944 == 1)) {
    } else {
        if ((int4 != varbitplayer_3945)) {
            if ((varbitplayer_3945 == 1)) {
                var int0 = comp(1323, 94);
                var int4 = 1;
            } else {
                int0 = comp(1323, 22);
                int4 = 0;
            };
            if ((varbitplayer_3942 == 0)) {
                var int2 = 15;
                var int1 = 15;
            } else if ((varbitplayer_3942 == 1)) {
                int2 = 30;
                int1 = 30;
            } else if ((varbitplayer_3942 == 2)) {
                int2 = 60;
                int1 = 60;
            } else if ((varbitplayer_3942 == 3)) {
                int2 = 120;
                int1 = 120;
            };
            IF_SETSIZE(IF_GETWIDTH(int0), int7, 0, 0, int0);
        };
        if ((CLIENTCLOCK() > int3)) {
            int5 = SCALE(int1, int2, 100);
            int6 = ((int5 * int7) / 100);
            IF_SETSIZE(IF_GETWIDTH(int0), int6, 0, 0, int0);
            var int3 = (CLIENTCLOCK() + 25);
            int1 = (int1 - 1);
            SOUND_VORBIS_VOLUME(16938 as vorbis, 1, 0, 100);
            SOUND_VORBIS_VOLUME(16938 as vorbis, 1, 16, 50);
        };
    };
    IF_SETONTIMER(callback(script6624, int0, int1, int2, int3, int4), 86704129);
    return;
}