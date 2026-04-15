//
function script12166(int0: unknown_int): unknown_string {
    if ((MAP_MEMBERS() == 0)) {
        return "Members Item";
    };
    switch (int0) {
        case 2: {
            return "Bag of Materials";
        }
        case 1: {
            return "Inventor's Tools";
        }
        case 3: {
            return "Charge Pack";
        }
    };
    return "";
}