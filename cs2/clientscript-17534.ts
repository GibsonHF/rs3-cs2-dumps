//
function script17534(int0: dbrow): [unknown_int, string] {
    var int1 = 0;
    var string0 = "You don't have any of the focus objects required for this ritual.";
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = script17505(int0);
    var int5 = -1;
    while ((++int5 < int4)) {
        [int2, int3] = script17504(int0, -1, int5);
        if ((((INV_TOTAL(942 as inv, int2) >= int3) || (script2515(93 as inv, int2) >= int3)) && ((MAP_MEMBERS() == 1) || (OC_MEMBERS(int2) == 0)))) {
            int1 = 1;
        };
    };
    return [int1, string0];
}