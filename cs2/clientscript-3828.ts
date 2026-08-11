//
function script3828(): void {
    if ((IF_GETHIDE(comp(641, 28)) == false)) {  // xmas2019_advent:open_door_layer
        IF_SETHIDE(true, comp(641, 28));  // xmas2019_advent:open_door_layer
    } else {
        IF_TRIGGEROP(comp(641, 1), -1, 1);  // xmas2019_advent:close_listener
        script8841(88, 0);
    };
    return;
}