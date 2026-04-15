//
function script6444(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        IF_SETOP(1, "Click", comp(1316, 0));
        return;
    };
    var int1 = -1 as graphic;
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
    IF_SETHIDE(int2, comp(1316, 6));
    IF_SETHIDE(int3, comp(1316, 8));
    IF_SETHIDE(int4, comp(1316, 9));
    IF_SETHIDE(int5, comp(1316, 10));
    IF_SETSIZE(dbrow_getfield(int7, 819200, 0), comp(1316, 11));
    IF_SETSIZE(dbrow_getfield(int7, 819216, 0), comp(1316, 0));
    IF_SETPOSITION(dbrow_getfield(int7, 819232, 0), comp(1316, 0));
    stack(int1);
    stack(86245376);
    IF_SETGRAPHIC();
    stack(int7);
    stack(819248);
    stack(0);
    dbrow_getfield();
    IF_SETSIZE(stack(), 86245382);
    stack(int7);
    stack(819264);
    stack(0);
    dbrow_getfield();
    IF_SETPOSITION(stack(), 86245382);
    stack(1);
    stack(int0);
    stack(815456);
    stack(0);
    dbrow_getfield();
    IF_SETOP(stack(), 86245382);
    IF_SETOPCURSOR(1, 210, 86245382);
    if ((((int3 == 0) && (DB_GETFIELDCOUNT(int7, 819280) > 0)) && (DB_GETFIELDCOUNT(int7, 819296) > 0))) {
        IF_SETSIZE(dbrow_getfield(int7, 819280, 0), comp(1316, 8));
        IF_SETPOSITION(dbrow_getfield(int7, 819296, 0), comp(1316, 8));
        IF_SETOP(1, dbrow_getfield(int0, 815472, 0), comp(1316, 8));
        IF_SETOPCURSOR(1, 210 as cursor, comp(1316, 8));
    };
    if ((((int4 == false) && (DB_GETFIELDCOUNT(int7, 819312) > 0)) && (DB_GETFIELDCOUNT(int7, 819328) > 0))) {
        IF_SETSIZE(dbrow_getfield(int7, 819312, 0), comp(1316, 9));
        IF_SETPOSITION(dbrow_getfield(int7, 819328, 0), comp(1316, 9));
        IF_SETOP(1, dbrow_getfield(int0, 815488, 0), comp(1316, 9));
        IF_SETOPCURSOR(1, 210 as cursor, comp(1316, 9));
    };
    if (((((int5 == false) && (DB_GETFIELDCOUNT(int7, 819344) > 0)) && (DB_GETFIELDCOUNT(int7, 819360) > 0)) && (DB_GETFIELDCOUNT(int7, 819376) > 0))) {
        IF_SETPOSITION(dbrow_getfield(int7, 819344, 0), comp(1316, 16));
        IF_SETPOSITION(dbrow_getfield(int7, 819360, 0), comp(1316, 17));
        IF_SETTEXTALIGN(dbrow_getfield(int7, 819376, 0), 0, comp(1316, 17));
    };
    IF_SETHIDE(int6, comp(1316, 7));
    if ((int6 == false)) {
        IF_SETTEXT(dbrow_getfield(int0, 815456, 0), comp(1316, 5));
    };
    return;
}