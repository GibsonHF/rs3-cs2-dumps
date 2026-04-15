//
function script16142(int0: unknown_int): unknown_string {
    switch (int0) {
        case 2: {
            if ((script4148() == true)) {
                return "This type of package is unavailable for Ironmen.";
            };
            switch (script14944()) {
                case 0: {
                    return "Treasure Hunter keys are not available to purchase by players under the age of 18.";
                }
                case 2: {
                    return "Treasure Hunter keys are not available to purchase by players who have not set their date of birth.";
                }
            };
            if ((script20055() == 1)) {
                return "Treasure Hunter is currently disabled due to an ongoing experiment. It will return on 29th July.";
            };
            break;
        }
        case 4: {
            return "You already have an active membership subscription.";
        }
        case 1: {
            switch (varbitplayer_49617) {
                case 1: {
                    return "You cannot buy Bonds right now.";
                }
                case 2: {
                    return "Your account does not meet the requirements to purchase bonds.";
                }
            };
            return "Currently no items to show here.<br>Please try again later.";
        }
        case 128: {
            if ((script4148() == true)) {
                return "This type of package is unavailable for Ironmen.";
            };
            break;
        }
        default: {
            return "Currently no items to show here.<br>Please try again later.";
        }
    };
    return "Currently no items to show here.<br>Please try again later.";
}