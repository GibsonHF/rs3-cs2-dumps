//
function script14610(int0: dbrow): string {
    switch (int0) {
        case 2891: {
            if ((varbitplayer_27168 == 1)) {
                return "Increases maximum health by 50.";
            };
            return "Increases maximum health by 500.";
        }
    };
    return dbrow_getfield(int0, 385056, 0);
}