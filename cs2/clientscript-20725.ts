//
function script20725(int0: number): void {
    switch (UI_GETCATEGORY(int0)) {
        case 0: {
            script20782();
            break;
        }
        case 1: {
            script20777();
            break;
        }
        case 2: {
            script20786(1);
            break;
        }
        case 3: {
            script20786(-1);
            break;
        }
        case 4: {
            IF_TRIGGEROP(comp(1665, 28), -1, 1);  // poh_house_controls:furniture_edit_button_layer_click
            script20777();
            break;
        }
        case 5: {
            IF_TRIGGEROP(comp(1665, 28), -1, 2);  // poh_house_controls:furniture_edit_button_layer_click
            script20777();
            break;
        }
    };
    return;
}