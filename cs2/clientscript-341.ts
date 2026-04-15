//
function script341(int0: component, int1: int): void {
    var int2 = false;
    if ((int1 == 1)) {
        int2 = true;
    };
    if ((((IF_GETHIDE(int0) == true) && (int2 == false)) || ((IF_GETHIDE(int0) == false) && (int2 == true)))) {
        IF_SETHIDE(int2, int0);
        script9579(int0);
        script9581(IF_GETPARENTLAYER(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0))));
    };
    return;
}