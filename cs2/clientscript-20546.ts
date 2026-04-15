//
function script20546(int0: dbrow): string {
    switch (int0) {
        case 6020: {
            return "1 Bond";
        }
        case 7723: {
            return "3 Bonds";
        }
        case 7724: {
            return "5 Bonds";
        }
        case 14710: {
            return "10 Bonds";
        }
        case 17569: {
            return "1 month subscription";
        }
        case 17694: {
            return "12 Months Membership";
        }
    };
    return dbrow_getfield(int0, 499824, 0);
}