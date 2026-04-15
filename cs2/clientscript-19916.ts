//
function script19916(int0: seq, int1: unknown_int, int2: component): void {
    IF_SETMODELANIM(int0, int2);
    IF_SETONTIMER(callback(script19917, SEQLENGTH(int0), int1, int2), int2);
    return;
}