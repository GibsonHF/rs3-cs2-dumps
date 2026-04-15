//
function script6296(int0: unknown_int, int1: unknown_int, int2: component, int3: component, int4: component, int5: unknown_int, int6: component): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int6);
    script13993(int2, comp(-1, 65535), 28556 as struct, "");
    IF_SETONINVTRANSMIT(callback(script6311, int0, int1, int2, int3, int4, int5, int6, 398, 1), int1);
    IF_SETONVARCTRANSMIT(callback(script6311, int0, int1, int2, int3, int4, int5, int6, 841, 1), int1);
    script6312(int0, int1, int2, int3, int4, int5, int6);
    return;
}