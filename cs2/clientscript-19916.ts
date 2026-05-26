//
function script19916(int0: number, int1: number, int2: number): void {
    IF_SETMODELANIM(int0, int2);
    IF_SETONTIMER(callback(script19917, SEQLENGTH(int0), int1, int2), int2);
    return;
}