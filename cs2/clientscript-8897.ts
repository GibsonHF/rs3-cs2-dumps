//
function script8897(): void {
    if ((script9096() == 1)) {
        IF_SETHIDE(true, comp(1775, 1));
        IF_SETTRANS(125, comp(1775, 0));
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
            stack(struct_getparam(int0, 6533));
            stack(116326402);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6534);
            struct_getparam();
            stack(116326403);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6535);
            struct_getparam();
            stack(116326404);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6536);
            struct_getparam();
            stack(116326405);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6537);
            struct_getparam();
            stack(116326406);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6538);
            struct_getparam();
            stack(116326407);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6539);
            struct_getparam();
            stack(116326408);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6540);
            struct_getparam();
            stack(116326409);
            IF_SETGRAPHIC();
            stack(int0);
            stack(6541);
            struct_getparam();
            stack(116326410);
            IF_SETGRAPHIC();
        };
    };
    IF_SETONRESIZE(callback(script18521, 116326400, 116326401), comp(1775, 1));
    return;
}