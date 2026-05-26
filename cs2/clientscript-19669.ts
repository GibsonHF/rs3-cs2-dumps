//
function script19669(int0: number): void {
    var int1 = -1;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = 1;
    [int1, int5] = script19671(int0);
    int2 = 1;
    if ((int1 == -1)) {
        IF_SETHIDE(1, 61276176);
        return;
    };
    script19668();
    IF_SETHIDE(0, 61276176);
    IF_SETTEXT(`Time Remaining: ${inttostring(int5, 10)} ${script4583(int5, "Day", "Days")}`, 61276250);
    if ((int1 == 58268)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), 61276248);
        IF_SETNPCMODEL(31502, 61276242);
        IF_SETMODELANIM(18015, 61276242);
        IF_SETMODELANGLE(0, 140, 0, 300, 0, 1100, 61276242);
        IF_SETHIDE(0, 61276242);
        return;
    };
    if ((int1 == 58269)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), 61276248);
        IF_SETNPCMODEL(31503, 61276242);
        IF_SETMODELANIM(18015, 61276242);
        IF_SETMODELANGLE(0, 190, 0, 200, 0, 200, 61276242);
        IF_SETHIDE(0, 61276242);
        IF_SETHIDE(1, 61276245);
        IF_SETHIDE(1, 61276241);
        IF_SETHIDE(1, 61276244);
        return;
    };
    if ((int1 == 58270)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), 61276248);
        IF_SETNPCMODEL(32512, 61276242);
        IF_SETMODELANIM(18017, 61276242);
        IF_SETMODELANGLE(0, 140, 0, 500, 0, 1100, 61276242);
        IF_SETHIDE(0, 61276242);
        IF_SETHIDE(1, 61276245);
        IF_SETHIDE(1, 61276241);
        IF_SETHIDE(1, 61276244);
        return;
    };
    if ((int1 == 60090)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), 61276248);
        IF_SETNPCMODEL(32513, 61276242);
        IF_SETMODELANIM(18015, 61276242);
        IF_SETMODELANGLE(0, 190, 0, 200, 0, 200, 61276242);
        IF_SETHIDE(0, 61276242);
        IF_SETHIDE(1, 61276245);
        IF_SETHIDE(1, 61276241);
        IF_SETHIDE(1, 61276244);
        return;
    };
    if ((int1 == 60119)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), 61276248);
        IF_SETNPCMODEL(32514, 61276242);
        IF_SETMODELANIM(18015, 61276242);
        IF_SETMODELANGLE(0, 190, 0, 200, 0, 200, 61276242);
        IF_SETHIDE(0, 61276242);
        IF_SETHIDE(1, 61276245);
        IF_SETHIDE(1, 61276241);
        IF_SETHIDE(1, 61276244);
        return;
    };
    IF_SETHIDE(1, 61276242);
    script19670(14660, int1, int2);
    return;
}