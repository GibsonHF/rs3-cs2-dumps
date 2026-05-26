//
function script3898(int0: number, int1: number, int2: number, int3: number): void {
    if (((CC_FIND(int2, int3) == 1) || ((int3 == -1) && (IF_FIND(int2) == 1)))) {
        CC_SETOPTKEY(int0, int1);
        CC_SETOPTKEYRATE(6, 50);
    };
    return;
}