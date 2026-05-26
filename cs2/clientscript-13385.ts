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
            IF_SETGRAPHIC(int4, 48758814);
            IF_SETPOSITION(struct_getparam(int0, 8688), struct_getparam(int0, 8689), struct_getparam(int0, 5389), struct_getparam(int0, 5388), 48758814);
            IF_SETSIZE(int2, int3, 0, 0, 48758814);
            IF_SETGRAPHIC(struct_getparam(int0, 6533), 48758789);
            IF_SETGRAPHIC(struct_getparam(int0, 6534), 48758790);
            IF_SETGRAPHIC(struct_getparam(int0, 6535), 48758791);
            IF_SETGRAPHIC(struct_getparam(int0, 6536), 48758792);
            IF_SETGRAPHIC(struct_getparam(int0, 6537), 48758793);
            IF_SETGRAPHIC(struct_getparam(int0, 6538), 48758794);
            IF_SETGRAPHIC(struct_getparam(int0, 6539), 48758795);
            IF_SETGRAPHIC(struct_getparam(int0, 6540), 48758796);
            IF_SETGRAPHIC(struct_getparam(int0, 6541), 48758797);
            IF_SETHIDE(0, 48758788);
        };
    };
    return;
}