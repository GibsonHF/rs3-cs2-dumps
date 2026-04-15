//
function script19669(int0: int): void {
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = 1;
    [int1, int5] = script19671(int0);
    int2 = 1;
    if ((int1 == -1 as obj)) {
        IF_SETHIDE(true, comp(935, 16));
        return;
    };
    script19668();
    IF_SETHIDE(false, comp(935, 16));
    IF_SETTEXT(`Time Remaining: ${inttostring(int5, 10)} ${script4583(int5, "Day", "Days")}`, comp(935, 90));
    if ((int1 == 58268 as obj)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), comp(935, 88));
        IF_SETNPCMODEL(31502 as npc, comp(935, 82));
        IF_SETMODELANIM(18015 as seq, comp(935, 82));
        IF_SETMODELANGLE(0, 140, 0, 300, 0, 1100, comp(935, 82));
        IF_SETHIDE(false, comp(935, 82));
        return;
    };
    if ((int1 == 58269 as obj)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), comp(935, 88));
        IF_SETNPCMODEL(31503 as npc, comp(935, 82));
        IF_SETMODELANIM(18015 as seq, comp(935, 82));
        IF_SETMODELANGLE(0, 190, 0, 200, 0, 200, comp(935, 82));
        IF_SETHIDE(false, comp(935, 82));
        IF_SETHIDE(true, comp(935, 85));
        IF_SETHIDE(true, comp(935, 81));
        IF_SETHIDE(true, comp(935, 84));
        return;
    };
    if ((int1 == 58270 as obj)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), comp(935, 88));
        IF_SETNPCMODEL(32512 as npc, comp(935, 82));
        IF_SETMODELANIM(18017 as seq, comp(935, 82));
        IF_SETMODELANGLE(0, 140, 0, 500, 0, 1100, comp(935, 82));
        IF_SETHIDE(false, comp(935, 82));
        IF_SETHIDE(true, comp(935, 85));
        IF_SETHIDE(true, comp(935, 81));
        IF_SETHIDE(true, comp(935, 84));
        return;
    };
    if ((int1 == 60090 as obj)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), comp(935, 88));
        IF_SETNPCMODEL(32513 as npc, comp(935, 82));
        IF_SETMODELANIM(18015 as seq, comp(935, 82));
        IF_SETMODELANGLE(0, 190, 0, 200, 0, 200, comp(935, 82));
        IF_SETHIDE(false, comp(935, 82));
        IF_SETHIDE(true, comp(935, 85));
        IF_SETHIDE(true, comp(935, 81));
        IF_SETHIDE(true, comp(935, 84));
        return;
    };
    if ((int1 == 60119 as obj)) {
        IF_SETTEXT(script4583(int2, OC_NAME(int1), `${script11601(int2, 1)} x ${OC_NAME(int1)}`), comp(935, 88));
        IF_SETNPCMODEL(32514 as npc, comp(935, 82));
        IF_SETMODELANIM(18015 as seq, comp(935, 82));
        IF_SETMODELANGLE(0, 190, 0, 200, 0, 200, comp(935, 82));
        IF_SETHIDE(false, comp(935, 82));
        IF_SETHIDE(true, comp(935, 85));
        IF_SETHIDE(true, comp(935, 81));
        IF_SETHIDE(true, comp(935, 84));
        return;
    };
    IF_SETHIDE(true, comp(935, 82));
    script19670(14660 as dbrow, int1, int2);
    return;
}