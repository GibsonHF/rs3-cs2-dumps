//
function script16953(int0: int): string {
    var int1 = script16947(int0);
    var string0 = "";
    var int2 = 0;
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    switch (dbrow_getfield(int1, 843792, 0)) {
        case 0: {
            string0 = `Multiplier - <col=26c914>${inttostring(dbrow_getfield(int1, 843872, 0), 10)}x rewards</col>`;
            break;
        }
        case 1: {
            int2 = dbrow_getfield(int1, 843888, 0);
            stack(PUSH_CONSTANT_INT[16]("Minimum Rarity - <col=", script10925(int2)));
            string0 = `${stack()}${inttostring()}>${script10876(int2)}</col>`;
            break;
        }
        case 2: {
            [int3, int4, int5] = dbrow_getfield(int1, 843904, 0);
            string0 = `Extra Reward - <col=14c3c9>${inttostring(int4, 10)}x ${OC_NAME(int3)}</col>`;
            break;
        }
    };
    return string0;
}