//
function script18461(int0: dbrow): unknown_int {
    if ((varbitplayer_54964 == 1)) {
        return 0;
    };
    switch (int0) {
        case 13086: {
            if ((varbitplayer_54965 == 1)) {
                return 0;
            };
            break;
        }
        case 13087: {
            if ((varbitplayer_54966 == 1)) {
                return 0;
            };
            break;
        }
        case 13088: {
            if ((varbitplayer_54967 == 1)) {
                return 0;
            };
            break;
        }
        case 13089: {
            if ((varbitplayer_54968 == 1)) {
                return 0;
            };
            break;
        }
        case 13090: {
            if ((varbitplayer_54969 == 1)) {
                return 0;
            };
            break;
        }
        case 4539: {
            if ((varbitplayer_54970 == 1)) {
                return 0;
            };
            break;
        }
        default: {
            script12478(`Unknown slot dbrow with location ${dbrow_getfield(int0, 733232, 0)} when checking if braze is active. Returning as inactive for the slot.`);
            return 0;
        }
    };
    return 1;
}