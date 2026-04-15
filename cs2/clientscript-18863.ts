//
function script18863(int0: int): int {
    switch (int0) {
        case 0: {
            return varbitclient_28443;
        }
        case 1: {
            return varbitclient_30698;
        }
        case 2: {
            return varbitclient_31206;
        }
        case 3: {
            return varbitclient_60437;
        }
        case 4: {
            return varbitclient_45272;
        }
        case 5: {
            return varbitclient_45273;
        }
    };
    script12478(`Invalid calendar category id ${inttostring(int0, 10)} found when trying to get extra rows amount for this category.`);
    return 0;
}