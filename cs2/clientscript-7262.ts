//
function script7262(int0: int): void {
    var int1 = -1;
    if ((int0 == varclient_2244)) {
        if ((CC_FIND(comp(1378, 16), (3 * int0)) == 1)) {
            CC_SETGRAPHIC(12899 as graphic);
        };
        if ((CC_FIND(comp(1378, 16), ((3 * int0) + 1)) == 1)) {
            CC_SETGRAPHIC(12901 as graphic);
        };
        if ((CC_FIND(comp(1378, 16), ((3 * int0) + 2)) == 1)) {
            CC_SETGRAPHIC(12900 as graphic);
        };
    } else {
        if ((CC_FIND(comp(1378, 16), (3 * int0)) == 1)) {
            CC_SETGRAPHIC(12890 as graphic);
        };
        if ((CC_FIND(comp(1378, 16), ((3 * int0) + 1)) == 1)) {
            CC_SETGRAPHIC(12892 as graphic);
        };
        if ((CC_FIND(comp(1378, 16), ((3 * int0) + 2)) == 1)) {
            CC_SETGRAPHIC(12891 as graphic);
        };
    };
    return;
}