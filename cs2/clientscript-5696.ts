//
function script5696(int0: number): void {
    if ((CC_FIND(comp(1218, 246), int0) == 1)) {  // skillguide:content_layer
        CC_SETCOLOUR(16777215);
        if ((CC_GETGRAPHIC() == 9309 as graphic)) {
            CC_SETGRAPHIC(9308 as graphic);
        } else {
            CC_SETGRAPHIC(9310 as graphic);
        };
    };
    IF_SETHIDE(true, comp(1218, 248));  // skillguide:tooltip_layer
    return;
}