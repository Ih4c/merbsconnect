import React, { useState } from 'react';
import { sanitizeInput } from '../../utils/inputSanitizer';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/VolunteerRegistrationForm.css';

interface VolunteerRegistrationFormProps {
  onClose: () => void;
}

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  yearOfStudy: string;
  skills: string[];
  availability: string[];
  motivation: string;
  experience: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const VolunteerRegistrationForm: React.FC<VolunteerRegistrationFormProps> = ({ onClose }) => {
  const { registerVolunteer } = useAuth();
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    yearOfStudy: '',
    skills: [],
    availability: [],
    motivation: '',
    experience: '',
    emergencyContact: '',
    emergencyPhone: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skillOptions = [
    'Event Planning', 'Social Media', 'Photography', 'Videography', 
    'Public Speaking', 'Registration Management', 'Technical Support',
    'Marketing', 'Logistics', 'Customer Service'
  ];

  const availabilityOptions = [
    'Weekdays', 'Weekends', 'Evenings', 'Full Day Events',
    'Pre-event Planning', 'Post-event Activities'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (category: 'skills' | 'availability', value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of study is required';
    if (formData.skills.length === 0) newErrors.skills = 'Please select at least one skill';
    if (formData.availability.length === 0) newErrors.availability = 'Please select your availability';
    if (!formData.motivation.trim()) newErrors.motivation = 'Please share your motivation';
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'Emergency contact is required';
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await registerVolunteer(formData);
      alert('Volunteer registration submitted successfully! We will contact you soon.');
      onClose();
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="volunteer-form-overlay">
      <div className="volunteer-form-container">
        <div className="volunteer-form-header">
          <h2>Volunteer Registration</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="volunteer-form">
          {/* Personal Information */}
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="form-section">
            <h3>Academic Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="university">University *</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className={errors.university ? 'error' : ''}
                />
                {errors.university && <span className="error-message">{errors.university}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="yearOfStudy">Year of Study *</label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                  className={errors.yearOfStudy ? 'error' : ''}
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
                {errors.yearOfStudy && <span className="error-message">{errors.yearOfStudy}</span>}
              </div>
            </div>
          </div>

          {/* Skills and Availability */}
          <div className="form-section">
            <h3>Skills & Availability</h3>
            <div className="form-group">
              <label>Skills *</label>
              <div className="checkbox-group">
                {skillOptions.map(skill => (
                  <label key={skill} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleCheckboxChange('skills', skill)}
                    />
                    {skill}
                  </label>
                ))}
              </div>
              {errors.skills && <span className="error-message">{errors.skills}</span>}
            </div>

            <div className="form-group">
              <label>Availability *</label>
              <div className="checkbox-group">
                {availabilityOptions.map(option => (
                  <label key={option} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.availability.includes(option)}
                      onChange={() => handleCheckboxChange('availability', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.availability && <span className="error-message">{errors.availability}</span>}
            </div>
          </div>

          {/* Additional Information */}
          <div className="form-section">
            <h3>Additional Information</h3>
            <div className="form-group">
              <label htmlFor="motivation">Why do you want to volunteer? *</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows={3}
                className={errors.motivation ? 'error' : ''}
                placeholder="Share your motivation for volunteering with StartRight..."
              />
              {errors.motivation && <span className="error-message">{errors.motivation}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="experience">Previous Volunteer Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe any relevant volunteer or leadership experience..."
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="form-section">
            <h3>Emergency Contact</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className={errors.emergencyContact ? 'error' : ''}
                />
                {errors.emergencyContact && <span className="error-message">{errors.emergencyContact}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="emergencyPhone">Emergency Phone *</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  className={errors.emergencyPhone ? 'error' : ''}
                />
                {errors.emergencyPhone && <span className="error-message">{errors.emergencyPhone}</span>}
              </div>
            </div>
          </div>

          {errors.submit && <div className="error-message">{errors.submit}</div>}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? 'Submitting...' : 'Register as Volunteer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerRegistrationForm;
