//
function script17911(int0: dbrow): unknown_int {
    if ((script17853() == -1 as dbrow)) {
        return 0;
    };
    if ((script11939() == 1)) {
        return 0;
    };
    var int1 = 0;
    if ((DB_GETROWTABLE(int0) == 134)) {
        if ((DB_GETFIELDCOUNT(int0, 549168) == 0)) {
            script12478(`Expecting a custom amount on bp3 package - ${dbrow_getfield(int0, 548864, 0)}`);
            return 0;
        };
        int1 = dbrow_getfield(int0, 549168, 0);
    };
    var int2 = script17928(script17853());
    if (((int2 + int1) >= 1000000)) {
        return 0;
    };
    return 1;
}