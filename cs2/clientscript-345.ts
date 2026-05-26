//
function script345(): void {
    if ((varplayer_6361 == -1 as struct)) {
        return;
    };
    IF_SETGRAPHIC(struct_getparam(varplayer_6361, 5482), 115933184);
    IF_SETSIZE((struct_getparam(varplayer_6361, 5483) + 4), (struct_getparam(varplayer_6361, 5484) + 4), 0, 0, 115933186);
    IF_SETSIZE(struct_getparam(varplayer_6361, 5483), struct_getparam(varplayer_6361, 5484), 0, 0, 115933184);
    IF_SETPOSITION(0, 0, 0, 0, 115933184);
    IF_SETSIZE(struct_getparam(varplayer_6361, 5487), struct_getparam(varplayer_6361, 5488), 0, 0, 115933185);
    IF_SETPOSITION(struct_getparam(varplayer_6361, 5485), struct_getparam(varplayer_6361, 5486), 0, 0, 115933185);
    return;
}