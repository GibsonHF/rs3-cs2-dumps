//
function script6296(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int6);
    script13993(int2, -1, 28556, "");
    IF_SETONINVTRANSMIT(callback(script6311, int0, int1, int2, int3, int4, int5, int6, 398, 1), int1);
    IF_SETONVARCTRANSMIT(callback(script6311, int0, int1, int2, int3, int4, int5, int6, 841, 1), int1);
    script6312(int0, int1, int2, int3, int4, int5, int6);
    return;
}