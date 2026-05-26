//
function script13072(int0: number, int1: number, int2: number): void {
    if ((int0 == -1)) {
        return;
    };
    var string0 = strconcat("Name: ", struct_getparam(int0, 6299));
    var string1 = strconcat("<br>Description: ", struct_getparam(int0, 6300));
    var string2 = strconcat("<br>Length: ", inttostring(MAX(1, struct_getparam(int0, 6301)), 10));
    var string3 = strconcat(strconcat(string0, string1), string2);
    IF_SETONMOUSEREPEAT(callback(script3876, string3, int1, int2), int1);
    return;
}