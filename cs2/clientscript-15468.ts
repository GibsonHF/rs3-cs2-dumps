//
function script15468(int0: int): boolean {
    var int1 = 0;
    switch (int0) {
        case 1: {
            int1 = varbitplayer_48847;
            break;
        }
        case 2: {
            int1 = varbitplayer_48848;
            break;
        }
        case 3: {
            int1 = varbitplayer_48849;
            break;
        }
        case 4: {
            int1 = varbitplayer_48850;
            break;
        }
        case 5: {
            int1 = varbitplayer_48851;
            break;
        }
        case 6: {
            int1 = varbitplayer_48852;
            break;
        }
        case 7: {
            int1 = varbitplayer_48853;
            break;
        }
        case 8: {
            int1 = varbitplayer_48854;
            break;
        }
        case 9: {
            int1 = varbitplayer_48855;
            break;
        }
        case 10: {
            int1 = varbitplayer_48856;
            break;
        }
        default: {
            script12478(`trh173_get_gem_claim_state called with invalid index, ${inttostring(int0, 10)}`);
            return true;
        }
    };
    return script734(int1);
}