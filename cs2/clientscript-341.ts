//
function script341(int0: number, int1: number): void {
    var int2 = 0;
    if ((int1 == 1)) {
        int2 = 1;
    };
    if ((((IF_GETHIDE(int0) == 1) && (int2 == 0)) || ((IF_GETHIDE(int0) == 0) && (int2 == 1)))) {
        IF_SETHIDE(int2, int0);
        script9579(int0);
        script9581(IF_GETPARENTLAYER(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0))));
    };
    return;
}