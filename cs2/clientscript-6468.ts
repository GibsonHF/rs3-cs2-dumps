//
function script6468(int0: number, int1: number): void {
    stack(OC_IOP(int0, 2));
    OC_ICURSOR(int0, 2);
    stack(OC_IOP(int0, 1));
    OC_ICURSOR(int0, 1);
    stack(OC_IOP(int0, 3));
    OC_ICURSOR(int0, 3);
    stack(OC_IOP(int0, 4));
    OC_ICURSOR(int0, 4);
    stack(OC_IOP(int0, 5));
    OC_ICURSOR(int0, 5);
    script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
    CC_SETONVARTRANSMIT(callback());
    return;
}