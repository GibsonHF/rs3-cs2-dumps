//
function script8897(): void {
    if ((script9096() == 1)) {
        IF_SETHIDE(1, 116326401);
        IF_SETTRANS(125, 116326400);
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
            IF_SETGRAPHIC(struct_getparam(int0, 6533), 116326402);
            IF_SETGRAPHIC(struct_getparam(int0, 6534), 116326403);
            IF_SETGRAPHIC(struct_getparam(int0, 6535), 116326404);
            IF_SETGRAPHIC(struct_getparam(int0, 6536), 116326405);
            IF_SETGRAPHIC(struct_getparam(int0, 6537), 116326406);
            IF_SETGRAPHIC(struct_getparam(int0, 6538), 116326407);
            IF_SETGRAPHIC(struct_getparam(int0, 6539), 116326408);
            IF_SETGRAPHIC(struct_getparam(int0, 6540), 116326409);
            IF_SETGRAPHIC(struct_getparam(int0, 6541), 116326410);
        };
    };
    IF_SETONRESIZE(callback(script18521, 116326400, 116326401), 116326401);
    return;
}