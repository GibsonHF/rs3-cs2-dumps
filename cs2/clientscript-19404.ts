//
function script19404(): void {
    IF_SETTEXT("Group Unavailable", comp(1299, 11));  // group_ironman_child:group_name
    IF_SETGRAPHIC(-1 as graphic, comp(1299, 10));  // group_ironman_child:group_prestige
    IF_SETONMOUSEREPEAT(callback(), comp(1299, 10));  // group_ironman_child:group_prestige
    IF_SETTEXT("-", comp(1299, 12));  // group_ironman_child:group_type
    return;
}