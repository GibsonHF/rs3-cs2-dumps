//
function script6621(int0: component, int1: inv): void {
    var int2 = 0;
    while ((int2 < 100)) {
        if ((INV_GETOBJ(int1, int2) == 7099 as obj)) {
            if ((CC_FIND(int0, int2) == 1)) {
                CC_SETGRAPHIC(12187 as graphic);
            };
        } else if (((((((((INV_GETOBJ(int1, int2) == 3873 as obj) || (INV_GETOBJ(int1, int2) == 3874 as obj)) || (INV_GETOBJ(int1, int2) == 3875 as obj)) || (INV_GETOBJ(int1, int2) == 3876 as obj)) || (INV_GETOBJ(int1, int2) == 3877 as obj)) || (INV_GETOBJ(int1, int2) == 3878 as obj)) || (INV_GETOBJ(int1, int2) == 3870 as obj)) && (CC_FIND(int0, int2) == 1))) {
            CC_SETGRAPHIC(12186 as graphic);
        };
        int2 = (int2 + 1);
    };
    return;
}