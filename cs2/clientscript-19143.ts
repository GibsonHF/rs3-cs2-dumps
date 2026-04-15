//
function script19143(int0: struct): [int, int, int] {
    switch (int0) {
        case 32986: {
            return [varbitplayer_51597, varbitplayer_51598, varbitplayer_51599];
        }
        case 50263: {
            return [varbitplayer_56038, varbitplayer_56039, varbitplayer_56040];
        }
        case 2951: {
            return [varbitplayer_57716, varbitplayer_57717, varbitplayer_57718];
        }
    };
    script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
    return [0, 0, 0];
}