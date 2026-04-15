//
function script16473(int0: obj, int1: unknown_int, int2: int): void {
    switch (int2) {
        case 1: {
            script2410("", -1, "", -1, "", -1, "", -1, "", -1, item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), int1);
            break;
        }
        default: {
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
            break;
        }
    };
    return;
}