//
function script1847(int0: int): void {
    var int1 = script10405(int0);
    var int2 = script8418(int1, 0);
    var int3 = struct_getparam(int1, 3509);
    var int4 = struct_getparam(int2, 3610);
    var int5 = 0;
    while ((CC_FIND(int3, int5) == 1)) {
        if ((CC_GETGRAPHIC() == int4)) {
            script1848(int0, CC_GETX());
            return;
        };
        int5 = (int5 + 4);
    };
    return;
}