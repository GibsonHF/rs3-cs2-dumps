//
function script6336(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = -1;
    var int4 = 0;
    while ((int2 < int1)) {
        if ((CC_FIND(int0, int2) == 1)) {
            int3 = INV_GETOBJ(93, int2);
            if ((int3 != -1)) {
                CC_SETHIDE(0);
                int4 = INV_GETNUM(93, int2);
                CC_SETOBJECT(int3, int4);
                CC_SETOPBASE(`${script4033(int3)}${OC_NAME(int3)}`);
                CC_CLEAROPS();
                if ((int4 > 2)) {
                    CC_SETOP(1, "Add-1");
                    CC_SETOP(2, "Add-All");
                    CC_SETOP(3, "Add-X");
                } else if ((int4 == 2)) {
                    CC_SETOP(1, "Add-1");
                    CC_SETOP(2, "Add-All");
                } else {
                    CC_SETOP(1, "Add");
                };
                CC_SETOP(10, "Examine");
            } else {
                CC_SETHIDE(1);
            };
        };
        int2 = (int2 + 1);
    };
    return;
}