//
function script13522(): void {
    var int0 = IF_GETHEIGHT(comp(1639, 1));  // slayer_count:slayer_data
    var int1 = 36;
    var int2 = 1;
    if ((int0 >= int1)) {
        IF_SETHIDE(false, comp(1639, 1));  // slayer_count:slayer_data
        IF_SETHIDE(false, comp(1639, 2));  // slayer_count:slayer_more_info
        IF_SETONTIMER(callback(script13524, int2, -1, -2147483645), comp(1639, 1));  // slayer_count:slayer_data
        IF_SETONTIMER(callback(script13524, int1, 1, -2147483645), comp(1639, 2));  // slayer_count:slayer_more_info
    };
    return;
}