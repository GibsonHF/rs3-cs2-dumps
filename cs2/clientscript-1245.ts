//
function script1245(): void {
    if ((MAP_LANG() != 0)) {
        IF_SETHIDE(true, comp(64, 53));  // no_displayname_v2:random_name_button
        IF_SETSIZE(400, 110, 0, 0, comp(64, 3));  // no_displayname_v2:name_layer
    };
    return;
}