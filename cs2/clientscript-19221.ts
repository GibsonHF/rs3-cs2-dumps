//
function script19221(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    IF_SETNPCMODEL(int0, int8);
    IF_SETMODELANGLE(int2, int3, int4, int5, int6, int7, int8);
    IF_SETMODELANIM(BAS_GETANIM_READY(int1), int8);
    return;
}