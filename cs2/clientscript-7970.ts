//
function script7970(int0: unknown_int, int1: int): void {
    var int2 = script7974(int0, int1);
    IF_SETOBJECT(-1 as obj, -1, int2);
    stack(-1);
    stack(int2);
    IF_SETGRAPHIC();
    IF_CLEAROPS(int2);
    IF_SETPOSITION(0, 0, 1, 1, int2);
    IF_SETSIZE(0, 0, 1, 1, int2);
    IF_CLEARSCRIPTHOOKS(int2);
    IF_SETTARGETVERB("", int2);
    IF_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642), int2);
    return;
}