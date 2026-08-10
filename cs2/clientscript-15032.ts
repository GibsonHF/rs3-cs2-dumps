//
function script15032(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    while ((int0 < 3)) {
        int1 = INV_GETOBJ(1012 as inv, int0);
        if ((int1 != -1 as obj)) {
            int2 = INV_GETNUM(1012 as inv, int0);
            if ((int2 > 0)) {
                int6 = 1;
                int3 = script14349(int1, int2);
                int4 = (int2 - int3);
                if ((script2294(1012, int1, int4, int0) == 1)) {
                    int5 = 1;
                };
            };
        };
        int0 = (int0 + 1);
    };
    if ((int6 == 0)) {
        script14152("The survivalist bag is already empty.");
    } else if ((int5 == 0)) {
        script14152("You don't have enough space in your bank to do that.");
    } else {
        script14153("You empty the items to your bank.");
    };
    return;
}