//
function script19447(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETHIDE(true, int2);
    IF_SETHIDE(false, int3);
    IF_SETNPCMODEL(int0, int3);
    IF_SETMODELANIM(20949 as seq, int3);
    IF_SETMODELANGLE(-50, 105, 0, 0, 0, 500, int3);
    IF_SETHIDE(false, int4);
    IF_SETNPCMODEL(int1, int4);
    IF_SETMODELANIM(20949 as seq, int4);
    IF_SETMODELANGLE(50, 105, 0, 0, 0, 500, int4);
    return;
}