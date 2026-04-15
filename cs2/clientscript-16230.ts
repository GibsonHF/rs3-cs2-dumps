//
function script16230(int0: component, int1: component, int2: component, int3: component, int4: unknown_int): void {
    var int5 = varplayer_5148;
    var int6 = struct_getparam(int5, 4842);
    IF_SETSIZE(210, 0, 1, 1, int0);
    IF_SETPOSITION(0, 0, 2, 0, int0);
    script16239(int1, int5);
    script16581(int0, int2, int3, int4);
    script20111(struct_getparam(int5, 9331));
    IF_SETONVARTRANSMIT(callback(script16230, int0, int1, int2, int3, 0, 5147, 1), int1);
    return;
}