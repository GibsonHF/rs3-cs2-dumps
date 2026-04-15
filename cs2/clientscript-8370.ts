//
function script8370(int0: int, int1: int): void {
    var int2 = script10405(int0);
    var int3 = struct_getparam(script8418(int2, 0), 3613);
    var int4 = struct_getparam(script8418(int2, 0), 3610);
    var int5 = struct_getparam(int2, 3509);
    var int6 = 0;
    var int7 = script8374(int5);
    while ((int6 < int7)) {
        if ((CC_FIND(int5, script8373(int6)) == 1)) {
            if ((int6 == int1)) {
                CC_SETGRAPHIC(int4);
                script1848(int0, CC_GETX());
            } else {
                CC_SETGRAPHIC(int3);
            };
        };
        int6 = (int6 + 1);
    };
    return;
}