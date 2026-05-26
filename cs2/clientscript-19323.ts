//
function script19323(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int2 >= CLIENTCLOCK())) {
        return;
    };
    var int5 = (int3 - CLIENTCLOCK());
    if ((int5 <= 0)) {
        IF_SETONTIMER(callback(), int4);
    };
    var int0 = (int0 + IF_GETMODELXOF(int4));
    var int1 = (int1 + IF_GETMODELYOF(int4));
    IF_SETMODELANGLE(int0, int1, IF_GETMODELANGLE_X(int4), IF_GETMODELANGLE_Y(int4), IF_GETMODELANGLE_Z(int4), IF_GETMODELZOOM(int4), int4);
    return;
}