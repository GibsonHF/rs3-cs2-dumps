//
function script6186(int0: obj, int1: unknown_int): void {
    if ((INV_GETVAR(93 as inv, CC_GETID(), 16521) > 0)) {
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
        stack(int0);
        stack(5410);
        item_getparam();
        stack(int0);
        stack(5411);
        item_getparam();
        stack(int0);
        stack(5412);
        item_getparam();
        script2410(stack(), OC_NAME(int0), int1);
    } else {
        stack(OC_IOP(int0, 1));
        OC_ICURSOR(int0, 1);
        stack(OC_IOP(int0, 2));
        OC_ICURSOR(int0, 2);
        stack(OC_IOP(int0, 3));
        OC_ICURSOR(int0, 3);
        stack(OC_IOP(int0, 4));
        OC_ICURSOR(int0, 4);
        stack(OC_IOP(int0, 5));
        OC_ICURSOR(int0, 5);
        stack(int0);
        stack(5410);
        item_getparam();
        stack(int0);
        stack(5411);
        item_getparam();
        stack(int0);
        stack(5412);
        item_getparam();
        script2410(stack(), OC_NAME(int0), int1);
    };
    CC_SETONVARTRANSMIT(callback(script6469, -2147483645, -2147483643, int0, int1, 3214, 1));
    return;
}