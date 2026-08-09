//
function script10700(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if (((varbitplayer_22875 == int3) || (varbitplayer_22875 == int4))) {
        return;
    };
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            script10644(int2, int5, int6);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        script10644(int2, int5, int6);
    };
    return;
}