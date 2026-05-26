//
function script2048(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, string0: string, string1: string): void {
    if ((varbitplayer_27169 == 1)) {
        switch (int2) {
            case 22477: {
                var int2 = 16281;
                var int3 = 15;
                var int4 = 15;
                break;
            }
            case 34927: {
                int2 = 1355;
                int3 = 15;
                int4 = 15;
                break;
            }
            case 25257: {
                int2 = 34806;
                int3 = 15;
                int4 = 15;
                break;
            }
            case 28294: {
                int2 = 28333;
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