//
function script1155(int0: int): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    [int1, int2, int3, int4] = script1163(int0);
    if ((int1 == -1)) {
        return;
    };
    script1156(int2);
    script1156(int3);
    script1156(int4);
    IF_SETONVARTRANSMIT(callback(script1160, int0, int2, int3, int4, 8101, 8102, 2), int1);
    IF_SETONMOUSEOVER(callback(script1166, int2, int3, int4), int1);
    IF_SETONMOUSELEAVE(callback(script1205, int2, int3, int4), int1);
    IF_SETONOP(callback(script1116, int0), int1);
    IF_SETOP(1, "Unlock", int1);
    return;
}