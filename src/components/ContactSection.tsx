import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, User, Briefcase, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Domestic' as 'Domestic' | 'Commercial',
    serviceRequired: 'Joinery',
    descriptionOfWork: '',
    preferredContactMethod: 'Phone Call' as 'Phone Call' | 'Email' | 'WhatsApp / Text',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const servicesList = [
    'Joinery',
    'Building Services',
    'Plumbing',
    'Decorating',
    'Property Maintenance',
    'Commercial Maintenance',
    '24-Hour Emergency Call-Out'
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.descriptionOfWork.trim()) newErrors.descriptionOfWork = 'Please provide a brief description of the work';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyType: 'Domestic',
      serviceRequired: 'Joinery',
      descriptionOfWork: '',
      preferredContactMethod: 'Phone Call',
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#171918] text-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CAA356]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#CAA356]/40 text-[#CAA356] text-xs font-bold tracking-wide uppercase mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>DIRECT CONTRACTOR CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Need Help With Maintenance or Repairs?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Contact Adrian to discuss your joinery, building, plumbing, decorating or property maintenance requirements.
          </p>

          {/* Quick Action Buttons Strip */}
          <div className="flex flex-wrap items-center gap-3.5 pt-6">
            {/* Call Adrian */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="contact-call-btn"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] font-extrabold text-sm shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Adrian: {BUSINESS_INFO.phone}</span>
            </a>

            {/* Email Us */}
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              id="contact-email-btn"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#CAA356]" />
              <span>Email Us: {BUSINESS_INFO.email}</span>
            </a>

            {/* Send an Enquiry anchor */}
            <a
              href="#contact-form-card"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 border border-white/15 text-white/90 text-sm font-semibold transition-colors"
            >
              <span>Send an Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#CAA356]" />
            </a>
          </div>
        </div>

        {/* 2-Column Content: Left Contact Details & Accreditations | Right Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white font-display">
                Business & Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CAA356]/15 text-[#CAA356] flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Main Contact & Principal Contractor</span>
                    <span className="font-bold text-white text-base">Adrian</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CAA356]/15 text-[#CAA356] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Direct Telephone (24/7 Call-Out)</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-bold text-[#CAA356] text-lg hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CAA356]/15 text-[#CAA356] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Email Address</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-bold text-white hover:text-[#CAA356] transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CAA356]/15 text-[#CAA356] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Availability</span>
                    <span className="font-bold text-white">24-Hour Call-Out Service</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#CAA356]/15 text-[#CAA356] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/60">Official Accreditation</span>
                    <span className="font-bold text-white">SafeContractor Approved</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Box */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 space-y-2">
              <span className="font-bold text-[#CAA356] uppercase tracking-wider block">
                Regional Service Coverage
              </span>
              <p className="leading-relaxed">
                Serving domestic and commercial clients throughout Yorkshire and surrounding regions, including Leeds, Sheffield, Bradford, York, Wakefield, Huddersfield, and Harrogate.
              </p>
            </div>
          </div>

          {/* Right Column: Full Enquiry Form */}
          <div className="lg:col-span-7" id="contact-form-card">
            <div className="bg-white text-[#171918] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#171918] via-[#CAA356] to-[#171918]" />

              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#171918] font-display">
                      Send an Enquiry to Adrian
                    </h3>
                    <p className="text-xs sm:text-sm text-[#686E6A] mt-1">
                      Complete the details below and Adrian will get back to you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#171918] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Smith"
                          className={`w-full p-3 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] ${
                            errors.name ? 'border-red-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#171918] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="07... or landline"
                          className={`w-full p-3 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] ${
                            errors.phone ? 'border-red-500' : 'border-gray-200'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#171918] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.co.uk"
                        className={`w-full p-3 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                    </div>

                    {/* Property Type: Domestic or Commercial */}
                    <div>
                      <label className="block text-xs font-bold text-[#171918] mb-1.5">
                        Property Type *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: 'Domestic' })}
                          className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                            formData.propertyType === 'Domestic'
                              ? 'bg-[#171918] text-white border-[#171918]'
                              : 'bg-[#FAFBF8] border-gray-200 text-[#171918] hover:border-[#CAA356]'
                          }`}
                        >
                          <span>Domestic (Home / Residential)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: 'Commercial' })}
                          className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                            formData.propertyType === 'Commercial'
                              ? 'bg-[#171918] text-white border-[#171918]'
                              : 'bg-[#FAFBF8] border-gray-200 text-[#171918] hover:border-[#CAA356]'
                          }`}
                        >
                          <span>Commercial (Business / Premises)</span>
                        </button>
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-bold text-[#171918] mb-1">
                        Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full p-3 bg-[#FAFBF8] border border-gray-200 rounded-xl text-sm text-[#171918] focus:outline-none focus:ring-2 focus:ring-[#CAA356]"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>

                    {/* Description of Work */}
                    <div>
                      <label className="block text-xs font-bold text-[#171918] mb-1">
                        Description of Work *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.descriptionOfWork}
                        onChange={(e) => setFormData({ ...formData, descriptionOfWork: e.target.value })}
                        placeholder="Please describe your joinery, building, plumbing, decorating or property maintenance requirements..."
                        className={`w-full p-3.5 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] resize-none ${
                          errors.descriptionOfWork ? 'border-red-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.descriptionOfWork && (
                        <p className="text-[11px] text-red-600 mt-0.5">{errors.descriptionOfWork}</p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-bold text-[#171918] mb-1.5">
                        Preferred Contact Method *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['Phone Call', 'Email', 'WhatsApp / Text'] as const).map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                            className={`py-2 px-3 rounded-xl border text-xs font-bold transition-colors cursor-pointer text-center ${
                              formData.preferredContactMethod === method
                                ? 'bg-[#CAA356] text-[#0F1110] border-[#CAA356]'
                                : 'bg-[#FAFBF8] border-gray-200 text-[#171918] hover:border-gray-400'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="submit-enquiry-form-btn"
                        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
                      >
                        {isSubmitting ? (
                          <span>Sending Enquiry...</span>
                        ) : (
                          <>
                            <span>Send Enquiry to Adrian</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success Message */
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#CAA356]/15 text-[#CAA356] mx-auto flex items-center justify-center border border-[#CAA356]/30">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#171918] font-display">
                      Enquiry Received
                    </h4>
                    <p className="text-sm text-[#686E6A] max-w-sm mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-[#171918]">{formData.name}</strong>. Adrian has received your request regarding <strong className="text-[#171918]">{formData.serviceRequired}</strong> and will contact you via {formData.preferredContactMethod}.
                    </p>
                  </div>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-bold text-[#CAA356] underline cursor-pointer hover:text-[#B69043]"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
