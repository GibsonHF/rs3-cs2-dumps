//
function script16905(int0: int): void {
    var int1 = 0;
    while ((int1 < 4)) {
        if ((CC_FINDBYCATEGORY[1](comp(907, 69), int1, 1) == 1)) {
            if ((int1 == int0)) {
                CC_SETGRAPHIC[1](25024 as graphic);
            } else {
                CC_SETGRAPHIC[1](25025 as graphic);
            };
        };
        int1 = (int1 + 1);
    };
    return;
}