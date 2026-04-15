//
function script3641(int0: int): void {
    var int1 = script3609();
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = -1 as struct;
    var int9 = DB_GETFIELDCOUNT(int1, 299328);
    int5 = script3599(int0);
    while (((int2 < int9) && (int3 <= int0))) {
        [int3, int4, int7, int8, int6] = dbrow_getfield(int1, 299328, int2);
        if ((((int3 == int0) && (AND(int4, varplayer_9062) != 0)) && (AND(int4, int5) == 0))) {
            IF_TRIGGEROP(comp(634, 2), -1, 1);
            return;
        };
        int2 = (int2 + 1);
    };
    script3653(int1);
    return;
}