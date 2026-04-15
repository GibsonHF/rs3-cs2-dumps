//
function script2986(): void {
    var int0 = 0;
    var int1 = 20;
    var int2 = 10;
    var int3 = 0;
    var int4 = -1 as obj;
    var string0 = "";
    var string1 = "";
    var int5 = 0;
    CC_DELETEALL(comp(72, 0));
    CC_DELETEALL(comp(72, 11));
    while ((int0 < 10)) {
        [int3, int4, string0, string1] = script9614(int0);
        if ((int3 == 0)) {
            script10410(comp(72, 0), comp(72, 11), 28556 as struct, int1, int2, 215, 45, int0, true, "Undiscovered");
        } else {
            script10410(comp(72, 0), comp(72, 11), 28556 as struct, int1, int2, 215, 45, int0, false, "");
            if ((CC_FIND(comp(72, 11), int0) == 1)) {
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script2988, int4));
            };
            script4512(comp(72, 0), 36, 32, (int1 + 4), (int2 + 4), -1 as graphic);
            CC_SETOBJECT_NONUM(int4, 1);
            script6200(comp(72, 0), 165, 15, (int1 + 44), (int2 + 4), 26 as fontmetrics, string0, 0);
            script6201(comp(72, 0), 165, 24, (int1 + 44), (int2 + 17), 26 as fontmetrics, string1);
        };
        int0 = (int0 + 1);
        if ((++int1 > 300)) {
            int1 = 20;
            int2 = (int2 + 55);
        };
    };
    return;
}