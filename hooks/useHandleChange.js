import { validateField } from "../utils/helper";

const useHandleChange = (event, initialData, setInitialData, validationErrors, setValidationErrors) => {
    const { name, value } = event.target;
    setInitialData({
        ...initialData,
        [name]: value,
    });
    // Validate the field and set the error message
    const errorMessage = validateField(name, value);
    setValidationErrors({
        ...validationErrors,
        [name]: errorMessage,
    });
}

export default useHandleChange;