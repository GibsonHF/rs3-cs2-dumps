//
function script17056(int0: component, int1: component, int2: seq, int3: unknown_int, int4: seq): void {
    IF_SETHIDE(true, comp(1082, 59));
    IF_SETHIDE(true, comp(1082, 60));
    IF_SETHIDE(true, comp(1082, 74));
    IF_SETHIDE(true, comp(1082, 73));
    IF_SETHIDE(true, comp(1082, 75));
    IF_SETHIDE(true, comp(1082, 82));
    IF_SETHIDE(true, comp(1082, 44));
    IF_SETHIDE(true, comp(1082, 45));
    IF_SETHIDE(true, comp(1082, 46));
    IF_SETMODELANIM(int4, int1);
    IF_SETMODELANIM(int2, int0);
    IF_SETONTIMER(callback(script17059, SEQLENGTH(int2), int3, int0), int0);
    IF_SETONTIMER(callback(script17057, SEQLENGTH(int4), int1), int1);
    IF_SETONTIMER(callback(script17058, (SEQLENGTH(int4) - 60), int1), 70910000);
    return;
}