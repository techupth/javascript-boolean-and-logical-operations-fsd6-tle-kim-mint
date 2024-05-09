// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion = true;
hasPromotion =
  (lastMonthPaidMoreThan4000 == true &&
    isWeekday == true &&
    !hasBoughtProductFromITCategory == false &&
    !hasAttendedDiscountEvent == true) ||
  isPlatinum == false;

console.log(hasPromotion);
