//
function script20847(): number {
    var int0 = script15113();
    var int1 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(1552464, int0, 2, 0), WORLDMAP_LISTELEMENT_START(1552480, int0, 4, 0));
    CC_SETPARAM_STRING(int1, 1552464, 1, -1, 0);
    return dbrow_findnext();
}