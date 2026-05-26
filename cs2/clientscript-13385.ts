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
            IF_SETGRAPHIC(int4, comp(744, 30));
            IF_SETPOSITION(struct_getparam(int0, 8688), struct_getparam(int0, 8689), struct_getparam(int0, 5389), struct_getparam(int0, 5388), comp(744, 30));
            IF_SETSIZE(int2, int3, 0, 0, comp(744, 30));
            IF_SETGRAPHIC(struct_getparam(int0, 6533), comp(744, 5));
            IF_SETGRAPHIC(struct_getparam(int0, 6534), comp(744, 6));
            IF_SETGRAPHIC(struct_getparam(int0, 6535), comp(744, 7));
            IF_SETGRAPHIC(struct_getparam(int0, 6536), comp(744, 8));
            IF_SETGRAPHIC(struct_getparam(int0, 6537), comp(744, 9));
            IF_SETGRAPHIC(struct_getparam(int0, 6538), comp(744, 10));
            IF_SETGRAPHIC(struct_getparam(int0, 6539), comp(744, 11));
            IF_SETGRAPHIC(struct_getparam(int0, 6540), comp(744, 12));
            IF_SETGRAPHIC(struct_getparam(int0, 6541), comp(744, 13));
            IF_SETHIDE(false, comp(744, 4));
        };
    };
    return;
}