//
function script12130(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if ((int0 == -1)) {
        IF_SETTEXT("No Project", comp(1708, 59));  // invent_discovery:subject_title
        IF_SETTEXT("Select a project from the list on the left to begin.", comp(1708, 60));  // invent_discovery:subject_extra_info
        IF_SETGRAPHIC(24225 as graphic, comp(1708, 61));  // invent_discovery:subject_icon
        varbitplayer_30250 = 0;
        return;
    };
    IF_SETTEXT(dbrow_getfield(int0, 20496, 0), comp(1708, 59));  // invent_discovery:subject_title
    IF_SETTEXT(string0, comp(1708, 60));  // invent_discovery:subject_extra_info
    IF_SETGRAPHIC(dbrow_getfield(int0, 20560, 0), comp(1708, 61));  // invent_discovery:subject_icon
    varplayer_5992 = int0;
    varbitplayer_30250 = 1;
    varclient_5118 = int2;
    varclient_5119 = int3;
    varplayer_5994 = int2;
    varplayer_5995 = int3;
    varclient_5116 = int1;
    IF_SETONTIMER(callback(), comp(1708, 37));  // invent_discovery:workspace_layer
    IF_SETHIDE(false, comp(1708, 19));  // invent_discovery:blueprint_layer
    IF_SETHIDE(false, comp(1708, 58));  // invent_discovery:workspace_prototype_buttons
    IF_SETHIDE(false, comp(1708, 20));  // invent_discovery:workbench_parts_layer
    IF_SETHIDE(true, comp(1708, 57));  // invent_discovery:workspace_track_buttons
    IF_SETHIDE(true, comp(1708, 21));  // invent_discovery:workbench_track_layer
    IF_SETHIDE(false, comp(1708, 37));  // invent_discovery:workspace_layer
    IF_SETTEXT("Select five modules to build the prototype.", comp(1708, 41));  // invent_discovery:instructions_text
    IF_SETPOSITION(0, 35, 1, 1, comp(1708, 19));  // invent_discovery:blueprint_layer
    IF_SETONTIMER(callback(), comp(1708, 19));  // invent_discovery:blueprint_layer
    script12128();
    script12121();
    script12145();
    return;
}