//
function script16567(int0: dbrow): graphic {
    switch (int0) {
        case 6001: {
            if ((varbitplayer_45115 == 1)) {
                return 29753 as graphic;
            };
            return 29756 as graphic;
        }
        case 6002: {
            if ((varbitplayer_27344 == 0)) {
                return 29753 as graphic;
            };
            return 29756 as graphic;
        }
        case 6003: {
            if ((varbitplayer_50989 == 0)) {
                return 29753 as graphic;
            };
            return 29756 as graphic;
        }
        case 6004: {
            if ((varbitplayer_50990 == 0)) {
                return 29753 as graphic;
            };
            return 29756 as graphic;
        }
        case 6005: {
            if ((varbitplayer_44637 == 0)) {
                return 29753 as graphic;
            };
            return 29756 as graphic;
        }
        case 6976: {
            if ((varbitplayer_54995 == 0)) {
                return 18859 as graphic;
            };
            return 18861 as graphic;
        }
        case -1: {
            return -1 as graphic;
        }
    };
    return dbrow_getfield(int0, 114704, 0);
}