import { useState } from "react";
import { PhoneCall, X, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { submitPhoneEnquiry } from "@/modules/Contact/api/contact.api";

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function ScheduleVisitModal({
  isOpen,
  onClose,
  title = "Visit Live Experience Centre",
  subtitle = "Enter your mobile number to schedule your visit",
}: ScheduleVisitModalProps) {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    // reset state shortly after closing
    setTimeout(() => {
      setIsSubmitted(false);
      setPhone("");
      setPhoneError("");
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/\D/g, "");

    const isValidIndianMobile = /^[6-9]\d{9}$/.test(digitsOnly);
    const isAllSameDigit = /^(\d)\1{9}$/.test(digitsOnly);

    if (!isValidIndianMobile || isAllSameDigit) {
      setPhoneError(
        "Please enter a valid 10-digit mobile number (e.g. 9876543210)",
      );
      return;
    }

    setIsSubmitting(true);
    setPhoneError("");
    try {
      await submitPhoneEnquiry(digitsOnly);
      setIsSubmitted(true);
      toast.success("Callback request submitted successfully!");
    } catch (err: any) {
      console.error("Callback API error:", err);
      toast.error(
        err?.response?.data?.message ||
          "Failed to submit request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-bg-surface border border-border-main rounded-3xl p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-text-muted hover:text-text-main p-1.5 rounded-full hover:bg-bg-main/50 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-text-main">
                  {title}
                </h3>
                <p className="text-xs text-text-muted">{subtitle}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="visit-modal-phone"
                  className="block text-text-muted text-[10px] font-bold uppercase tracking-wider mb-1.5"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="visit-modal-phone"
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      const cleaned = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setPhone(cleaned);
                      setPhoneError("");
                    }}
                    placeholder="9876543210"
                    className="w-full bg-bg-main/60 border border-border-main focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 rounded-xl px-4 py-3 text-text-main text-sm outline-none transition-all font-mono tracking-wider"
                  />
                </div>
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">
                    {phoneError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-accent-blue hover:bg-[#0070e0] text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(10,132,255,0.3)] hover:shadow-[0_8px_30px_rgba(10,132,255,0.5)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Request</span>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-text-main mb-2">
              Request Received!
            </h3>
            <p className="text-xs text-text-muted max-w-xs mb-6">
              Thank you! Our automation expert will call you back on{" "}
              <span className="font-semibold text-text-main">{phone}</span>{" "}
              shortly.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="bg-bg-main hover:bg-border-main/50 text-text-main text-xs font-semibold px-6 py-2.5 rounded-xl border border-border-main transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
