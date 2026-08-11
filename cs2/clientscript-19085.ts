//
function script19085(int0: number, int1: number): void {
    if ((CC_FINDBYCATEGORY(comp(1147, 82), int0, int1) == 1)) {  // trh199_overlay:blueprint_grid
        switch (CC_GETGRAPHIC()) {
            case 34124: {
                CC_SETGRAPHIC(34123 as graphic);
                break;
            }
            case 34122: {
                CC_SETGRAPHIC(34121 as graphic);
                break;
            }
            case 34126: {
                CC_SETGRAPHIC(34125 as graphic);
                break;
            }
        };
    };
    return;
}