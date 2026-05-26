//
function script18440(int0: number): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETHIDE(0, 83886083);
            IF_SETHIDE(0, 83886084);
            IF_SETHIDE(1, 83886085);
            IF_SETTEXT("Birthday Buff", 83886083);
            IF_SETTEXT("Bonanza", 83886084);
            break;
        }
        default: {
            IF_SETHIDE(1, 83886083);
            IF_SETHIDE(1, 83886084);
            IF_SETHIDE(0, 83886085);
            IF_SETTEXT(struct_getparam(int0, 6135), 83886085);
            if ((MAP_LANG() == 1)) {
                IF_SETTEXTFONT(58, 83886085);
            } else {
                script16925(83886085, 16355, 3, 28, 14);
            };
            break;
        }
    };
    return;
}