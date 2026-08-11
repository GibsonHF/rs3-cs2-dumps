//
function script3663(): void {
    var int0 = script3609();
    if ((script246(int0) == 1)) {
        script3665();
        IF_TRIGGEROP(comp(634, 6), -1, 1);  // runepass:close_listener
        IF_SETHIDE(false, comp(634, 204));  // runepass:shop
        IF_SETONOP(callback(script3662), comp(634, 243));  // runepass:back
    } else {
        script3686("The event is no longer active.");
    };
    return;
}