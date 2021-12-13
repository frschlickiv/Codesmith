// Hour
// If hour is between 6am and 12 PM; Good Morning!
// If hour is between 12 pm and 6 pm: Good Afternood!
// Otherwise: Good Evening!

let hour = 19;
if(hour >= 6 && hour < 12)  
  console.log ('Good Morning');

else if (hour >= 12 && hour < 18) 
    console.log ('Good Afternoon');

else 
   console.log  ('Good Evening');