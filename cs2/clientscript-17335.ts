//
function script17335(int0: npc, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: seq, int8: component, int9: component, int10: component, string0: string): void {
    IF_SETNPCMODEL(int0, int9);
    IF_SETMODELANGLE(int1, int2, int3, int4, int5, int6, int9);
    IF_SETMODELANIM(int7, int9);
    IF_SETTEXT(string0, int10);
    script11619(int8, int9);
    return;
}