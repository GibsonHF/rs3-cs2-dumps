//
function script3188(int0: int): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = -1;
    var int6 = -1 as npc;
    var int7 = -1 as loc;
    var int8 = false;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    if ((STRING_LENGTH(dbrow_getfield(script3602(int0), 303120, 0)) > 0)) {
        return dbrow_getfield(script3602(int0), 303120, 0);
    };
    stack(dbrow_getfield(script3602(int0), 303344, 0));
    [int1, int2, int3, int4, int6, int7, int8, string0] = stack();
    return string0;
}