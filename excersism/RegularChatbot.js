// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
const reg= /^chatbot/i;
  return reg.test(command)
  
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption throught the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
const reg=/emoji[0-9]+/gi
  
  return message.replaceAll(reg, '')
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  let regex=/\(\+\d\d\) \d\d\d-\d\d\d-\d\d/
  let answer=regex.test(number)?"Thanks! You can now download me to your phone.":`Oops, it seems like I can't reach out to ${number}`
  return answer
}

/**
 * Given a certain response from the user, help the chatbot get only the URL
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
let link=[]
  const re = /\w+\.\w+/gi;

  return userInput.match(re)
}

/**
 * Greet the user using its full name data from the profile
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  let name = fullName.replace(" ", "").split(",").reverse();
  let firstName = name[0];
  firstName = firstName.replace(firstName[0], firstName[0].toUpperCase());
  let lastName = name[1];
  lastName = lastName.replace(lastName[0], lastName[0].toUpperCase());
  console.log(firstName);
  console.log(lastName);
  let full = firstName + " " + lastName;
  return `Nice to meet you, ${full}`;
}
