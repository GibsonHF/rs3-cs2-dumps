//
function script4834(int0: component): void {
    var int1 = (IF_GETNEXTSUBID(int0) - 1);
    while ((int1 >= 0)) {
        if ((CC_FIND(int0, int1) == 1)) {
            CC_SETGRAPHIC(6009 as graphic);
        };
        int1 = (int1 - 1);
    };
    return;
}