//
function script11021(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = script11022(int0);
    var int2 = 28692;
    var string0 = "Sort descending";
    if (((script1851() == int1) || (script1852() == int1))) {
        stack(28691);
        stack("Sort ascending");
        [int2, string0] = stack();
    };
    CC_CREATE(int0, 5, 0);
    var int3 = struct_getparam(int2, 3910);
    CC_SETGRAPHIC(int3);
    CC_SETSIZE(struct_getparam(int2, 3915), struct_getparam(int2, 3916), 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETONMOUSEOVER(callback(script44, int0, struct_getparam(int2, 3911)));
    CC_SETONMOUSELEAVE(callback(script44, int0, int3));
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    return;
}