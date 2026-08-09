//
function script6370(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 != comp(-1, 65535))) {
        if ((int1 == -1)) {
            if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
                if ((script6353() == 1)) {
                    script6372(int3, int2);
                    return;
                };
            };
        } else if (((CC_FIND(int0, int1) == 1) && (script6353() == 1))) {
            script6372(int3, int2);
            return;
        };
    };
    script6371(int3, int4);
    return;
}