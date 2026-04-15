//
function script19600(int0: int): [int, obj, int] {
    while ((int0 < 200)) {
        if (((CC_FIND(comp(1313, 75), int0) == 1) && (CC_GETINVOBJECT() != 48447 as obj))) {
            return [int0, CC_GETINVOBJECT(), CC_GETINVCOUNT()];
        };
        var int0 = (int0 + 1);
    };
    return [200, 48447 as obj, 0];
}