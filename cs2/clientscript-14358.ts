//
function script14358(): void {
    var int0 = 0;
    var int1 = varplayer_8970;
    var int2 = -1 as obj;
    var int3 = 0;
    while ((int1 < 1820)) {
        if (((CC_FIND(comp(517, 201), int1) == 1) && (CC_GETINVOBJECT() == 48447 as obj))) {
            [int0, int2, int3] = script14360(MAX(int0, (int1 + 1)));
            if ((CC_FIND(comp(517, 201), int1) == 1)) {
                CC_SETOBJECT(int2, int3);
            };
            if ((CC_FIND(comp(517, 201), int0) == 1)) {
                CC_SETOBJECT_NONUM(48447 as obj, 0);
            };
        };
        int1 = (int1 + 1);
    };
    IF_SETONTIMER(callback(script14357), comp(517, 199));
    return;
}