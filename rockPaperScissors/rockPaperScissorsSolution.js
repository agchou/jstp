/**
 * Rock Paper Scissors
 *
 * Write a function that outputs all possible combinations for a game of RPS
 * with n rounds.
 *
 * Example:
 *
 *  A game of RPS with 3 rounds.
 *
 *   [
 *     ['rock', 'rock', 'rock'],
 *     ['rock', 'rock', 'paper'],
 *     ...
 *     ['scissors', 'scissors', 'scissors']
 *   ]
 */

/**
 * Solution with a nested recursive function
 */
var rockPaperScissors = function (rounds) {
  var hands   = ['rock', 'paper', 'scissors'];
  var results = [];
  var temp    = [];

  (function recurse() {
    if (temp.length === rounds) {
      results.push(temp.slice());
      return;
    }

    for (var i = 0; i < hands.length; i++) {
      temp.push(hands[i]);
      recurse();
      temp.pop();
    }
  })();

  return results;
};

/**
 * Recursive solution using Array.concat and passed values
 */
var rockPaperScissors = function (rounds, round, results, temp) {
  // Initial values for round, results, and temp. If passed in, they will use
  // that value instead.
  results = results || [];
  temp    = temp    || [];
  round   = round   || 0;

  // Base Case: When `round` is equal to `rounds`, all rounds have been played
  // so `temp` now represents a possible combination for n rounds. The combina-
  // tion `temp` is then pushed to `results` to be returned at completion.
  if (round === rounds) return results.push(temp);

  // "Plays" another round by concatenating a possible play to the `temp`
  // combination and passing the incremented round, array of results, and `temp`
  // with the added play for the round.
  rockPaperScissors(rounds, round + 1, results, temp.concat(['rock']));
  rockPaperScissors(rounds, round + 1, results, temp.concat(['paper']));
  rockPaperScissors(rounds, round + 1, results, temp.concat(['scissors']));

  // The first level recursive call will eventually return the results.
  return results;
};
