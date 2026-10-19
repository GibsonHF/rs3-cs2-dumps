//
function script21143(): void {
    if ((int1 == -1)) {
        var int1 = MAX(0, varbitplayer_62211);
    };
    switch (int0) {
        case 2: {
            IF_SETSIZE(0, 0, 1, 1, comp(1604, 7));  // toplevel_v2_plugin_content:plugin_buttons_layer
            stack(105119753);
            stack(105119748);
            stack(105119754);
            stack(int1);
            script21208();
            break;
        }
        case 1: {
            IF_SETSIZE(0, 0, 1, 1, comp(1586, 8));  // plugin_hub_parent_manage:list_contents
            stack(21193);
            stack(-2147483647);
            stack(-2147483646);
            stack("ii");
            stack(103940099);
            unk11656();
            if ((int2 == 1)) {
                stack(21182);
                stack(103940106);
                stack(103940118);
                stack(103940107);
                stack(int1);
                IF_SETONTIMER("iiii", 103940097);
                IF_SETHIDE(false, comp(1586, 22));  // plugin_hub_parent_manage:uninstall_listener
                IF_SETHIDE(true, comp(1586, 5));  // plugin_hub_parent_manage:sort
            } else {
                stack(103940106);
                stack(103940118);
                stack(103940107);
                stack(int1);
                script21183();
            };
            break;
        }
    };
    return;
}