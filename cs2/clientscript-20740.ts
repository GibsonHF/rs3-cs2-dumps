//
function script20740(): void {
    if (((IF_HASSUBOVERLAY(comp(1477, 816), 1512 as overlayinterface) == 0) || (varbitclient_61229 == 1))) {  // toplevel_v2:fixed_overlay_windows
        return;
    };
    IF_SETONRESIZE(callback(script20741, -1), comp(1512, 10));  // house_furniture_catalogue:filters
    IF_CALLONRESIZE(comp(1512, 10));  // house_furniture_catalogue:filters
    return;
}