//
function script19282(): void {
    CC_DELETEALL(84541495);
    CC_DELETEALL(84541496);
    var int0 = DB_GETFIELDCOUNT(varplayer_11902, 1220720);
    var int1 = -1;
    while ((++int1 < int0)) {
        script19283(84541495, 84541496, int1, dbrow_getfield(varplayer_11902, 1220640, 0), dbrow_getfield(varplayer_11902, 1220720, int1));
    };
    return;
}