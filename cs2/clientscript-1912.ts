//
function script1912(): void {
    CC_DELETEALL(17498151);
    CC_DELETEALL(17498153);
    var int0 = -1;
    var int1 = -1 as struct;
    IF_SETTEXT("Milestone Rewards", 17498152);
    CC_CREATE(17498150, 5, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(4544);
    while ((++int0 < ENUM_GETOUTPUTCOUNT(14540))) {
        int1 = enum_getvalue(0, 73, 14540 as cs2enum, int0);
        if ((int0 > 0)) {
            script1922(17498151, int0, 3, int1, ((int0 * 270) - 82), 99, 130, 2);
        };
        script1924(17498151, 17498153, int0, 3, int1, (48 + (270 * int0)), 32, 140, 140, 23, 0);
        script1913(17498151, int0, int1, (48 + (270 * int0)), (18 + 140), 140, 20);
    };
    return;
}