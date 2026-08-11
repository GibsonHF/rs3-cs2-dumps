//
function script15332(): void {
    if ((IF_FIND(comp(1851, 40)) == 1)) {  // achievements_sub:build_layer
        cc_setparam(7161, -1);
    };
    CC_DELETEALL(comp(1851, 41));  // achievements_sub:cheevo_details
    IF_SETHIDE(true, comp(1851, 41));  // achievements_sub:cheevo_details
    return;
}