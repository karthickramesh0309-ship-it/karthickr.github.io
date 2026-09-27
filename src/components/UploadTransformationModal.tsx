import React, { useState } from 'react';
import { X, Upload, ShieldCheck, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SalonTransformation } from '../types';

interface UploadTransformationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransformation: (item: SalonTransformation) => void;
}

export const UploadTransformationModal: React.FC<UploadTransformationModalProps> = ({
  isOpen,
  onClose,
  onAddTransformation,
}) => {
  const [title, setTitle] = useState('Hair Transformation');
  const [serviceName, setServiceName] = useState('');
  const [category, setCategory] = useState<'Hair' | 'Makeup' | 'Skin' | 'Bridal' | 'Other'>('Hair');
  const [beforeImage, setBeforeImage] = useState('');
  const [afterImage, setAfterImage] = useState('');
  const [description, setDescription] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [duration, setDuration] = useState('');
  const [clientConsent, setClientConsent] = useState(true);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, target: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (under 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image file must be under 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (target === 'before') {
        setBeforeImage(dataUrl);
      } else {
        setAfterImage(dataUrl);
      }
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceName.trim()) {
      setError('Please enter the service name.');
      return;
    }
    if (!beforeImage) {
      setError('Please provide the "Before" photo.');
      return;
    }
    if (!afterImage) {
      setError('Please provide the "After" photo.');
      return;
    }
    if (!clientConsent) {
      setError('Please confirm client privacy and consent.');
      return;
    }

    const newTransformation: SalonTransformation = {
      id: `custom-${Date.now()}`,
      title: title.trim() || `${category} Transformation`,
      serviceName: serviceName.trim(),
      category,
      beforeImage,
      afterImage,
      description: description.trim() || `Professional ${serviceName} service delivered at Prakruthi Beauty Salon.`,
      servicePrice: servicePrice.trim() || undefined,
      duration: duration.trim() || undefined,
      altText: `Before and after ${serviceName.toLowerCase()} transformation at Prakruthi Beauty Salon`,
      clientConsentVerified: true,
      isCustomUpload: true,
      dateAdded: new Date().toISOString().split('T')[0],
      highlights: ['Authentic Service Result', 'Zero Digital Alterations']
    };

    onAddTransformation(newTransformation);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs">
      <div
        id="upload-transformation-dialog"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-[#143d23] text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#e6ca65]" />
            <h2 className="font-serif text-lg font-semibold tracking-wide">
              Add New Salon Transformation
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 text-sm">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              {error}
            </div>
          )}

          {/* Service Category & Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Category
              </label>
              <select
                id="modal-category-select"
                value={category}
                onChange={(e) => {
                  const val = e.target.value as any;
                  setCategory(val);
                  setTitle(`${val} Transformation`);
                }}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] focus:border-transparent outline-none bg-white"
              >
                <option value="Hair">Hair</option>
                <option value="Skin">Skin</option>
                <option value="Makeup">Makeup</option>
                <option value="Bridal">Bridal</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Service Display Name
              </label>
              <input
                type="text"
                id="modal-service-name-input"
                placeholder="e.g., L'Oreal Hair Spa / O3+ Facial"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Before & After Image Upload Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* BEFORE PHOTO */}
            <div className="border border-dashed border-neutral-300 rounded-xl p-3 text-center bg-neutral-50 hover:bg-neutral-100/50 transition-colors">
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-neutral-800 text-white mb-2">
                BEFORE IMAGE
              </span>
              {beforeImage ? (
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 mb-2">
                  <img
                    src={beforeImage}
                    alt="Before transformation preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setBeforeImage('')}
                    className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full text-xs hover:bg-black"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center aspect-[4/3] cursor-pointer rounded-lg border border-neutral-200 bg-white hover:border-[#143d23] transition-colors p-3">
                  <ImageIcon className="w-8 h-8 text-neutral-400 mb-1" />
                  <span className="text-xs font-medium text-neutral-700">Select Before Photo</span>
                  <span className="text-[11px] text-neutral-400 mt-0.5">JPG, PNG under 5MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'before')}
                    className="hidden"
                  />
                </label>
              )}
              <input
                type="url"
                placeholder="Or paste image URL"
                value={beforeImage.startsWith('data:') ? '' : beforeImage}
                onChange={(e) => setBeforeImage(e.target.value)}
                className="w-full mt-2 text-xs px-2.5 py-1.5 border border-neutral-200 rounded-md outline-none focus:border-[#143d23]"
              />
            </div>

            {/* AFTER PHOTO */}
            <div className="border border-dashed border-neutral-300 rounded-xl p-3 text-center bg-neutral-50 hover:bg-neutral-100/50 transition-colors">
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded bg-[#143d23] text-white mb-2">
                AFTER IMAGE
              </span>
              {afterImage ? (
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 mb-2">
                  <img
                    src={afterImage}
                    alt="After transformation preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setAfterImage('')}
                    className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full text-xs hover:bg-black"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center aspect-[4/3] cursor-pointer rounded-lg border border-neutral-200 bg-white hover:border-[#143d23] transition-colors p-3">
                  <Upload className="w-8 h-8 text-[#143d23]/70 mb-1" />
                  <span className="text-xs font-medium text-neutral-700">Select After Photo</span>
                  <span className="text-[11px] text-neutral-400 mt-0.5">JPG, PNG under 5MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'after')}
                    className="hidden"
                  />
                </label>
              )}
              <input
                type="url"
                placeholder="Or paste image URL"
                value={afterImage.startsWith('data:') ? '' : afterImage}
                onChange={(e) => setAfterImage(e.target.value)}
                className="w-full mt-2 text-xs px-2.5 py-1.5 border border-neutral-200 rounded-md outline-none focus:border-[#143d23]"
              />
            </div>
          </div>

          {/* Description & Metadata */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Short Description (Factual details of service provided)
            </label>
            <textarea
              rows={2}
              placeholder="e.g., Hair smoothing treatment with deep keratin seal. Hair texture nourished and frizz calmed."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] focus:border-transparent outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Service Price (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. ₹2,500.00"
                value={servicePrice}
                onChange={(e) => setServicePrice(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Treatment Duration (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 60 Mins / 2 Hours"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#143d23] focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Privacy & Ethical Salon Guidelines Confirmation */}
          <div className="p-3.5 bg-emerald-50/60 border border-emerald-200/80 rounded-xl">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-700">
              <input
                type="checkbox"
                checked={clientConsent}
                onChange={(e) => setClientConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#143d23] focus:ring-[#143d23]"
              />
              <span className="leading-relaxed">
                <strong className="text-neutral-900 block flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#143d23]" />
                  Ethical Salon Standard & Client Privacy
                </strong>
                I confirm this transformation is authentic, unaltered by beauty filters, and respects client consent & privacy.
              </span>
            </label>
          </div>

          {/* Submit Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-100 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              id="submit-transformation-btn"
              className="px-5 py-2 bg-[#143d23] hover:bg-[#0e2a1b] text-white rounded-lg font-medium shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#e6ca65]" />
              Publish Transformation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
