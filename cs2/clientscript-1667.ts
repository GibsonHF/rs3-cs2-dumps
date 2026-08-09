//
function script1667(int0: number, int1: number): void {
    CC_SETONVARTRANSMIT(callback(script6469, -2147483645, -2147483643, int0, int1, 7910, 1));
    switch (varbitplayer_40405) {
        case 20: {
            stack(OC_IOP(int0, 1));
            OC_ICURSOR(int0, 1);
            stack("");
            stack(-1);
            stack(OC_IOP(int0, 3));
            OC_ICURSOR(int0, 3);
            stack(OC_IOP(int0, 4));
            OC_ICURSOR(int0, 4);
            stack(OC_IOP(int0, 5));
            OC_ICURSOR(int0, 5);
            script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
            return;
        }
        case 35: {
            stack(OC_IOP(int0, 1));
            OC_ICURSOR(int0, 1);
            stack(OC_IOP(int0, 2));
            OC_ICURSOR(int0, 2);
            stack(OC_IOP(int0, 3));
            OC_ICURSOR(int0, 3);
            stack("");
            stack(-1);
            stack(OC_IOP(int0, 5));
            OC_ICURSOR(int0, 5);
            script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
            return;
        }
    };
    stack(OC_IOP(int0, 1));
    OC_ICURSOR(int0, 1);
    stack("");
    stack(-1);
    stack("");
    stack(-1);
    stack("");
    stack(-1);
    stack(OC_IOP(int0, 5));
    OC_ICURSOR(int0, 5);
    script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
    return;
}