//
function script18779(int0: dbrow): dbrow {
    if ((DB_GETFIELDCOUNT(int0, 1077344) <= 0)) {
        return int0;
    };
    var int1 = dbrow_getfield(int0, 1077344, 0);
    var int2 = dbrow_getfield(int0, 1077360, 0);
    if (((int1 == -1 as cs2enum) || (int2 == -1 as var_reference))) {
        script12478("Attempting to get an emote variant that doesn't exist!");
        return int0;
    };
    return enum_getvalue(0, 74, int1, WORLDMAP_GETDISPLAYCOORD(int2));
}