//
function script13385(): void {
    var int0 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    var int1 = -1 as cs2enum;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as graphic;
    if ((int0 != -1 as struct)) {
        int1 = struct_getparam(int0, 6589);
        if ((int1 != -1 as cs2enum)) {
            int0 = enum_getvalue(0, 73, int1, varclient_6045);
        };
        if ((int0 != -1 as struct)) {
            int2 = struct_getparam(int0, 6587);
            int3 = struct_getparam(int0, 6588);
            switch (MAP_LANG()) {
                case 1: {
                    int4 = struct_getparam(int0, 6432);
                    break;
                }
                case 2: {
                    int4 = struct_getparam(int0, 6433);
                    break;
                }
                case 3: {
                    int4 = struct_getparam(int0, 7959);
                    break;
                }
            };
            if ((int4 == -1 as graphic)) {
                int4 = struct_getparam(int0, 6586);
            };
            IF_SETGRAPHIC(int4, comp(744, 30));  // loginscreen:runescape_logo
            IF_SETPOSITION(struct_getparam(int0, 8688), struct_getparam(int0, 8689), struct_getparam(int0, 5389), struct_getparam(int0, 5388), comp(744, 30));  // loginscreen:runescape_logo
            IF_SETSIZE(int2, int3, 0, 0, comp(744, 30));  // loginscreen:runescape_logo
            IF_SETGRAPHIC(struct_getparam(int0, 6533), comp(744, 5));  // loginscreen:nxt_background_graphic_0
            IF_SETGRAPHIC(struct_getparam(int0, 6534), comp(744, 6));  // loginscreen:nxt_background_graphic_1
            IF_SETGRAPHIC(struct_getparam(int0, 6535), comp(744, 7));  // loginscreen:nxt_background_graphic_2
            IF_SETGRAPHIC(struct_getparam(int0, 6536), comp(744, 8));  // loginscreen:nxt_background_graphic_3
            IF_SETGRAPHIC(struct_getparam(int0, 6537), comp(744, 9));  // loginscreen:nxt_background_graphic_4
            IF_SETGRAPHIC(struct_getparam(int0, 6538), comp(744, 10));  // loginscreen:nxt_background_graphic_5
            IF_SETGRAPHIC(struct_getparam(int0, 6539), comp(744, 11));  // loginscreen:nxt_background_graphic_6
            IF_SETGRAPHIC(struct_getparam(int0, 6540), comp(744, 12));  // loginscreen:nxt_background_graphic_7
            IF_SETGRAPHIC(struct_getparam(int0, 6541), comp(744, 13));  // loginscreen:nxt_background_graphic_8
            IF_SETHIDE(false, comp(744, 4));  // loginscreen:nxt_background_layer
        };
    };
    return;
}