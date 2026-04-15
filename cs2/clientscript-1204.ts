//[clientscript,rand_model_wobble]
function script1204(int0: component, int1: int, int2: int, int3: int): void {
    var int4 = 100;
    varclient_1186 = MODULO((varclient_1186 + 1), 360);
    IF_SETMODELANGLE(IF_GETMODELXOF(int0), IF_GETMODELYOF(int0), int1, MODULO((int2 + SCALE(int4, 10000, enum_getvalue(0, 0, 3384 as cs2enum, varclient_1186))), 2048), MODULO((int3 + SCALE(int4, 10000, enum_getvalue(0, 0, 3385 as cs2enum, varclient_1186))), 2048), IF_GETMODELZOOM(int0), int0);
    return;
}