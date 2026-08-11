//
function script10162(): void {
    if ((varbitclient_44897 == 1)) {
        IF_SETGRAPHIC(13341 as graphic, comp(279, 11));  // mobile_ribbon_left:activity_tracker_icon
        IF_SETOP(1, "Open", comp(279, 10));  // mobile_ribbon_left:activity_tracker_wrapper
    } else {
        IF_SETGRAPHIC(13342 as graphic, comp(279, 11));  // mobile_ribbon_left:activity_tracker_icon
        IF_SETOP(1, "Close", comp(279, 10));  // mobile_ribbon_left:activity_tracker_wrapper
    };
    return;
}