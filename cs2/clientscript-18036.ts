//
function script18036(): [int, int] {
    var int0 = 0;
    var int1 = 0;
    var int2 = UI_GETDYNID(varclient_7295);
    if ((UI_GETCATEGORY(varclient_7295) != 0)) {
        script12478("Selected Component Category isn't 0. All selected items and buttons should be on Cat 0.");
    };
    script17927();
    int0 = GETBIT_RANGE(int2, 0, 7);
    int1 = GETBIT_RANGE(int2, 8, 11);
    return [int0, int1];
}