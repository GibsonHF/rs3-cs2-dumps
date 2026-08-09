//
function script6664(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(int1) == 1)) {
        if ((int2 > 0)) {
            stack(CC_GETMODELXOF());
            stack(CC_GETMODELYOF());
            CC_GETMODELANGLE_X();
            CC_SETMODELANGLE(script686((CC_GETMODELANGLE_Y() - 10), 2048), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
        } else if ((int2 < 0)) {
            stack(CC_GETMODELXOF());
            stack(CC_GETMODELYOF());
            CC_GETMODELANGLE_X();
            CC_SETMODELANGLE(MODULO((CC_GETMODELANGLE_Y() + 10), 2048), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
        } else {
            int3 = CC_GETMODELANGLE_Y();
            if ((int3 > 1024)) {
                int4 = (int3 + 15);
                if ((int4 >= 2048)) {
                    int4 = 0;
                };
                stack(CC_GETMODELXOF());
                stack(CC_GETMODELYOF());
                CC_GETMODELANGLE_X();
                CC_SETMODELANGLE(int4, CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
            } else if ((int3 > 0)) {
                stack(CC_GETMODELXOF());
                stack(CC_GETMODELYOF());
                CC_GETMODELANGLE_X();
                CC_SETMODELANGLE(MAX((int3 - 15), 0), CC_GETMODELANGLE_Z(), CC_GETMODELZOOM());
            } else {
                CC_SETONTIMER(callback());
            };
        };
    };
    return;
}