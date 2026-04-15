//
function script20012(int0: int): component {
    switch (int0) {
        case 1: {
            return comp(1340, 33);
        }
        case 2: {
            return comp(1340, 36);
        }
        case 3: {
            return comp(1340, 39);
        }
        case 4: {
            return comp(1340, 42);
        }
        case 5: {
            return comp(1340, 45);
        }
        case 6: {
            return comp(1340, 48);
        }
        case 7: {
            return comp(1340, 51);
        }
        case 8: {
            return comp(1340, 54);
        }
    };
    script12478(`No entry for multiplier slot ${inttostring(int0, 10)} in trh210_get_multiplier_slot_component.`);
    return comp(-1, 65535);
}