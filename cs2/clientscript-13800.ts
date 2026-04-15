//
function script13800(int0: component, int1: int): void {
    if ((((varplayer_3916 == 0) && (varplayer_3917 == 0)) && (varplayer_9542 == 0))) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    var int2 = 6452 as cs2enum;
    var int3 = 1;
    var int4 = ENUM_GETOUTPUTCOUNT(int2);
    var int5 = -1 as struct;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((int1 != MODULO(DATE_MINUTES(), 60))) {
        while ((int3 <= int4)) {
            int5 = enum_getvalue(0, 73, int2, int3);
            [int6, int7] = [0, 0];
            if (((int5 != -1 as struct) && (script9178(struct_getparam(int5, 1268)) == 1))) {
                [int6, int7] = script9132(struct_getparam(int5, 1268));
                switch (int6) {
                    case 1:
                    case 2:
                    case 3:
                    case 5: {
                        if ((int7 == 5)) {
                            printmessage(`<col=ee7600>Activity: ${struct_getparam(int5, 1266)} will be available again in 5 minutes.</col>`);
                            int8 = (int8 + 1);
                        };
                        break;
                    }
                };
            };
            int3 = (int3 + 1);
        };
        if ((int8 > 0)) {
            if ((varbitplayer_27171 == 1)) {
                SOUND_SYNTH_VOLUME(885, 1, 0, 255);
            };
            if ((IF_GETHIDE(comp(1234, 2)) == false)) {
                script8054(comp(1234, 2), -1, 0, 200);
            };
        };
        var int1 = MODULO(DATE_MINUTES(), 60);
    };
    IF_SETONTIMER(callback(script13800, int0, int1), int0);
    return;
}