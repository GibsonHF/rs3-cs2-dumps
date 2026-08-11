//
function script9023(): void {
    if ((IF_GETHIDE(comp(1345, 73)) == true)) {  // featured_main:crs_req_layer
        IF_SETHIDE(false, comp(1345, 73));  // featured_main:crs_req_layer
        IF_SETGRAPHIC(31348 as graphic, comp(1345, 232));  // featured_main:crs_reqs_met_icon
    } else {
        IF_SETHIDE(true, comp(1345, 73));  // featured_main:crs_req_layer
        IF_SETGRAPHIC(31347 as graphic, comp(1345, 232));  // featured_main:crs_reqs_met_icon
    };
    return;
}