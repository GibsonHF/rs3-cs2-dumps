//
function script6444(int0: number): void {
    if ((int0 == -1)) {
        IF_SETOP(1, "Click", comp(1316, 0));  // wof_login_popup:bg1
        return;
    };
    var int1 = -1;
    var int2 = script245(dbrow_getfield(int0, 815312, 0));
    var int3 = script245(dbrow_getfield(int0, 815328, 0));
    var int4 = script245(dbrow_getfield(int0, 815344, 0));
    var int5 = dbrow_getfield(int0, 815264, 0);
    var int6 = dbrow_getfield(int0, 815536, 0);
    var int7 = dbrow_getfield(int0, 815520, 0);
    switch (MAP_LANG()) {
        case 1: {
            int1 = dbrow_getfield(int0, 815152, 0);
            break;
        }
        case 2: {
            int1 = dbrow_getfield(int0, 815168, 0);
            break;
        }
        case 3: {
            int1 = dbrow_getfield(int0, 815184, 0);
            break;
        }
        default: {
            int1 = dbrow_getfield(int0, 815136, 0);
            break;
        }
    };
    IF_SETHIDE(int2, comp(1316, 6));  // wof_login_popup:active_layer_primary
    IF_SETHIDE(int3, comp(1316, 8));  // wof_login_popup:active_layer_secondary
    IF_SETHIDE(int4, comp(1316, 9));  // wof_login_popup:active_layer_tertiary
    IF_SETHIDE(int5, comp(1316, 10));  // wof_login_popup:tickbox_layer
    IF_SETSIZE(dbrow_getfield(int7, 819200, 0), comp(1316, 11));  // wof_login_popup:bespoke_window
    IF_SETSIZE(dbrow_getfield(int7, 819216, 0), 86245376);
    IF_SETPOSITION(dbrow_getfield(int7, 819232, 0), 86245376);
    IF_SETGRAPHIC(int1, comp(1316, 0));  // wof_login_popup:bg1
    IF_SETSIZE(dbrow_getfield(int7, 819248, 0), 86245382);
    IF_SETPOSITION(dbrow_getfield(int7, 819264, 0), 86245382);
    IF_SETOP(1, dbrow_getfield(int0, 815456, 0), 86245382);
    IF_SETOPCURSOR(1, 210, comp(1316, 6));  // wof_login_popup:active_layer_primary
    if ((((int3 == 0) && (DB_GETFIELDCOUNT(int7, 819280) > 0)) && (DB_GETFIELDCOUNT(int7, 819296) > 0))) {
        IF_SETSIZE(dbrow_getfield(int7, 819280, 0), 86245384);
        IF_SETPOSITION(dbrow_getfield(int7, 819296, 0), 86245384);
        IF_SETOP(1, dbrow_getfield(int0, 815472, 0), 86245384);
        IF_SETOPCURSOR(1, 210, comp(1316, 8));  // wof_login_popup:active_layer_secondary
    };
    if ((((int4 == 0) && (DB_GETFIELDCOUNT(int7, 819312) > 0)) && (DB_GETFIELDCOUNT(int7, 819328) > 0))) {
        IF_SETSIZE(dbrow_getfield(int7, 819312, 0), 86245385);
        IF_SETPOSITION(dbrow_getfield(int7, 819328, 0), 86245385);
        IF_SETOP(1, dbrow_getfield(int0, 815488, 0), 86245385);
        IF_SETOPCURSOR(1, 210, comp(1316, 9));  // wof_login_popup:active_layer_tertiary
    };
    if (((((int5 == 0) && (DB_GETFIELDCOUNT(int7, 819344) > 0)) && (DB_GETFIELDCOUNT(int7, 819360) > 0)) && (DB_GETFIELDCOUNT(int7, 819376) > 0))) {
        IF_SETPOSITION(dbrow_getfield(int7, 819344, 0), 86245392);
        IF_SETPOSITION(dbrow_getfield(int7, 819360, 0), 86245393);
        IF_SETTEXTALIGN(dbrow_getfield(int7, 819376, 0), 0, 86245393);
    };
    IF_SETHIDE(int6, comp(1316, 7));  // wof_login_popup:extra_btn_layer
    if ((int6 == 0)) {
        IF_SETTEXT(dbrow_getfield(int0, 815456, 0), 86245381);
    };
    return;
}