//
function script1520(int0: number, int1: number): void {
    if ((script1413(40722) == 2)) {
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
        script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
    } else {
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
        script2410(item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
    };
    return;
}