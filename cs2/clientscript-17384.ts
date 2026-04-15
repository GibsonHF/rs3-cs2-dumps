//
function script17384(int0: int, int1: int, int2: int, int3: unknown_int): void {
    if ((CC_FIND(comp(517, 201), int0) == 1)) {
        if ((int2 >= int1)) {
            if ((int3 == 1)) {
                script13796(995 as obj, 0);
            } else {
                script13796(-1 as obj, 0);
            };
        } else {
            script13796(995 as obj, (int1 - int2));
        };
    };
    var long0 = INT_TO_LONG(int2);
    var string0 = script17372(ADD_LONG(script5567(), long0), 9, 1);
    IF_SETTEXT(`Coin Pouch: ${string0}`, comp(517, 18));
    script3878(long0, 1, 0);
    return;
}