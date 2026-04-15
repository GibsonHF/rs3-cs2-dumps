//
function script685(int0: component, int1: int, int2: unknown_int, int3: int, int4: int, int5: int): void {
    var int3 = MODULO((int3 + int5), (int4 * 4));
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int3 <= int4)) {
            stack(0);
            stack(0);
            CC_GETMODELANGLE_X();
            CC_SETMODELANGLE(stack(), MODULO((int2 + int3), 2048), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
        } else if ((int3 <= (int4 * 2))) {
            stack(0);
            stack(0);
            CC_GETMODELANGLE_X();
            CC_SETMODELANGLE(stack(), MODULO(((int2 + int4) - (int3 - int4)), 2048), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
        } else if ((int3 <= (int4 * 3))) {
            stack(0);
            stack(0);
            CC_GETMODELANGLE_X();
            CC_SETMODELANGLE(stack(), script686((int2 - (int3 - (int4 * 2))), 2048), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
        } else {
            stack(0);
            stack(0);
            CC_GETMODELANGLE_X();
            CC_SETMODELANGLE(stack(), script686(((int2 - int4) + (int3 - (int4 * 3))), 2048), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
        };
        CC_SETONTIMER(callback(script685, -2147483645, -2147483643, int2, int3, int4, int5));
    };
    return;
}