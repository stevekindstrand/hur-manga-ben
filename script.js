let countLegs = (chicken, dog, pig, cat) => {
    
    let chickenLegs, dogLegs, pigLegs, catLegs, totalLegs;

    chickenLegs = chicken * 2;
    dogLegs = dog * 4;
    pigLegs = pig * 4;
    catLegs = cat * 4;

    totalLegs = chickenLegs + dogLegs + pigLegs + catLegs;

    return totalLegs;
};

console.log(countLegs(8, 1, 4, 2));

