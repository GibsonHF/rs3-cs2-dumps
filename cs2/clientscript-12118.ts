//
function script12118(): void {
    script12121();
    varclient_5118 = 0;
    varclient_5119 = 0;
    IF_SETPOSITION(0, 80, 1, 1, comp(1708, 19));  // invent_discovery:blueprint_layer
    IF_SETONTIMER(callback(), comp(1708, 19));  // invent_discovery:blueprint_layer
    IF_SETHIDE(true, comp(1708, 37));  // invent_discovery:workspace_layer
    script12145();
    return;
}