//[clientscript,rcguild_overlay_load]
function script731(): void {
    IF_SETMODEL(-1 as model, comp(781, 5));  // rcguild_overlay:model_altar_1
    IF_SETMODEL(-1 as model, comp(781, 6));  // rcguild_overlay:model_altar_2
    IF_SETMODEL(-1 as model, comp(781, 7));  // rcguild_overlay:model_altar_3
    IF_SETMODEL(-1 as model, comp(781, 8));  // rcguild_overlay:model_altar_4
    IF_SETMODEL(-1 as model, comp(781, 9));  // rcguild_overlay:model_altar_5
    IF_SETMODEL(-1 as model, comp(781, 10));  // rcguild_overlay:model_altar_6
    IF_SETMODEL(-1 as model, comp(781, 11));  // rcguild_overlay:model_altar_7
    IF_SETMODEL(-1 as model, comp(781, 12));  // rcguild_overlay:model_altar_8
    IF_SETMODELANIM(10139 as seq, comp(781, 21));  // rcguild_overlay:green_timer
    IF_SETMODELANIM(10139 as seq, comp(781, 29));  // rcguild_overlay:yellow_timer
    IF_SETHIDE(true, comp(781, 38));  // rcguild_overlay:flash_text
    return;
}