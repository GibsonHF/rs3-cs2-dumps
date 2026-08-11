//
function script14360(int0: number): [number, number, number] {
    while ((int0 < 1820)) {
        if (((CC_FIND(comp(517, 201), int0) == 1) && (CC_GETINVOBJECT() != 48447 as obj))) {  // bank:bank_inv
            return [int0, CC_GETINVOBJECT(), CC_GETINVCOUNT()];
        };
        var int0 = (int0 + 1);
    };
    return [1820, 48447 as obj, 0];
}