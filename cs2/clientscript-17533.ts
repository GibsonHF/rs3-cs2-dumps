//
function script17533(int0: dbrow, int1: int): [unknown_int, string] {
    var int2 = 1;
    var string0 = "";
    if ((int1 == -1)) {
        return [int2, string0];
    };
    var int3 = -1 as obj;
    var int4 = 0;
    [int3, int4] = script17504(int0, int1, -1);
    if (((MAP_MEMBERS() == 0) && (OC_MEMBERS(int3) == 1))) {
        string0 = "You need to login to a members' server to use this focus object.";
        int2 = 0;
    } else if (((INV_TOTAL(942 as inv, int3) < int4) && (script2515(93 as inv, int3) < int4))) {
        string0 = `You need ${inttostring(int4, 10)} ${OC_NAME(int3)} for this ritual.`;
        int2 = 0;
    };
    return [int2, string0];
}