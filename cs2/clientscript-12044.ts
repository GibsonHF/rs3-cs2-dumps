//
function script12044(int0: dbrow): unknown_string {
    switch (dbrow_getfield(int0, 16496, 0)) {
        case 3:
        case 6: {
            return "<col=ff8000>";
        }
        case 4: {
            return "<col=ff0000>";
        }
        case 5: {
        }
        default: {
            return "";
        }
    };
    return "<col=43bcbc>";
}