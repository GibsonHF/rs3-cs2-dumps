//
function script17297(): [obj, int, string] {
    var string0 = "";
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = -1 as dbrow;
    var int3 = 0;
    var int4 = script17292();
    if ((int4 == -1 as dbrow)) {
        return [int0, int1, string0];
    };
    [int2, int3] = dbrow_getfield(int4, 401440, 0);
    if ((int2 == -1 as dbrow)) {
        return [int0, int1, string0];
    };
    [int0, int1] = dbrow_getfield(int2, 847872, 0);
    if ((script17296() == 19)) {
        string0 = "A random reward of orange rarity!";
    } else if ((int1 > 1)) {
        string0 = `${TOSTRING_LOCALISED(int1, 1)} x ${OC_NAME(int0)}`;
    } else {
        string0 = OC_NAME(int0);
    };
    return [int0, int1, string0];
}