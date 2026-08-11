//
function script3007(): void {
    IF_SETHIDE(false, comp(916, 90));  // pop_ship:pop3_ship_sprite
    IF_SETSIZE(191, 200, 0, 0, comp(916, 95));  // pop_ship:deck1_layer
    IF_SETSIZE(374, 110, 0, 0, comp(916, 104));  // pop_ship:hull_layer
    IF_SETPOSITION(-3, 103, 1, 1, comp(916, 104));  // pop_ship:hull_layer
    IF_SETPOSITION(-94, -53, 1, 1, comp(916, 95));  // pop_ship:deck1_layer
    IF_SETPOSITION(96, -67, 1, 1, comp(916, 98));  // pop_ship:deck2_layer
    IF_SETPOSITION(285, 42, 1, 1, comp(916, 101));  // pop_ship:rudder_layer
    IF_SETPOSITION(28, 127, 0, 0, comp(916, 103));  // pop_ship:rudder_target
    IF_SETPOSITION(24, 185, 0, 0, comp(916, 102));  // pop_ship:rudder_text
    IF_SETPOSITION(0, -10, 1, 1, comp(916, 106));  // pop_ship:hull_target
    IF_SETPOSITION(0, 27, 1, 1, comp(916, 105));  // pop_ship:hull_text
    return;
}