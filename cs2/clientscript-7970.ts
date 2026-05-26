//
function script7970(int0: number, int1: number): void {
    var int2 = script7974(int0, int1);
    IF_SETOBJECT(-1 as obj, -1, int2);
    IF_SETGRAPHIC(-1 as graphic, int2);
    IF_CLEAROPS(int2);
    IF_SETPOSITION(0, 0, 1, 1, int2);
    IF_SETSIZE(0, 0, 1, 1, int2);
    IF_CLEARSCRIPTHOOKS(int2);
    IF_SETTARGETVERB("", int2);
    IF_SETONDRAGCOMPLETE(callback(script7001, -2147483645, -2147483643, -2147483642), int2);
    return;
}