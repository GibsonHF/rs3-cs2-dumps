//
function script5388(): void {
    if ((varbitplayer_27169 == 1)) {
        script8311(2);
    };
    if (((IF_GETHIDE(comp(1473, 12)) == false) || (script6431() == 1))) {  // toplevel_v2_inventory:bonds_pouch_layer
        IF_SETHIDE(true, comp(1473, 12));  // toplevel_v2_inventory:bonds_pouch_layer
        IF_SETHIDE(true, comp(1474, 16));  // toplevel_v2_parent_suboverlay_inventory:bonds_pouch_layer
    } else {
        script12409(96534545);
        IF_SETHIDE(false, comp(1473, 12));  // toplevel_v2_inventory:bonds_pouch_layer
        IF_SETHIDE(false, comp(1474, 16));  // toplevel_v2_parent_suboverlay_inventory:bonds_pouch_layer
    };
    return;
}