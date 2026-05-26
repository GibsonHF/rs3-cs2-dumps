//
function script3365(int0: number): number {
    var int1 = IF_GETX(int0);
    var int2 = IF_GETLAYER(int0);
    while ((int2 != -1)) {
        int1 = ((int1 + IF_GETX(int2)) - IF_GETSCROLLX(int2));
        int2 = IF_GETLAYER(int2);
    };
    return int1;
}