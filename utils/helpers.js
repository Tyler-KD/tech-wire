module.exports = {
    // The helper method 'format_date' will take in a timestamp and return a string with only the date
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="Optical disk">💿</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="Man Technologist">👨‍💻</span>`;
      } else {
        return `<span for="img" aria-label="DVD">📀</span>`;
      }
    },
  };