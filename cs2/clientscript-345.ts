//
function script345(): void {
    if ((varplayer_6361 == -1 as struct)) {
        return;
    };
    IF_SETGRAPHIC(struct_getparam(varplayer_6361, 5482), comp(1769, 0));  // minimal_popup:minimal_sprite_component
    IF_SETSIZE((struct_getparam(varplayer_6361, 5483) + 4), (struct_getparam(varplayer_6361, 5484) + 4), 0, 0, comp(1769, 2));  // minimal_popup:universe
    IF_SETSIZE(struct_getparam(varplayer_6361, 5483), struct_getparam(varplayer_6361, 5484), 0, 0, comp(1769, 0));  // minimal_popup:minimal_sprite_component
    IF_SETPOSITION(0, 0, 0, 0, comp(1769, 0));  // minimal_popup:minimal_sprite_component
    IF_SETSIZE(struct_getparam(varplayer_6361, 5487), struct_getparam(varplayer_6361, 5488), 0, 0, comp(1769, 1));  // minimal_popup:invis_button
    IF_SETPOSITION(struct_getparam(varplayer_6361, 5485), struct_getparam(varplayer_6361, 5486), 0, 0, comp(1769, 1));  // minimal_popup:invis_button
    return;
}