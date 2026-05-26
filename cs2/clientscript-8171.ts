//
function script8171(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((varbitplayer_19925 == 1)) {
            CC_SETGRAPHIC(18842);
            script8800("Customisation is disabled. Click here<br>to enable customisation.", int0, int1);
        } else {
            CC_SETGRAPHIC(18840);
            script8800("Customisation is enabled.  Click here<br>to disable customisation.", int0, int1);
        };
    };
    return;
}