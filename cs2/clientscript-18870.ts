//
function script18870(int0: int, int1: int): void {
    switch (int0) {
        case 0: {
            varbitclient_28443 = int1;
            break;
        }
        case 1: {
            varbitclient_30698 = int1;
            break;
        }
        case 2: {
            varbitclient_31206 = int1;
            break;
        }
        case 3: {
            varbitclient_60437 = int1;
            break;
        }
        case 4: {
            varbitclient_45272 = int1;
            break;
        }
        case 5: {
            varbitclient_45273 = int1;
            break;
        }
        default: {
            script12478(`Invalid calendar category id ${inttostring(int0, 10)} found when trying to set extra rows amount for this category.`);
            break;
        }
    };
    return;
}