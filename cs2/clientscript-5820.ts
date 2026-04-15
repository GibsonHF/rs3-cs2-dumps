//
function script5820(int0: dbrow): string {
    switch (int0) {
        case 4598: {
            return `${TOSTRING_LOCALISED((50000 - varplayer_10237), 1)} Left`;
        }
        case 4842: {
            return `${TOSTRING_LOCALISED((dbrow_getfield(int0, 549328, 0) - varbitplayer_50401), 1)} Left`;
        }
        case 4152:
        case 4135: {
            if ((script18304() == 1)) {
                return "Value added!";
            };
            return dbrow_getfield(int0, 548944, 0);
        }
    };
    return dbrow_getfield(int0, 548944, 0);
}