//
function script19280(): void {
    CC_DELETEALL(84541489);
    CC_DELETEALL(84541490);
    var int0 = DB_GETFIELDCOUNT(varplayer_11902, 1220688);
    var int1 = -1;
    while ((++int1 < int0)) {
        script19283(84541489, 84541490, int1, dbrow_getfield(varplayer_11902, 1220640, 0), dbrow_getfield(varplayer_11902, 1220688, int1));
    };
    return;
}