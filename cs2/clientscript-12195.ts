//
function script12195(string0: string): void {
    script12196(0);
    var int0 = comp(1712, 31);  // invent_gizmo:result_feedback
    CC_DELETEALL(int0);
    var int1 = 0;
    var int2 = 5;
    var int3 = 5;
    var int4 = (IF_GETWIDTH(int0) - 10);
    [int1, int2] = script12086(int0, int1, int3, int2, int4, "Oops", 32855);
    int2 = (int2 + 10);
    [int1, int2] = script12086(int0, int1, int3, int2, int4, `${string0}<br><br>You manage to safely recover your materials.`, 29166);
    int2 = (int2 + 10);
    CC_DELETEALL(comp(1712, 36));  // invent_gizmo:repeat_layer
    CC_DELETEALL(comp(1712, 64));  // invent_gizmo:restart_layer
    IF_SETHIDE(false, comp(1712, 43));  // invent_gizmo:repeat_button_disabled_layer
    IF_SETHIDE(true, comp(1712, 60));  // invent_gizmo:restart_button_disabled_layer
    return;
}