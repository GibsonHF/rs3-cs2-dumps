//
function script8897(): void {
    if ((script9096() == 1)) {
        IF_SETHIDE(true, comp(1775, 1));  // newplayer_prompt:nxt_background_layer
        IF_SETTRANS(125, comp(1775, 0));  // newplayer_prompt:backing
        return;
    };
    var int0 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    var int1 = -1 as cs2enum;
    if ((int0 != -1 as struct)) {
        int1 = struct_getparam(int0, 6589);
        if ((int1 != -1 as cs2enum)) {
            int0 = enum_getvalue(0, 73, int1, varclient_6045);
        };
        if ((int0 != -1 as struct)) {
            IF_SETGRAPHIC(struct_getparam(int0, 6533), comp(1775, 2));  // newplayer_prompt:nxt_background_graphic_0
            IF_SETGRAPHIC(struct_getparam(int0, 6534), comp(1775, 3));  // newplayer_prompt:nxt_background_graphic_1
            IF_SETGRAPHIC(struct_getparam(int0, 6535), comp(1775, 4));  // newplayer_prompt:nxt_background_graphic_2
            IF_SETGRAPHIC(struct_getparam(int0, 6536), comp(1775, 5));  // newplayer_prompt:nxt_background_graphic_3
            IF_SETGRAPHIC(struct_getparam(int0, 6537), comp(1775, 6));  // newplayer_prompt:nxt_background_graphic_4
            IF_SETGRAPHIC(struct_getparam(int0, 6538), comp(1775, 7));  // newplayer_prompt:nxt_background_graphic_5
            IF_SETGRAPHIC(struct_getparam(int0, 6539), comp(1775, 8));  // newplayer_prompt:nxt_background_graphic_6
            IF_SETGRAPHIC(struct_getparam(int0, 6540), comp(1775, 9));  // newplayer_prompt:nxt_background_graphic_7
            IF_SETGRAPHIC(struct_getparam(int0, 6541), comp(1775, 10));  // newplayer_prompt:nxt_background_graphic_8
        };
    };
    IF_SETONRESIZE(callback(script18521, 116326400, 116326401), comp(1775, 1));  // newplayer_prompt:nxt_background_layer
    return;
}