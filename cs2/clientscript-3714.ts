//
function script3714(int0: int, int1: unknown_int, int2: int): void {
    script14186();
    var int3 = script14344(int0);
    if ((int3 == -1 as obj)) {
        return;
    };
    var int4 = script14345(int0);
    switch (int1) {
        case 33882313: {
            script14366(int0, int2);
            script14154();
            return;
        }
        case 33882329: {
            script5780(-1, int0, int2);
            break;
        }
        case 33882127: {
            script3968(int3, int4, int0, 93 as inv, int2);
            break;
        }
        case 33882147: {
            script3968(int3, int4, int0, 530 as inv, int2);
            break;
        }
        case 33882277: {
            script5785(1, int0);
            break;
        }
        case 33882281: {
            script5785(script14372(int2), int0);
            break;
        }
        case 33882317:
        case 33882318: {
            if ((varbitplayer_45141 == 1)) {
                script5785(script14372(int2), int0);
            } else {
                script5785(int2, int0);
            };
            break;
        }
        case 33882140:
        case 33882172: {
            if (((int3 != -1 as obj) && (OC_WEARPOS(int3) != -1))) {
                script3968(int3, int4, int0, 94 as inv, OC_WEARPOS(int3));
            };
            break;
        }
        default: {
            script14219(int1, int0, int3, int4);
            return;
        }
    };
    return;
}