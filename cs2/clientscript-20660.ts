//
function script20660(int0: dbrow): string {
    switch (int0) {
        case 17569: {
            return "<col=E0D471>Standard Membership (Recurring/Subscription)</col>";
        }
        case 17694: {
            return "<col=E0D471>12 Months Membership (Recurring/Subscription)</col>";
        }
    };
    return dbrow_getfield(int0, 499840, 0);
}