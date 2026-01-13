import React, { useState } from 'react';
import { sanitizeName, sanitizeEmail, sanitizePhone, sanitizeInput, validateEmail, validateRequired } from '../../utils/inputSanitizer';
import '../../styles/AuthForms.css';
import '../../styles/ConferenceRegistrationForm.css';

interface ConferenceRegistrationFormProps {
  onClose: () => void;
}

interface FormData {
  fullName: string;
  level: string;
  programOfStudy: string;
  phoneNumber: string;
  email: string;
}

interface FormErrors {
  fullName?: string;
  level?: string;
  programOfStudy?: string;
  phoneNumber?: string;
  email?: string;
  general?: string;
}

const ConferenceRegistrationForm: React.FC<ConferenceRegistrationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    level: '',
    programOfStudy: '',
    phoneNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Academic levels options
  const academicLevels = [
    'Level 100',
    'Level 200',
    'Level 300',
    'Level 400',
    'Level 500',
    'Level 600',
    'Graduate Student',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Sanitize input based on field type
    let sanitizedValue = value;
    switch (name) {
      case 'fullName':
        sanitizedValue = sanitizeName(value);
        break;
      case 'email':
        sanitizedValue = sanitizeEmail(value);
        break;
      case 'phoneNumber':
        sanitizedValue = sanitizePhone(value);
        break;
      case 'programOfStudy':
        sanitizedValue = sanitizeInput(value);
        break;
      case 'level':
        sanitizedValue = value; // Dropdown selection, no need to sanitize
        break;
      default:
        sanitizedValue = sanitizeInput(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate full name
    if (!validateRequired(formData.fullName)) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Validate level
    if (!validateRequired(formData.level)) {
      newErrors.level = 'Academic level is required';
    }

    // Validate program of study
    if (!validateRequired(formData.programOfStudy)) {
      newErrors.programOfStudy = 'Program of study is required';
    } else if (formData.programOfStudy.length < 2) {
      newErrors.programOfStudy = 'Program of study must be at least 2 characters';
    }

    // Validate phone number
    if (!validateRequired(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 10) {
      newErrors.phoneNumber = 'Please enter a valid phone number (at least 10 digits)';
    }

    // Validate email
    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!formData.email.toLowerCase().endsWith('gmail.com')) {
      newErrors.email = 'Please use a Gmail address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare sanitized data for backend
      const registrationData = {
        fullName: sanitizeName(formData.fullName),
        level: formData.level,
        programOfStudy: sanitizeInput(formData.programOfStudy),
        phoneNumber: sanitizePhone(formData.phoneNumber),
        email: sanitizeEmail(formData.email),
        registrationDate: new Date().toISOString(),
        conferenceYear: 2026
      };

      // TODO: Replace with actual backend API endpoint
      // Example API call structure:
      /*
      const response = await fetch('/api/conference/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        throw new Error('Registration failed. Please try again.');
      }

      const result = await response.json();
      */

      // Simulate API call for now
      console.log('Registration data ready for backend:', registrationData);

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      setSubmitSuccess(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      setErrors({
        general: 'Registration failed. Please try again later.'
      });
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="conference-modal-overlay" onClick={onClose}>
      <div className="conference-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="conference-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="conference-form-header">
          <h2 className="conference-form-title">Register for Start Right Conference 2026</h2>
          <p className="conference-form-subtitle">
            Fill in your details to secure your spot at the conference
          </p>
        </div>

        {submitSuccess ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Registration Successful!</h3>
            <p>We've received your registration. Check your email for confirmation.</p>
          </div>
        ) : (
          <form className="conference-registration-form" onSubmit={handleSubmit} noValidate>
            {errors.general && (
              <div className="form-error-banner" role="alert">
                {errors.general}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                maxLength={50}
                required
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <span className="error-message" role="alert">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="level" className="form-label">
                Academic Level <span className="required">*</span>
              </label>
              <select
                id="level"
                name="level"
                className={`form-input ${errors.level ? 'input-error' : ''}`}
                value={formData.level}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select your level</option>
                {academicLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              {errors.level && (
                <span className="error-message" role="alert">{errors.level}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="programOfStudy" className="form-label">
                Program of Study <span className="required">*</span>
              </label>
              <input
                type="text"
                id="programOfStudy"
                name="programOfStudy"
                className={`form-input ${errors.programOfStudy ? 'input-error' : ''}`}
                value={formData.programOfStudy}
                onChange={handleInputChange}
                placeholder="e.g., Computer Science, Business Administration"
                maxLength={100}
                required
                disabled={isSubmitting}
              />
              {errors.programOfStudy && (
                <span className="error-message" role="alert">{errors.programOfStudy}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={`form-input ${errors.phoneNumber ? 'input-error' : ''}`}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+233 XX XXX XXXX"
                maxLength={20}
                required
                disabled={isSubmitting}
              />
              {errors.phoneNumber && (
                <span className="error-message" role="alert">{errors.phoneNumber}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Gmail Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                placeholder="yourname@gmail.com"
                maxLength={100}
                required
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="error-message" role="alert">{errors.email}</span>
              )}
            </div>

            <button
              type="submit"
              className="conference-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register Now'}
            </button>

            <p className="form-disclaimer">
              By registering, you agree to receive updates about the Start Right Conference 2026
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConferenceRegistrationForm;
