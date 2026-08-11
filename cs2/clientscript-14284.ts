//
function script14284(int0: number): number {
    switch (int0) {
        case 2: {
            return IF_HASSUBOVERLAY(comp(1425, 15), 1010 as overlayinterface);  // conq_if_container:turn_interface
        }
        case 4: {
            return IF_HASSUBOVERLAY(comp(1425, 16), 1024 as overlayinterface);  // conq_if_container:command_interface
        }
        case 3: {
            return IF_HASSUBOVERLAY(comp(1425, 18), 1012 as overlayinterface);  // conq_if_container:units_interface
        }
        case 5: {
            return IF_HASSUBOVERLAY(comp(1425, 17), 1019 as overlayinterface);  // conq_if_container:diplomacy_interface
        }
    };
    return 0;
}