//
function script12194(): void {
    IF_SETHIDE(false, comp(1712, 25));  // invent_gizmo:create_button_disabled_layer
    IF_SETHIDE(false, comp(1712, 43));  // invent_gizmo:repeat_button_disabled_layer
    IF_SETHIDE(false, comp(1712, 60));  // invent_gizmo:restart_button_disabled_layer
    script12196(0);
    var int0 = comp(1712, 31);  // invent_gizmo:result_feedback
    CC_DELETEALL(int0);
    var int1 = 0;
    [int1, int1] = script12086(int0, 0, 5, 5, IF_GETWIDTH(int0), "Creating new gizmo...", 32855);
    var int2 = 0;
    while ((CC_FIND(comp(1712, 36), int2) == 1)) {  // invent_gizmo:repeat_layer
        CC_SETCOLOUR(8421504);
        int2 = (int2 + 1);
    };
    int2 = 0;
    while ((CC_FIND(comp(1712, 64), int2) == 1)) {  // invent_gizmo:restart_layer
        CC_SETCOLOUR(8421504);
        int2 = (int2 + 1);
    };
    return;
}