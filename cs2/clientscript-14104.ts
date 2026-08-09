//
function script14104(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            CC_SETGRAPHIC(struct_getparam(int4, 3802));
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int4, 3802));
    };
    if ((int2 == -1)) {
        if (((IF_FIND[1](int0) == 1) || (CC_FIND[1](int0, int2) == 1))) {
            CC_SETGRAPHIC[1](struct_getparam(int3, 6976));
        };
    } else if ((CC_FIND[1](int0, int2) == 1)) {
        CC_SETGRAPHIC[1](struct_getparam(int3, 6976));
    };
    return;
}