//
function script99(): void {
    var int0 = 0;
    if ((varbitplayer_10049 < 5)) {
        IF_SETSIZE(160, 30, 0, 0, 41222150);
        if ((IF_FIND(41222149) == 1)) {
            int0 = (varbitplayer_10049 * 32);
            if ((CC_GETWIDTH() < int0)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, 41222149);
            } else if ((CC_GETWIDTH() > int0)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, 41222149);
            };
        };
    } else if ((varbitplayer_10049 > 5)) {
        IF_SETSIZE(160, 30, 0, 0, 41222149);
        if ((IF_FIND(41222150) == 1)) {
            int0 = ((10 - varbitplayer_10049) * 32);
            if ((CC_GETWIDTH() < int0)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, 41222150);
            } else if ((CC_GETWIDTH() > int0)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, 41222150);
            };
        };
    } else {
        if ((IF_FIND(41222149) == 1)) {
            if ((CC_GETWIDTH() < 157)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, 41222149);
            } else if ((CC_GETWIDTH() > 157)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, 41222149);
            };
        };
        if ((IF_FIND(41222150) == 1)) {
            if ((CC_GETWIDTH() < 157)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, 41222150);
            } else if ((CC_GETWIDTH() > 157)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, 41222150);
            };
        };
    };
    return;
}