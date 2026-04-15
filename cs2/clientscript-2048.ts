//
function script2048(int0: component, int1: int, int2: graphic, int3: int, int4: int, int5: int, int6: int, int7: int, int8: boolean, int9: boolean, int10: boolean, int11: unknown_int, int12: coordgrid, string0: string, string1: string): void {
    if ((varbitplayer_27169 == 1)) {
        switch (int2) {
            case 22477: {
                var int2 = 16281 as graphic;
                var int3 = 15;
                var int4 = 15;
                break;
            }
            case 34927: {
                int2 = 1355 as graphic;
                int3 = 15;
                int4 = 15;
                break;
            }
            case 25257: {
                int2 = 34806 as graphic;
                int3 = 15;
                int4 = 15;
                break;
            }
            case 28294: {
                int2 = 28333 as graphic;
                int3 = 15;
                int4 = 15;
                break;
            }
        };
    };
    if ((CC_FIND(int0, int1) == 1)) {
        script2049(int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, string0, string1, int12);
    } else {
        CC_CREATE(int0, 5, int1);
        script2049(int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, string0, string1, int12);
    };
    return;
}