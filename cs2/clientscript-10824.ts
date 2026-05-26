//
function script10824(): number {
    var int0 = (script10782(0) + script10782(2));
    var int1 = (script10782(4) * 2);
    var int2 = (script10782(6) * 2);
    var int3 = (script10782(28) * 2);
    var int4 = MAX(MAX(MAX(int0, int1), int2), int3);
    int4 = ((int4 * 13) / 10);
    var int5 = (((((int4 + script10782(1)) + script10782(3)) + (script10782(5) / 2)) + (script10782(23) / 2)) / 4);
    var int6 = (((((int4 + script10782(1)) + script10782(3)) + (script10782(5) / 2)) + 1) / 4);
    if ((MAP_MEMBERS() == 1)) {
        return int5;
    };
    return int6;
}