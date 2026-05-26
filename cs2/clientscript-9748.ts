//
function script9748(): void {
    IF_SETHIDE(1, 68747296);
    IF_SETHIDE(1, 68747300);
    IF_SETHIDE(1, 68747304);
    IF_SETHIDE(1, 68747310);
    if (((varclient_4189 == 1) || (varplayer_4474 == 1))) {
        IF_SETHIDE(0, 68747293);
        if ((IF_GETGRAPHIC(68747274) == 18525)) {
            IF_SETGRAPHIC(17535, 68747332);
        } else {
            IF_SETGRAPHIC(17536, 68747332);
        };
        IF_SETHIDE(0, 68747297);
        if ((IF_GETGRAPHIC(68747325) == 18525)) {
            IF_SETGRAPHIC(17535, 68747333);
        } else {
            IF_SETGRAPHIC(17536, 68747333);
        };
        IF_SETHIDE(0, 68747301);
        if ((IF_GETGRAPHIC(68747327) == 18525)) {
            IF_SETGRAPHIC(17535, 68747334);
        } else {
            IF_SETGRAPHIC(17536, 68747334);
        };
        IF_SETHIDE(0, 68747307);
        if ((IF_GETGRAPHIC(68747305) == 18525)) {
            IF_SETGRAPHIC(17535, 68747335);
        } else {
            IF_SETGRAPHIC(17536, 68747335);
        };
        IF_SETHIDE(0, 68747313);
        if ((IF_GETGRAPHIC(68747311) == 18525)) {
            IF_SETGRAPHIC(17535, 68747336);
        } else {
            IF_SETGRAPHIC(17536, 68747336);
        };
        IF_SETCOLOUR(script693(125, 125, 125), 68747275);
        IF_SETCOLOUR(script693(125, 125, 125), 68747326);
        IF_SETCOLOUR(script693(125, 125, 125), 68747328);
        IF_SETCOLOUR(script693(125, 125, 125), 68747306);
        IF_SETCOLOUR(script693(125, 125, 125), 68747312);
    } else {
        IF_SETHIDE(1, 68747293);
        IF_SETHIDE(1, 68747297);
        IF_SETHIDE(1, 68747301);
        IF_SETHIDE(1, 68747307);
        IF_SETHIDE(1, 68747313);
        IF_SETCOLOUR(script693(255, 255, 255), 68747275);
        IF_SETCOLOUR(script693(255, 255, 255), 68747326);
        IF_SETCOLOUR(script693(255, 255, 255), 68747328);
        IF_SETCOLOUR(script693(255, 255, 255), 68747306);
        IF_SETCOLOUR(script693(255, 255, 255), 68747312);
        switch (varplayer_4474) {
            case 2: {
                IF_SETHIDE(0, 68747301);
                IF_SETCOLOUR(script693(125, 125, 125), 68747328);
                IF_SETHIDE(0, 68747307);
                IF_SETCOLOUR(script693(125, 125, 125), 68747306);
                IF_SETHIDE(0, 68747313);
                IF_SETCOLOUR(script693(125, 125, 125), 68747312);
                IF_SETHIDE(0, 68747296);
                break;
            }
            case 3: {
                IF_SETHIDE(0, 68747307);
                IF_SETCOLOUR(script693(125, 125, 125), 68747306);
                IF_SETHIDE(0, 68747313);
                IF_SETCOLOUR(script693(125, 125, 125), 68747312);
                IF_SETHIDE(0, 68747300);
                break;
            }
            case 4: {
                IF_SETHIDE(0, 68747313);
                IF_SETCOLOUR(script693(125, 125, 125), 68747312);
                IF_SETHIDE(0, 68747304);
                break;
            }
            case 5: {
                IF_SETHIDE(0, 68747310);
                break;
            }
        };
    };
    return;
}