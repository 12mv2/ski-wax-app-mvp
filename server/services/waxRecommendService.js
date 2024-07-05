// servises/waxRecommendService.js
    // logic to choose appropriate wax
      if (temperature <= 10) {
        waxRecommendation = 'pink'; // search db for cold wax
      } else if (temperature > 10 && temperature <= 30 ) {
        waxRecommendation = 'blue';// search db for moderate wax
      } else if (temperature > 30) {
        waxRecommendation = 'green';// search db for warm wax
      }