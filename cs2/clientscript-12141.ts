//
function script12141(): void {
    script12125();
    IF_SETHIDE(false, comp(1708, 81));  // invent_discovery:prototype_disable_layer
    IF_SETONMOUSEREPEAT(callback(), comp(1708, 81));  // invent_discovery:prototype_disable_layer
    IF_SETHIDE(false, comp(1708, 55));  // invent_discovery:workbench_overlay
    IF_SETHIDE(true, comp(1708, 98));  // invent_discovery:refine_continue_button_layer
    IF_SETTEXT("Creating Prototype...", comp(1708, 97));  // invent_discovery:refine_continue_text
    IF_SETONTIMER(callback(), comp(1708, 55));  // invent_discovery:workbench_overlay
    IF_SETHIDE(false, comp(1708, 95));  // invent_discovery:lightbulb_model
    IF_SETHIDE(true, comp(1708, 96));  // invent_discovery:lightbulb_cracked_model
    IF_SETMODELANIM(27990 as seq, comp(1708, 95));  // invent_discovery:lightbulb_model
    IF_SETMODELANIM(27990 as seq, comp(1708, 96));  // invent_discovery:lightbulb_cracked_model
    return;
}