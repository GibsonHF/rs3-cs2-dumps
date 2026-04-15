//
function script9629(int0: component, int1: int): void {
    var int2 = int1;
    var int3 = 0;
    var int4 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((cc_getparam(4033) == 1)) {
            return;
        };
        if ((CC_GETGRAPHIC() == 20326 as graphic)) {
            int4 = 0;
            CC_SETGRAPHIC(20268 as graphic);
        } else {
            int4 = 1;
            CC_SETGRAPHIC(20326 as graphic);
        };
        script9631(int0, int2, int4);
        while ((int3 == 0)) {
            int2 = (int2 + 5);
            if ((CC_FIND(int0, int2) == 1)) {
                if ((cc_getparam(4032) != -1)) {
                    int3 = 1;
                } else {
                    script9628(int0, int2, int4);
                };
            } else {
                int3 = 1;
            };
        };
    };
    return;
}