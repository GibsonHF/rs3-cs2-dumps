//
function script8165(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((varbitplayer_19925 == 1)) {
            CC_SETGRAPHIC(18841 as graphic);
            script8871(0);
        } else {
            CC_SETGRAPHIC(18839 as graphic);
            script8871(1);
        };
        script8808();
    };
    return;
}