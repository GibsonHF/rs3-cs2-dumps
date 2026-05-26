//
function script17056(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETHIDE(1, 70910011);
    IF_SETHIDE(1, 70910012);
    IF_SETHIDE(1, 70910026);
    IF_SETHIDE(1, 70910025);
    IF_SETHIDE(1, 70910027);
    IF_SETHIDE(1, 70910034);
    IF_SETHIDE(1, 70909996);
    IF_SETHIDE(1, 70909997);
    IF_SETHIDE(1, 70909998);
    IF_SETMODELANIM(int4, int1);
    IF_SETMODELANIM(int2, int0);
    IF_SETONTIMER(callback(script17059, SEQLENGTH(int2), int3, int0), int0);
    IF_SETONTIMER(callback(script17057, SEQLENGTH(int4), int1), int1);
    IF_SETONTIMER(callback(script17058, (SEQLENGTH(int4) - 60), int1), 70910000);
    return;
}