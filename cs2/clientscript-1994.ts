//
function script1994(int0: component, int1: int, int2: int, int3: int): void {
    CC_DELETEALL(int0);
    var int4 = 66;
    var int5 = 96;
    var int6 = ((int1 - CLIENTCLOCK()) / 50);
    if ((int6 < 0)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((int6 < 10)) {
        if ((int6 == 0)) {
            int4 = 576;
        };
        if ((int6 != int2)) {
            SOUND_VORBIS_VOLUME(7653 as vorbis, 1, 0, 200);
            CC_CREATE(int0, 5, 0);
            CC_SETSIZE(int4, int5, 0, 0);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETGRAPHIC(script1995(int6, 0));
            var int2 = int6;
            var int3 = 100;
            if ((int6 == 0)) {
                SOUND_VORBIS_VOLUME(16806 as vorbis, 1, 0, 100);
                SOUND_VORBIS_VOLUME(7649 as vorbis, 1, 0, 155);
            };
        } else {
            int3 = (int3 - 2);
            int4 = SCALE(int4, 100, int3);
            int5 = SCALE(int5, 100, int3);
            CC_CREATE(int0, 5, 0);
            CC_SETSIZE(int4, int5, 0, 0);
            CC_SETPOSITION(0, 0, 1, 1);
            CC_SETGRAPHIC(script1995(int6, 0));
            int2 = int6;
        };
    } else {
        CC_CREATE(int0, 5, 0);
        CC_SETSIZE(int4, int5, 0, 0);
        CC_SETPOSITION((-1 * int4), 0, 1, 1);
        CC_SETGRAPHIC(script1995((int6 / 10), 0));
        CC_CREATE(int0, 5, 1);
        CC_SETSIZE(int4, int5, 0, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETGRAPHIC(script1995(MODULO(int6, 10), 1));
    };
    IF_SETONTIMER(callback(script1994, int0, int1, int6, int3), 68157442);
    return;
}