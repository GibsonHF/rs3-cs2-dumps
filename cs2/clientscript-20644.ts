//
function script20644(int0: int, int1: int): unknown_int {
    var int2 = WORLDMAP_LISTELEMENT_START(1425680, 0, 3, 0);
    var int3 = -1;
    if ((int0 == 0)) {
        int3 = WORLDMAP_LISTELEMENT_START(1425424, 0, 4, 0);
    } else {
        int3 = WORLDMAP_LISTELEMENT_START(1425424, int0, 3, 0);
    };
    int2 = IF_SETPLAYERHEAD_SELF(int2, int3);
    var int4 = -1;
    var int5 = -1;
    if ((STRING_LENGTH(varclient_8377) > 0)) {
        int4 = IF_SETONDROPDOWNSELECT(1425456, varclient_8377, 0);
        int5 = script20645();
        int4 = unk11014(int4, int5);
        int2 = IF_SETPLAYERHEAD_SELF(int2, int4);
    };
    var int6 = WORLDMAP_LISTELEMENT_START(1425440, int1, 3, 0);
    int2 = IF_SETPLAYERHEAD_SELF(int2, int6);
    return int2;
}