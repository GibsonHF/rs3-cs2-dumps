//
function script4475(int0: number): void {
    if ((varbitplayer_47706 >= 1)) {
        if ((varbitplayer_47706 <= 15)) {
            if ((varbitplayer_47705 >= 1)) {
                if ((varbitplayer_47705 <= 4)) {
                    IF_SETHIDE(true, int0);
                } else {
                    IF_SETHIDE(false, int0);
                };
            } else {
                IF_SETHIDE(false, int0);
            };
        } else {
            IF_SETHIDE(false, int0);
        };
    } else {
        IF_SETHIDE(false, int0);
    };
    return;
}