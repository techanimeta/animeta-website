export const isEmailValid = (email) => {
    // Regular expression for a basic email format check
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
};

export const validateField = (name, value) => {
    switch (name) {
      case 'fullname':
        if (!value) {
          return 'Full name is required.';
        }
        return '';
      case 'company':
        if (!value) {
          return 'Company is required.';
        }
        return '';
      case 'email':
        if (!value) {
          return 'Email is required.';
        } else if (!isEmailValid(value)) {
            return 'Email is not valid.';
        }
        // You can add more complex email validation here if needed
        return '';
      default:
        return '';
    }
};

