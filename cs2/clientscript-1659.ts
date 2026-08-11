//
function script1659(): void {
    if ((varclient_1733 == 1)) {
        IF_SETGRAPHIC(3303 as graphic, comp(1180, 30));  // rden2_overlay:showevents_button
        IF_SETHIDE(true, comp(1180, 11));  // rden2_overlay:events_layer
        IF_SETOP(1, "Hide", comp(1180, 43));  // rden2_overlay:minimise_button
    };
    if ((varclient_1734 == 1)) {
        IF_SET2DANGLE(32768, comp(1180, 43));  // rden2_overlay:minimise_button
        IF_SETHIDE(true, comp(1180, 41));  // rden2_overlay:info_layer
        IF_SETSIZE(172, 50, 0, 0, comp(1180, 6));  // rden2_overlay:gold_frame_2_layer
        IF_SETOP(1, "Unhide", comp(1180, 43));  // rden2_overlay:minimise_button
    };
    return;
}