//
function script15045(int0: int): unknown_int {
    var int1 = script15046(int0);
    if (((INV_FREESPACE(int1) == 2) && (STOCKMARKET_ISOFFERFINISHED(int0, 0) == 1))) {
        varplayer_135 = -1 as obj;
        varplayer_137 = 1n;
        varplayer_136 = 0;
        script15028(int0);
        return 1;
    };
    return 0;
}