//
function script2848(int0: component, int1: int, int2: component, int3: int, int4: int, int5: int): void {
    var int6 = 0;
    var int7 = 0;
    if ((int2 != comp(-1, 65535))) {
        if ((int3 == -1)) {
            if (((IF_FIND(int2) == 1) && (int2 == comp(474, 11)))) {
                int6 = int4;
                int7 = int5;
                if ((CC_FIND[1](int0, int1) == 1)) {
                    CC_SETPOSITION[1](enum_getvalue(0, 0, 905 as cs2enum, int1), enum_getvalue(0, 0, 906 as cs2enum, int1), 0, 0);
                };
            };
        } else {
            if ((int3 < 9)) {
                return;
            };
            if ((script2849((int3 - 9)) == 0)) {
                if ((CC_FIND(int2, int3) == 1)) {
                    int6 = CC_GETX();
                    int7 = CC_GETY();
                };
                if ((CC_FIND[1](int0, int1) == 1)) {
                    switch (RANDOMINC(2)) {
                        case 0: {
                            SOUND_SYNTH(27872, 1, 0);
                            break;
                        }
                        case 1: {
                            SOUND_SYNTH(34959, 1, 0);
                            break;
                        }
                        case 2: {
                            SOUND_SYNTH(30464, 1, 0);
                            break;
                        }
                    };
                    CC_SETPOSITION[1](int6, int7, 0, 0);
                };
            };
        };
    };
    return;
}