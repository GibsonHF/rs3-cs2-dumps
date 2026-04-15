//
function script3738(int0: unknown_int, int1: component, int2: unknown_int): void {
    IF_SETOP(1, "Confirm", int1);
    IF_SETONOP(callback(script3741), int1);
    IF_SETONVARTRANSMIT(callback(script3739, int0, int1, int2, 7908, 7908, 2), int0);
    IF_SETONVARCTRANSMIT(callback(script3739, int0, int1, int2, 6409, 6410, 2), int0);
    IF_SETONSTATTRANSMIT(callback(script3739, int0, int1, int2), int0);
    IF_SETONRESIZE(callback(script3739, int0, int1, int2), int0);
    script3740(int0, int1, int2);
    return;
}