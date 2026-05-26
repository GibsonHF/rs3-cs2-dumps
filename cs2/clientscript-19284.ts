//
function script19284(): void {
    script19221(dbrow_getfield(varplayer_11902, 1224752, 0), 84541469);
    IF_SETPOSITION(0, 0, 1, 1, 84541469);
    script19222(dbrow_getfield(varplayer_11902, 1224768, 0), 84541468);
    IF_SETPOSITION(0, 0, 1, 1, 84541468);
    var string0 = dbrow_getfield(varplayer_11902, 1224720, 0);
    var string1 = dbrow_getfield(varplayer_11902, 1224736, 0);
    IF_SETOPBASE(`<col=FFFF00>${string0}</col>`, 84541484);
    IF_SETONOP(callback(script7774, string1, -2147483645, -2147483643, 0), 84541484);
    script19285(1);
    script19285(2);
    script19270(84541634, 84541636);
    return;
}