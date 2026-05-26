//
function script19600(int0: number): [number, number, number] {
    while ((int0 < 200)) {
        if (((CC_FIND(86048843, int0) == 1) && (CC_GETINVOBJECT() != 48447))) {
            return [int0, CC_GETINVOBJECT(), CC_GETINVCOUNT()];
        };
        var int0 = (int0 + 1);
    };
    return [200, 48447, 0];
}