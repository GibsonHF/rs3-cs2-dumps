//
function script15730(): void {
    if ((IF_GETHIDE(comp(1253, 447)) == false)) {  // wheel_of_fortune:trh_promo_info
        if ((IF_GETHIDE(comp(1253, 453)) == false)) {  // wheel_of_fortune:trh_promo_info_popup_layer
            IF_TRIGGEROP(comp(1253, 458), -1, 1);  // wheel_of_fortune:trh_promo_info_popup_layer_close
        } else {
            IF_TRIGGEROP(comp(1253, 68), -1, 1);  // wheel_of_fortune:countdown_layer
        };
        return;
    };
    switch (script15513()) {
        case 3707: {
            if ((script19039() == 1)) {
                return;
            };
            break;
        }
    };
    IF_TRIGGEROP(comp(1253, 557), -1, 1);  // wheel_of_fortune:wheel_close_button_layer
    return;
}