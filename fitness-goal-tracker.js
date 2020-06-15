// Spring is here and your friend calls to see if you are interested in meeting
// someone for a blind date next month. You have been a loner for so long - solo
// for 3 years - and even gained 30 pounds. You are determined to meet the person
// looking your best, so you decide to cut meals and do intensive cardio. You want
// to track how often your daily caloric intake is lower than the day before and
// daily hours spent excercising exceeds those from the previous day. If so, you
// will mark it as a success day. Create a function that returns the total number
// of success days.

const fitnessGoalTracker = (schedule) => {
  let numberOfSuccesses = 0;
  for (let i = 1; i < schedule.length; i++) {
    const previousDay = i - 1;
    if (
      schedule[i]["caloric intake"] < schedule[previousDay]["caloric intake"] &&
      schedule[i]["exercise duration"] > schedule[previousDay]["exercise duration"]
      ) {numberOfSuccesses++}
  }
  return numberOfSuccesses;
}

const schedule = [
  {
    "caloric intake": 2500,
    "exercise duration": 30
  },
  {
    "caloric intake": 2400,
    "exercise duration": 40
  },
  {
    "caloric intake": 2500,
    "exercise duration": 30
  },
  {
    "caloric intake": 2300,
    "exercise duration": 50
  }
]

fitnessGoalTracker(schedule);
