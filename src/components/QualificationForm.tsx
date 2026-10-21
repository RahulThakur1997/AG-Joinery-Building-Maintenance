import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Hammer, 
  Layers, 
  Wrench, 
  Paintbrush, 
  Building2, 
  Clock, 
  Home, 
  User, 
  Mail, 
  Phone, 
  CheckCircle2,
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface QualificationFormProps {
  initialService?: string;
  onSuccess?: () => void;
  className?: string;
}

export const QualificationForm: React.FC<QualificationFormProps> = ({
  initialService,
  onSuccess,
  className = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState({
    selectedServices: initialService ? [initialService] : ['Joinery'],
    propertyType: 'Domestic' as 'Domestic' | 'Commercial',
    name: '',
    phone: '',
    email: '',
    preferredContactMethod: 'Phone Call' as 'Phone Call' | 'Email' | 'WhatsApp / Text',
    notes: '',
    isEmergency: false
  });

  const serviceOptions = [
    { id: 'Joinery', label: 'Joinery', icon: Hammer, desc: 'Repairs, installations & general work' },
    { id: 'Building Services', label: 'Building Services', icon: Layers, desc: 'General building & minor repairs' },
    { id: 'Plumbing', label: 'Plumbing', icon: Wrench, desc: 'Plumbing repairs & maintenance' },
    { id: 'Decorating', label: 'Decorating', icon: Paintbrush, desc: 'Interior decorating & finishing' },
    { id: 'Property Maintenance', label: 'Property Maintenance', icon: Home, desc: 'Planned & reactive maintenance' },
    { id: 'Commercial Maintenance', label: 'Commercial Maintenance', icon: Building2, desc: 'Ongoing business property care' },
    { id: '24-Hour Emergency Call-Out', label: '24-Hour Call-Out', icon: Clock, desc: 'Urgent repairs across Yorkshire' }
  ];

  const toggleService = (serviceId: string) => {
    setFormData(prev => {
      if (prev.selectedServices.includes(serviceId)) {
        const next = prev.selectedServices.filter(s => s !== serviceId);
        return { ...prev, selectedServices: next.length === 0 ? ['Joinery'] : next };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, serviceId] };
      }
    });
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 2 && !validateStep2()) return;
    setStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2 && !validateStep2()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      selectedServices: ['Joinery'],
      propertyType: 'Domestic',
      name: '',
      phone: '',
      email: '',
      preferredContactMethod: 'Phone Call',
      notes: '',
      isEmergency: false
    });
  };

  return (
    <div
      id="qualification-form-container"
      className={`bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#171918]/10 relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Header Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#171918] via-[#CAA356] to-[#171918]" />

      {!isSubmitted ? (
        <>
          {/* Header */}
          <div className="mb-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#171918]/5 text-[#171918] border border-[#171918]/10 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CAA356] animate-pulse" />
                ENQUIRY • STEP {step} OF 3
              </span>
              <span className="text-xs font-bold text-[#CAA356]">
                SafeContractor Approved
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#171918] font-display">
              Request an Enquiry or Quote
            </h3>
            <p className="text-xs text-[#686E6A] mt-0.5 leading-relaxed">
              Serving domestic homeowners and commercial properties across Yorkshire.
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-[#CAA356] h-full transition-all duration-300 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            {/* STEP 1: Select Property Type & Services */}
            {step === 1 && (
              <div className="space-y-3.5 animate-in fade-in duration-200" id="form-step-1">
                {/* Property Type Radio */}
                <div>
                  <label className="block text-xs font-bold text-[#171918] mb-1.5">
                    1. Select Customer / Property Type:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'Domestic' })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        formData.propertyType === 'Domestic'
                          ? 'border-[#CAA356] bg-[#CAA356]/15 text-[#171918] ring-1 ring-[#CAA356]'
                          : 'border-gray-200 bg-[#FAFBF8] text-[#686E6A]'
                      }`}
                    >
                      <Home className="w-3.5 h-3.5 text-[#CAA356]" />
                      <span>Domestic (Home)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, propertyType: 'Commercial' })}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        formData.propertyType === 'Commercial'
                          ? 'border-[#CAA356] bg-[#CAA356]/15 text-[#171918] ring-1 ring-[#CAA356]'
                          : 'border-gray-200 bg-[#FAFBF8] text-[#686E6A]'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5 text-[#CAA356]" />
                      <span>Commercial (Business)</span>
                    </button>
                  </div>
                </div>

                {/* Services List */}
                <div>
                  <label className="block text-xs font-bold text-[#171918] mb-1.5">
                    2. Service Required: <span className="text-[11px] font-normal text-[#686E6A]">(Select any)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-1">
                    {serviceOptions.map((opt) => {
                      const isSelected = formData.selectedServices.includes(opt.id);
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleService(opt.id)}
                          className={`text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-[#CAA356] bg-[#CAA356]/10 text-[#171918] font-bold shadow-xs'
                              : 'border-gray-200 bg-[#FAFBF8] text-[#171918] hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`p-1 rounded-lg ${isSelected ? 'bg-[#CAA356] text-[#0F1110]' : 'bg-gray-100 text-[#171918]'}`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="leading-snug">{opt.label}</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#CAA356] stroke-[3]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleNext}
                    id="step1-continue-btn"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#171918] hover:bg-[#252927] text-white font-bold text-xs shadow-md transition-colors cursor-pointer group"
                  >
                    <span>Continue to Contact Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CAA356] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Contact Information */}
            {step === 2 && (
              <div className="space-y-3 animate-in fade-in duration-200" id="form-step-2">
                <div>
                  <label className="block text-xs font-bold text-[#171918] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Walker"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 bg-[#FAFBF8] border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[10px] text-red-600 mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171918] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 bg-[#FAFBF8] border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171918] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 bg-[#FAFBF8] border rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171918] mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['Phone Call', 'Email', 'WhatsApp / Text'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                        className={`py-1.5 px-2 rounded-lg border text-[11px] font-bold cursor-pointer transition-colors ${
                          formData.preferredContactMethod === method
                            ? 'bg-[#CAA356] text-[#0F1110] border-[#CAA356]'
                            : 'bg-[#FAFBF8] border-gray-200 text-[#171918]'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="p-2.5 rounded-xl border border-gray-200 text-[#171918] hover:bg-gray-50 text-xs font-medium cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    id="step2-continue-btn"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#171918] hover:bg-[#252927] text-white font-bold text-xs shadow-md transition-colors cursor-pointer group"
                  >
                    <span>Final Step: Work Description</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CAA356] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Description & Submit */}
            {step === 3 && (
              <div className="space-y-3.5 animate-in fade-in duration-200" id="form-step-3">
                <div>
                  <label className="block text-xs font-bold text-[#171918] mb-1">
                    Description of Work
                  </label>
                  <p className="text-[11px] text-[#686E6A] mb-1.5">
                    Please describe your joinery, building, plumbing, decorating or property maintenance requirements...
                  </p>
                  <textarea
                    rows={3}
                    placeholder="Describe the job, location in Yorkshire, or target completion dates..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-2.5 bg-[#FAFBF8] border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#CAA356] resize-none"
                  />
                </div>

                {/* Summary Box */}
                <div className="p-2.5 rounded-xl bg-[#171918]/5 border border-[#171918]/10 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-[#171918]">
                    <span>Type & Service:</span>
                    <span className="text-[#CAA356]">{formData.propertyType} • {formData.selectedServices.join(', ')}</span>
                  </div>
                  <div className="flex justify-between text-[#686E6A] text-[11px]">
                    <span>Direct Call Alternative:</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#171918] font-bold hover:underline">
                      Adrian: {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="p-2.5 rounded-xl border border-gray-200 text-[#171918] hover:bg-gray-50 text-xs font-medium cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-qualification-btn"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#CAA356] hover:bg-[#B69043] text-[#0F1110] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry to Adrian</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </>
      ) : (
        /* Success State */
        <div className="py-5 text-center space-y-3 animate-in zoom-in-95 duration-200">
          <div className="w-12 h-12 rounded-xl bg-[#CAA356]/15 text-[#CAA356] mx-auto flex items-center justify-center border border-[#CAA356]/30">
            <CheckCircle2 className="w-7 h-7 stroke-[2.2]" />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#CAA356] bg-[#CAA356]/10 px-2.5 py-0.5 rounded-full border border-[#CAA356]/20">
              Enquiry Received
            </span>
            <h4 className="text-xl font-bold text-[#171918] mt-1.5 font-display">
              Thank You, {formData.name || 'Valued Customer'}.
            </h4>
            <p className="text-xs text-[#686E6A] max-w-xs mx-auto mt-1 leading-relaxed">
              Adrian will review your {formData.propertyType.toLowerCase()} requirements and get in touch via {formData.preferredContactMethod}.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#FAFBF8] border border-gray-200 max-w-xs mx-auto text-left text-xs space-y-1">
            <div className="flex items-center gap-1.5 text-[#171918] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CAA356]" />
              <span>SafeContractor Approved</span>
            </div>
            <p className="text-[11px] text-[#686E6A]">
              For urgent matters, call Adrian directly on <strong>{BUSINESS_INFO.phone}</strong> (24-Hour Call-Out).
            </p>
          </div>

          <div className="pt-1 flex items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171918] text-white text-xs font-bold"
            >
              <Phone className="w-3 h-3 text-[#CAA356]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-[#686E6A] hover:text-[#171918] underline cursor-pointer"
            >
              Submit Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
