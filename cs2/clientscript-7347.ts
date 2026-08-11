//
function script7347(): void {
    if ((IF_GETHIDE(comp(944, 11)) == false)) {  // pop_log:resource_layer
        IF_SETHIDE(true, comp(944, 11));  // pop_log:resource_layer
        IF_SETHIDE(false, comp(944, 10));  // pop_log:ships_layer
    } else if ((IF_GETHIDE(comp(944, 10)) == false)) {  // pop_log:ships_layer
        IF_SETHIDE(true, comp(944, 10));  // pop_log:ships_layer
        IF_SETHIDE(false, comp(944, 76));  // pop_log:people_layer
    } else if ((IF_GETHIDE(comp(944, 76)) == false)) {  // pop_log:people_layer
        IF_SETHIDE(true, comp(944, 76));  // pop_log:people_layer
        IF_SETHIDE(false, comp(944, 104));  // pop_log:stats_layer
    } else {
        IF_SETHIDE(true, comp(944, 104));  // pop_log:stats_layer
        IF_SETHIDE(false, comp(944, 11));  // pop_log:resource_layer
    };
    return;
}