//
function script9324(int0: unknown_int): void {
    if ((varclient_6684 == true)) {
        script9325(varclient_6711, int0);
        script9832(varclient_6711, comp(517, 202));
    } else if ((varbitplayer_45140 != 0)) {
        switch (varbitplayer_45140) {
            case 4:
            case 1:
            case 7: {
                script9327(varbitplayer_45140, int0);
                break;
            }
            default: {
                script9326(varbitplayer_45140, int0);
                break;
            }
        };
    } else if ((varbitplayer_45141 == 1)) {
        script9330();
    } else {
        script9329(varbitplayer_45141);
    };
    return;
}