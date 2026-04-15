//
function script12891(int0: obj, int1: unknown_int): void {
    if ((varbitplayer_10542 == 0)) {
        stack(OC_IOP(int0, 1));
        OC_ICURSOR(int0, 1);
        stack(OC_IOP(int0, 2));
        OC_ICURSOR(int0, 2);
        stack("");
        stack(-1);
        stack("");
        stack(-1);
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
        stack("Activate");
        OC_ICURSOR(int0, 1);
        stack(OC_IOP(int0, 2));
        OC_ICURSOR(int0, 2);
        stack("Lletya");
        OC_ICURSOR(int0, 3);
        stack("Temple of Light");
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
    CC_SETONVARTRANSMIT(callback(script6469, -2147483645, -2147483643, int0, int1, 2299, 4772, 2));
    return;
}