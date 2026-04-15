//
function script19221(int0: npc, int1: bas, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: component): void {
    IF_SETNPCMODEL(int0, int8);
    IF_SETMODELANGLE(int2, int3, int4, int5, int6, int7, int8);
    IF_SETMODELANIM(BAS_GETANIM_READY(int1), int8);
    return;
}