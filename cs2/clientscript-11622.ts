//
function script11622(): void {
    switch (varbitplayer_51273) {
        case 1: {
            IF_SETHIDE(true, comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
            IF_SETHIDE(false, comp(891, 25));  // mtx_front_end_confirm:buy_container
            break;
        }
        case 2: {
            if ((varbitplayer_54119 == 0)) {
                IF_SETHIDE(true, comp(891, 25));  // mtx_front_end_confirm:buy_container
                IF_SETHIDE(false, comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
                IF_SETTEXT("You do not meet the requirements to claim this item.", comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
            } else {
                script18122();
            };
            break;
        }
        default: {
            script18122();
            break;
        }
    };
    return;
}