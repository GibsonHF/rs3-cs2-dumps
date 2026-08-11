//
function script1330(): void {
    if ((IF_GETHIDE(comp(1180, 11)) == true)) {  // rden2_overlay:events_layer
        IF_SETGRAPHIC(3302 as graphic, comp(1180, 30));  // rden2_overlay:showevents_button
        IF_SETHIDE(false, comp(1180, 11));  // rden2_overlay:events_layer
        varclient_1733 = 0;
    } else {
        IF_SETGRAPHIC(3303 as graphic, comp(1180, 30));  // rden2_overlay:showevents_button
        IF_SETHIDE(true, comp(1180, 11));  // rden2_overlay:events_layer
        varclient_1733 = 1;
    };
    return;
}