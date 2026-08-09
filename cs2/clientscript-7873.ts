//
function script7873(int0: number, int1: number, int2: number): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            CC_BUTTON_SETTOGGLED(int2);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_BUTTON_SETTOGGLED(int2);
    };
    return;
}