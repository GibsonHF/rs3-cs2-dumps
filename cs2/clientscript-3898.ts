//
function script3898(int0: int, int1: int, int2: component, int3: int): void {
    if (((CC_FIND(int2, int3) == 1) || ((int3 == -1) && (IF_FIND(int2) == 1)))) {
        CC_SETOPTKEY(int0, int1);
        CC_SETOPTKEYRATE(6, 50);
    };
    return;
}